

// src/components/ContactForm.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm: React.FC = () => {
  const { 
    formData, 
    isLoading, 
    error, 
    handleSubmit, 
    updateFormData 
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white  text-gray-900"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white  text-gray-900"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white  text-gray-900"
          value={formData.message}
          onChange={(e) => updateFormData({ message: e.target.value })}
          placeholder="Your message..."
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
        <FaPaperPlane className="text-sm" />
      </motion.button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </form>
  );
};

export default ContactForm;