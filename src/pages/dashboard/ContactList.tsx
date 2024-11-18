import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import Pagination from '../../components/common/Pagination';
import ContactTable from '../../components/contacts/ContactTable';
import { SearchForm } from '../../components/contacts/SearchForm';
import { useContactForm } from '../../hooks/useContactForm';

const ContactList: React.FC = () => {
  const navigate = useNavigate();
  const {
    contactData,
    isLoading,
    error,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    getContactData,
    searchFilters,
    ITEMS_PER_PAGE,
  } = useContactForm();

  useEffect(() => {
    getContactData();
  }, []);

  // Function to update URL and trigger search
  const handleSearchSubmit = (filters: typeof searchFilters) => {
    handleSearch(filters);
    navigate({
      search: `?page=1&search=${encodeURIComponent(filters.searchTerm)}&searchBy=${filters.searchBy}`,
    });
  };

  // Function to handle page changes
  const handlePaginationChange = (page: number) => {
    handlePageChange(page);
    navigate({
      search: `?page=${page}&search=${encodeURIComponent(searchFilters.searchTerm)}&searchBy=${searchFilters.searchBy}`,
    });
  };

  // Function to clear search filters
  const clearSearch = () => {
    handleSearch({ searchTerm: '', searchBy: 'name' });
    navigate({
      search: `?page=1`,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Contact Messages
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage and view all contact form submissions
          </p>
        </div>

        {/* Search Section */}
        <div className="p-6 border-b border-gray-200">
          <SearchForm
            defaultValues={searchFilters}
            onSearch={handleSearchSubmit}
          />
        </div>

        {/* Table Section */}
        <div className="p-6">
          {error ? (
            <div className="text-center py-4">
              <div className="text-red-500">{error}</div>
              <button
                onClick={() => getContactData()}
                className="mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Try Again
              </button>
            </div>
          ) : isLoading ? (
            <Loading />
          ) : contactData.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No contact messages found</p>
              {searchFilters.searchTerm && (
                <button
                  onClick={clearSearch}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <ContactTable contacts={contactData} />
          )}
        </div>

        {/* Pagination Section */}
        <div className="border-t border-gray-200">
          <div className="px-6 py-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePaginationChange}
            />
          </div>
        </div>

        {/* Stats Section */}
        {!isLoading && !error && contactData.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                {Math.min(
                  currentPage * ITEMS_PER_PAGE,
                  (currentPage - 1) * ITEMS_PER_PAGE + contactData.length
                )}{' '}
                of {(totalPages - 1) * ITEMS_PER_PAGE + contactData.length}{' '}
                results
              </span>
              <span>
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
