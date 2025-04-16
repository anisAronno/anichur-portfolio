import { motion } from 'framer-motion';
import React from 'react';
import { useSkills } from '../hooks/useSkills';

const SkillWithMotion: React.FC = () => {
  const { getAllSkills } = useSkills();

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
      Proficiency & Expertise Level
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {getAllSkills().map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-900">{skill.name}</span>
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
  );
};

export default SkillWithMotion;
