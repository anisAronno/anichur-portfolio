import React from 'react';
import { SearchFilters, SearchFormProps } from '../../types/contact.type';

export const SearchForm: React.FC<SearchFormProps> = ({
  defaultValues,
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filters: SearchFilters = {
      searchTerm: formData.get('searchTerm') as string,
      searchBy: formData.get('searchBy') as 'name' | 'email' | 'message',
    };
    onSearch(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow"
    >
      <input
        type="text"
        name="searchTerm"
        defaultValue={defaultValues.searchTerm}
        placeholder="Search contacts..."
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 min-w-full"
      />
      <select
        name="searchBy"
        defaultValue={defaultValues.searchBy}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="message">Message</option>
      </select>
      <button
        type="submit"
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};
