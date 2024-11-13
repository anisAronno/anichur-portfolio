import { motion } from 'framer-motion';
import ContactInfo from '../components/ContactInfo.tsx';
import ContactForm from '../components/ContactForm.tsx';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl font-bold text-gray-900 mb-4"
                        >
                            Get in Touch
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have a question or want to work together? Drop me a message!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Contact Information */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h3>
                            <ContactInfo/>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                        >
                           <ContactForm />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;