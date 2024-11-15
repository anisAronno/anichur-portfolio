import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Contact,
  ContactState,
  FormData,
  SearchFilters,
} from '../types/contact.type';
import { db } from '../utils/firebase';

const ITEMS_PER_PAGE = 10;

export const useContactForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState<ContactState>({
    formData: {
      name: '',
      email: '',
      message: '',
    },
    isLoading: false,
    error: null,
  });

  const [contactData, setContacts] = useState<Contact[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    searchTerm: searchParams.get('search') || '',
    searchBy:
      (searchParams.get('searchBy') as 'name' | 'email' | 'message') || 'name',
  });

  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    getContactData();
  }, [currentPage, searchFilters]);

  const updateFormData = (data: Partial<FormData>) => {
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, ...data },
    }));
  };

  const resetForm = () => {
    setState({
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isLoading: false,
      error: null,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      await addDoc(collection(db, 'contacts'), {
        ...state.formData,
        timestamp: new Date(),
      });

      resetForm();
      // Refresh the contact list after successful submission
      await getContactData();
      alert('Message sent successfully!');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setState((prev) => ({ ...prev, error: errorMessage }));
      alert('Failed to send message. Please try again.');
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    setSearchParams({
      page: '1',
      search: filters.searchTerm,
      searchBy: filters.searchBy,
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
  };

  const getContactData = async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const contactsQuery = collection(db, 'contacts');
      const queryConstraints = [];

      // Add search filter if search term exists
      if (searchFilters.searchTerm) {
        queryConstraints.push(
          where(searchFilters.searchBy, '==', searchFilters.searchTerm)
        );
      }

      // Add ordering by timestamp
      queryConstraints.push(orderBy('timestamp', 'desc'));

      // Add pagination
      queryConstraints.push(limit(ITEMS_PER_PAGE));
      if (currentPage > 1) {
        const lastDoc = await getLastDocOfPreviousPage(currentPage - 1);
        if (lastDoc) {
          queryConstraints.push(startAfter(lastDoc));
        }
      }

      const q = query(contactsQuery, ...queryConstraints);
      const querySnapshot = await getDocs(q);

      const contacts: Contact[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        contacts.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: data.timestamp?.toDate(),
        } as Contact);
      });

      // Get total count - handle it differently when searching
      let totalCount;
      if (searchFilters.searchTerm) {
        const searchQuery = query(
          collection(db, 'contacts'),
          where(searchFilters.searchBy, '==', searchFilters.searchTerm)
        );
        const searchSnapshot = await getDocs(searchQuery);
        totalCount = searchSnapshot.size;
      } else {
        const totalSnapshot = await getDocs(collection(db, 'contacts'));
        totalCount = totalSnapshot.size;
      }

      setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));
      setContacts(contacts);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const getLastDocOfPreviousPage = async (page: number) => {
    const q = query(
      collection(db, 'contacts'),
      orderBy('timestamp', 'desc'),
      limit(page * ITEMS_PER_PAGE)
    );
    const docs = await getDocs(q);
    const lastDoc = docs.docs[docs.docs.length - 1];
    return lastDoc;
  };

  return {
    contactData,
    getContactData,
    formData: state.formData,
    isLoading: state.isLoading,
    error: state.error,
    handleSubmit,
    updateFormData,
    resetForm,
    totalPages,
    currentPage,
    handlePageChange,
    searchFilters,
    handleSearch,
  };
};
