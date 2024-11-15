import { motion } from 'framer-motion';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: 'weDevs',
    position: 'Software Engineer',
    period: 'December 2021 - Present',
    description:
      'Lead development of WordPress product management and licensing solutions, design microservices architecture using Docker and cloud technologies, implement secure payment processing and analytics systems.',
    projects: [
      {
        name: 'Appsero',
        details:
          'WordPress Theme/Plugin Management Platform with licensing, analytics, and multi-payment gateway integration.',
      },
      {
        name: 'weMail',
        details:
          'Email Marketing Platform with drag-and-drop builder and campaign management features.',
      },
    ],
  },
  {
    company: 'Alesha Tech Limited',
    position: 'Web Application Developer',
    period: 'April 2021 - November 2021',
    description:
      'Developed scalable e-commerce solutions and learning management systems. Projects include Alesha Mart (multi-vendor e-commerce) and LMS platform.',
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: 'January 2018 - March 2021',
    description:
      'Developed business solutions including ERP systems, e-commerce platforms, LMS, and payment integration services.',
  },
];

const Experience = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6  text-gray-900">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-4 border-blue-500 pl-4"
          >
            <h3 className="font-semibold text-lg text-gray-900">{exp.position}</h3>
            <p className="text-blue-600">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.period}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
            {exp.projects && (
              <div className="mt-2">
                {exp.projects.map((project, i) => (
                  <div key={i} className="mt-2 text-gray-600">
                    <strong>{project.name}:</strong> {project.details}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
