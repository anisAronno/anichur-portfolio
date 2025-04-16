import React from 'react';
import { useSkills } from '../hooks/useSkills';

const SkillChip: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-between gap-2">
    <span>{name}</span>
  </span>
);

const CategorySection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-700 mb-3 capitalize">
      {title}
    </h4>
    <div className="flex flex-wrap gap-3">{children}</div>
  </div>
);

const Skills: React.FC = () => {
  const { getSkillsByCategory, skillCategories } = useSkills();

  return (
    <div className="skills-container bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
      Core Technical Competencies
      </h3>
      {skillCategories.map((category) => (
        <CategorySection key={category} title={category}>
          {getSkillsByCategory(category).map((skill) => (
            <SkillChip key={skill.id} name={skill.name} />
          ))}
        </CategorySection>
      ))}
    </div>
  );
};

export default Skills;
