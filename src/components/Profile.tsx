import profileImage from '@/assets/images/anichur.jpg';
import {
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
} from 'react-icons/fa';

const socialLinks = [
  { href: 'https://anichur.com', icon: FaGlobe },
  { href: 'https://github.com/anisaronno', icon: FaGithub },
  { href: 'https://linkedin.com/in/anisaronno', icon: FaLinkedin },
  { href: 'https://facebook.com/anisaronno', icon: FaFacebook },
];

const contactInfo = [
  {
    icon: FaEnvelope,
    href: 'mailto:contact@anichur.com',
    text: 'contact@anichur.com',
  },
  {
    icon: FaPhone,
    href: 'https://wa.me/8801816366535',
    text: '+880 1816 366535',
  },
  { icon: FaMapMarker, href: '', text: 'Dhaka, Bangladesh' },
];

const Profile = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
      <div className="flex flex-col items-center justify-center">
        <div className="image flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Anichur Rahaman"
            className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500"
          />
        </div>
        <div className="space-y-0 mb-6 w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800">Anichur Rahaman</h1>
          <p className="text-blue-600 font-medium">Senior Software Engineer</p>

          <div className="!my-2">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center text-gray-600 mb-1">
                <item.icon className="mr-3" />
                {item.href ? (
                  <a href={item.href}>{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="!mb-3 !mt-2">
            <a
              href="https://github.com/anisAronno/anisAronno/raw/main/anisAronno.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-lg hover:shadow-blue-500/50 hover:text-black transition-all duration-300"
            >
              <span className="mr-2">Download Resume</span>
              <FaDownload className="w-4 h-4" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
