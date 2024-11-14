// src/hooks/useContactForm.ts
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { Contact, ContactState, FormData } from '../types/contact.type.ts';
import { db } from '../utils/firebase.ts';

export const useContactForm = () => {
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

  const getContactData = async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
 
      const contacts: Contact[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        contacts.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          message: data.message,
        } as Contact);
      });
      setContacts(contacts);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setState((prev) => ({ ...prev, error: errorMessage }));
      alert('Failed to fetch contacts. Please try again.');
      return [];
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
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
  };
};
