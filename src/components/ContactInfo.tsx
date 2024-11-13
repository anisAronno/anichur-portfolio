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
                    <p className="text-gray-700">email@example.com</p>
                </div>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-blue-50 rounded-lg"
            >
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-700">+1 (234) 567-8900</p>
                </div>
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-blue-50 rounded-lg"
            >
                <FaLocationArrow className="text-blue-600 text-xl mr-4" />
                <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-700">123 Street Name, City, Country</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AddressCard;