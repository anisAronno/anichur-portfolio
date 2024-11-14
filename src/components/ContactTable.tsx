import React, { useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm.ts';

const ContactTable: React.FC = () => {
    const { getContactData, contactData, error } = useContactForm();

    useEffect(() => {
        getContactData();
    }, []);

    if (contactData.length === 0 && !error) {
        return <div className="text-center py-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error: {error}</div>;
    }

    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {contactData.map((contact, index) => (
                        <tr key={contact.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-[25%]">{contact.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-[25%]">{contact.email}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 break-words w-[50%]">{contact.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactTable;
