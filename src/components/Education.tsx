import { motion } from 'framer-motion';
import React from 'react';
import { EducationType} from '../types';

const education: EducationType[] = [
    {
        degree: 'Masters in Zoology (Fisheries)',
        school: 'National University, Dhaka',
        year: '2013 - 2014',
        details: 'Major in Fisheries',
    },
    {
        degree: 'B.Sc Honers in Zoology',
        school: 'National University, Dhaka',
        year: '2008 - 2012',
        details: 'Major in Zoology',
    }
    
];

const Education: React.FC = () => {
    return (
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
                {education.map((edu, index) => (
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
                        <p className="text-gray-600">{edu.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;