import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Here you can implement your form submission logic
        try {
            // Example API call (replace with your actual implementation)
            // await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
            // Clear form after successful submission
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message..."
                ></textarea>
            </div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
            </motion.button>
        </form>
    );
};

export default ContactForm;