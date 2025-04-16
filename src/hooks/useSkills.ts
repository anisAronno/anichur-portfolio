import { Skill, SkillCategory } from '../types';

export const useSkills = () => {
  const allSkills: SkillCategory = {
    languages: [
      { id: 1, name: 'PHP', level: '90%' },
      { id: 2, name: 'TypeScript', level: '80%' },
      { id: 3, name: 'JavaScript', level: '90%' },
    ],
    frameworks: [
      { id: 4, name: 'Laravel', level: '90%' },
      { id: 5, name: 'Express JS', level: '85%' },
      { id: 6, name: 'Next JS', level: '80%' },
      { id: 7, name: 'React JS', level: '85%' },
      { id: 8, name: 'Vue JS', level: '95%' },
      { id: 23, name: 'WordPress', level: '80%' },
    ],
    database: [
      { id: 9, name: 'MySQL', level: '85%' },
      { id: 10, name: 'PostgreSQL', level: '80%' },
      { id: 12, name: 'SQLite', level: '85%' },
      { id: 13, name: 'Redis', level: '90%' },
      { id: 11, name: 'MongoDB', level: '80%' },
      { id: 25, name: 'DynamoDB', level: '80%' },
      { id: 14, name: 'Google Datastore', level: '75%' },
    ],
    cloud: [
      { id: 20, name: 'AWS', level: '60%' },
      { id: 21, name: 'Google Cloud', level: '70%' },
      { id: 24, name: 'Digital Ocean', level: '80%' },
    ],
    tools: [
      { id: 15, name: 'Node JS', level: '75%' },
      { id: 16, name: 'Docker', level: '70%' },
      { id: 17, name: 'Web Sockets', level: '75%' },
      { id: 22, name: 'Git', level: '90%' },
      { id: 19, name: 'Tailwind CSS', level: '90%' },
      { id: 18, name: 'Vite JS', level: '85%' },
    ],
  };

  const getAllSkills = (): Skill[] => {
    return Object.values(allSkills).flat();
  };

  const getSkillsByCategory = (category: keyof SkillCategory): Skill[] => {
    return allSkills[category];
  };

  return {
    getAllSkills,
    getSkillsByCategory,
    skillCategories: Object.keys(allSkills) as (keyof SkillCategory)[],
  };
};
