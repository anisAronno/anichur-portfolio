import React from 'react';
import { ContactTableProps } from '../../types/contact.type';

export const ContactTable: React.FC<ContactTableProps> = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <tr
              key={contact.id}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-[20%]">
                {contact.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-[25%]">
                {contact.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 break-words w-[40%]">
                {contact.message}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-[15%]">
                {contact.timestamp?.toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
