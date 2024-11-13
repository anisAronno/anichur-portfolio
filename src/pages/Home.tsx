import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';

const Home = () => {
  const skills = [
    { name: 'PHP', level: '95%' },
    { name: 'Laravel', level: '90%' },
    { name: 'Node.js', level: '85%' },
    { name: 'Express.js', level: '85%' },
    { name: 'React.js', level: '90%' },
    { name: 'Vue.js', level: '85%' },
    { name: 'Next.js', level: '80%' },
    { name: 'TypeScript', level: '85%' },
  ];

  const experiences = [
    {
      company: 'Tech Corp',
      position: 'Senior Full Stack Developer',
      period: '2020 - Present',
      description:
        'Led development of enterprise applications using React and Node.js',
    },
    {
      company: 'Web Solutions Inc',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="w-full mx-auto grid md:grid-cols-7 gap-8">
        {/* Left Column - Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2"
        >
          <Profile />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5"
        >
          {/* About Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              A passionate Full Stack Developer with extensive experience in
              modern web technologies. Specialized in building scalable
              applications using React, Node.js, and cloud technologies.
            </p>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-blue-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Preview */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Add your featured projects here */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="font-semibold">Project Name</h3>
                <p className="text-gray-600 text-sm">
                  Brief project description
                </p>
              </motion.div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              {[
                {
                  degree: 'Master of Computer Science',
                  school: 'University of Technology',
                  year: '2016 - 2018',
                  gpa: '3.8/4.0',
                  details: 'Specialized in Software Engineering',
                },
                {
                  degree: 'Bachelor of Computer Science',
                  school: 'State University',
                  year: '2012 - 2016',
                  gpa: '3.9/4.0',
                  details: 'Major in Computer Science',
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h3 className="font-bold text-lg text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600">{edu.school}</p>
                  <p className="text-gray-500">{edu.year}</p>
                  <p className="text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  <p className="text-gray-600">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'AWS Certified Developer',
                  issuer: 'Amazon Web Services',
                  date: '2023',
                  icon: '🏆',
                },
                {
                  name: 'Google Cloud Engineer',
                  issuer: 'Google',
                  date: '2022',
                  icon: '🎓',
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100"
                >
                  <span className="text-2xl mb-2 block">{cert.icon}</span>
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Interests & Hobbies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Open Source', icon: '💻' },
                { name: 'AI/ML', icon: '🤖' },
                { name: 'Tech Writing', icon: '✍️' },
                { name: 'Photography', icon: '📸' },
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-lg bg-gray-50"
                >
                  <span className="text-3xl mb-2 block">{interest.icon}</span>
                  <span className="font-medium text-gray-700">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
