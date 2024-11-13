import { ProjectDetails } from '../types';

const projects: ProjectDetails[] = [
  {
    id: 1,
    title: 'Appsero - WordPress Theme/Plugin Management Platform',
    description:
      'Comprehensive licensing and analytics platform for WordPress products with integrated payment solutions and automated deployment systems.',
    impact: [
      'Successfully integrated multiple payment gateways (Stripe, FastSpring, Paddle)',
      'Implemented e-commerce platform integrations (WooCommerce, EDD, Gumroad)',
      'Developed customer portal for product management',
      'Created analytics dashboard for tracking metrics',
      'Built automated deployment system for multiple platforms',
    ],
    features: [
      'Licensing system for WordPress products',
      'Multi-payment gateway integration',
      'Customer portal with license management',
      'Analytics dashboard',
      'Automated deployment to Google Cloud/WP.org',
    ],
    tech: ['PHP', 'Laravel', 'React', 'Docker', 'Google Cloud', 'MySQL'],
    image: 'https://appsero.com/logo.png',
    githubLink: 'https://github.com/appsero',
    liveLink: 'https://appsero.com',
    isPrivate: false,
  },
  {
    id: 2,
    title: 'weMail - Email Marketing Platform',
    description:
      'Standalone SaaS email marketing solution integrated with WordPress, featuring campaign management and drag-and-drop email builder.',
    impact: [
      'Built intuitive drag-and-drop email builder interface',
      'Implemented comprehensive campaign management system',
      'Integrated real-time analytics tracking',
      'Developed WordPress plugin integration',
    ],
    features: [
      'Drag-and-drop email builder',
      'Campaign management dashboard',
      'WordPress plugin integration',
      'Real-time analytics',
      'Automated email workflows',
    ],
    tech: ['React', 'Node.js', 'WordPress', 'MongoDB', 'Redis'],
    image: 'https://wemail.com/logo.png',
    githubLink: 'https://github.com/wemail',
    liveLink: 'https://wemail.io',
    isPrivate: true,
  },
  {
    id: 3,
    title: 'Alesha Mart - Multi-vendor E-commerce Platform',
    description:
      'Large-scale e-commerce platform with advanced inventory management system and multi-vendor support.',
    impact: [
      'Implemented scalable multi-vendor architecture',
      'Developed advanced inventory management system',
      'Optimized platform performance',
      'Integrated secure payment processing',
    ],
    features: [
      'Multi-vendor support',
      'Advanced inventory management',
      'Real-time order tracking',
      'Payment gateway integration',
    ],
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'AWS'],
    image: 'https://aleshamart.com/logo.png',
    githubLink: 'https://github.com/aleshamart',
    liveLink: 'https://aleshamart.com',
    isPrivate: true,
  },
];

export const useProjects = () => {
  const getAllProjects = () => projects;
  const getPublicProjects = () =>
    projects.filter((project) => !project.isPrivate);
  const getProjectById = (id: number) =>
    projects.find((project) => project.id === id);

  return {
    getAllProjects,
    getPublicProjects,
    getProjectById,
  };
};

export default useProjects;
