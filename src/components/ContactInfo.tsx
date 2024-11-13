import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';

const AddressCard = () => {
    return (
        <div className="space-y-6">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-blue-50 rounded-lg"
            >
                <FaEnvelope className="text-blue-600 text-xl mr-4" />
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:contact@anichur.com" className="text-gray-700">contact@anichur.com</a>
                </div>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-blue-50 rounded-lg"
            >
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="https://wa.me/8801816366535" className="text-gray-700">+88 01816 366535</a>
                </div>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-blue-50 rounded-lg"
            >
                <FaLocationArrow className="text-blue-600 text-xl mr-4" />
                <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-700">Dhaka, Bangladesh</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AddressCard;