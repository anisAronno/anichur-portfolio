
import { FaEnvelope, FaPhone, FaMapMarker, FaGlobe, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from '@/assets/images/anichur.jpg';

const Profile: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
            <div className="text-center mb-6">
                <img
                    src={profileImage}
                    alt="Profile Image"
                    className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
                <p className="text-blue-600 font-medium">Full Stack Developer</p>
            </div>

            <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-3" />
                    <span>email@example.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-3" />
                    <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaMapMarker className="mr-3" />
                    <span>City, Country</span>
                </div>
            </div>

            <div className="flex justify-center space-x-4">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://anichur.com"
                    className="text-gray-700 hover:text-blue-600"
                >
                    <FaGlobe size={24} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/anisaronno"
                    className="text-gray-700 hover:text-blue-600"
                >
                    <FaGithub size={24} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://linkedin.com/in/anisaronno"
                    className="text-gray-700 hover:text-blue-600"
                >
                    <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://facebook.com/anisaronno"
                    className="text-gray-700 hover:text-blue-600"
                >
                    <FaFacebook size={24} />
                </motion.a>
            </div>
        </div>
    );
};

export default Profile;