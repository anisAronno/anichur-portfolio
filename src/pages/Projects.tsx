import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Enterprise Scale Microservices Architecture',
            description: 'Designed and implemented a high-performance microservices architecture for a large-scale enterprise application.',
            impact: [
                'Improved system reliability to 99.9% uptime',
                'Reduced response time by 40%',
                'Implemented auto-scaling handling 1M+ daily requests',
                'Introduced distributed caching reducing database load by 60%'
            ],
            features: [
                'Service discovery and load balancing',
                'Distributed logging and monitoring',
                'Circuit breaker implementation',
                'API gateway with rate limiting'
            ],
            tech: ['Kubernetes', 'Docker', 'Node.js', 'Redis', 'PostgreSQL', 'RabbitMQ'],
            image: 'https://via.assets.so/tech.png?id=1',
            githubLink: 'https://github.com/username/project1',
            liveLink: 'https://project1.com',
            isPrivate: true
        },
        {
            id: 2,
            title: 'Real-time Data Processing Pipeline',
            description: 'Built a robust real-time data processing pipeline for handling large-scale streaming data.',
            impact: [
                'Processing 5TB+ data daily with 99.99% accuracy',
                'Reduced processing latency to under 100ms',
                'Decreased infrastructure costs by 35%',
                'Automated data validation saving 20 hours weekly'
            ],
            features: [
                'Real-time stream processing',
                'Automated data validation and cleaning',
                'Fault-tolerant architecture',
                'Real-time analytics dashboard'
            ],
            tech: ['Apache Kafka', 'Elasticsearch', 'Python', 'AWS Lambda', 'Terraform'],
            image: 'https://via.assets.so/tech.png?id=2',
            githubLink: 'https://github.com/username/project2',
            liveLink: 'https://project2.com',
            isPrivate: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">Technical Projects</h1>
                <p className="text-xl text-gray-600 mb-12 text-center">Building scalable solutions to complex problems</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                                    <div className="flex gap-3">
                                        {project.isPrivate ? (
                                            <FaLock className="text-gray-500" title="Private Repository" />
                                        ) : (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="text-2xl hover:text-gray-700" />
                                            </a>
                                        )}
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt className="text-xl hover:text-blue-600" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Impact & Achievements:</h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {project.impact.map((item, index) => (
                                            <li key={index} className="text-gray-600">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="text-gray-600">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="px-8 pb-6 grid md:grid-cols-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-5 md:mb-3 col-span-1">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2 col-span-1 md:col-span-5">
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