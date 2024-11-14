import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { getAllProjects } = useProjects();
  const projects = getAllProjects();
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Building scalable solutions for enterprise needs
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.isPrivate ? (
                      <FaLock
                        className="text-gray-500"
                        title="Private Repository"
                      />
                    ) : (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-2xl hover:text-gray-700" />
                      </a>
                    )}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-xl hover:text-blue-600" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Impact & Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.impact.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 pb-6 flex flex-col md:flex-row gap-2 md:items-center">
                <h4 className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
