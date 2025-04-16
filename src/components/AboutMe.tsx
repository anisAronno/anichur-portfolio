import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Professional Summary
      </h2>
    <p className="text-gray-600 leading-relaxed break-words whitespace-pre-line">
      I'm a Senior Software Engineer based in Dhaka, Bangladesh, with over 7
      years of experience building scalable SaaS platforms and microservice
      architectures. I specialize in Laravel, Vue.js, React.js and Node.js,
      with strong expertise in system design, API development, and
      cloud-native solutions. {'\n\n'} Currently at Brain Station 23, I work on
      enterprise applications—designing robust backend systems, ensuring
      performance and security, and leading architecture decisions.
      Previously, I contributed to large-scale SaaS products at weDevs,
      focusing on license management, deployment automation, and analytics
      systems. {'\n\n'} I'm passionate about simplifying complex processes and building
      tools that improve the developer experience and deliver real impact.
    </p>
    </section>
  );
};

export default AboutMe;
