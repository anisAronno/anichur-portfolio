
import Profile from '../components/Profile';
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-4">
            <Profile />
          </div>

          {/* Bio Section */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  About Me
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate Full Stack Developer with over 5 years of
                  experience in building web applications. Specializing in
                  React, Node.js, and TypeScript, I love creating efficient,
                  scalable, and user-friendly solutions. Currently focused on
                  modern web technologies and always eager to learn new things.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'React',
                    'TypeScript',
                    'Node.js',
                    'Next.js',
                    'MongoDB',
                    'PostgreSQL',
                    'Docker',
                    'AWS',
                    'TailwindCSS',
                    'GraphQL',
                    'REST API',
                    'Git',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800">
                      BSc in Computer Science
                    </h4>
                    <p className="text-gray-600 mt-1">University of XYZ</p>
                    <p className="text-sm text-gray-500 mt-2">2016 - 2020</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800">
                      Senior Full Stack Developer
                    </h4>
                    <p className="text-gray-600 mt-1">Tech Solutions Inc.</p>
                    <p className="text-sm text-gray-500 mt-2">2020 - Present</p>
                    <ul className="list-disc list-inside mt-3 text-gray-600">
                      <li>Led development of microservices architecture</li>
                      <li>Mentored junior developers</li>
                      <li>Improved application performance by 40%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'AWS Certified Developer', date: '2023' },
                    { name: 'MongoDB Certified Developer', date: '2022' },
                    { name: 'React Advanced Certification', date: '2022' },
                    { name: 'Google Cloud Engineer', date: '2021' },
                  ].map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg"
                    >
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">{cert.name}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
