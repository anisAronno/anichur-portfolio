import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Professional Summary
      </h2>
      <p className="text-gray-600 leading-relaxed break-words whitespace-pre-line">
        I'm a Senior Software Engineer based in Dhaka, Bangladesh, with over 7
        years of experience in crafting scalable SaaS platforms and
        microservice-driven architectures. My core expertise lies in Laravel,
        Node.js Vue.js, and React.js, complemented by a strong foundation in
        system design, RESTful API development, and cloud-native technologies.
        {'\n\n'}
        At Brain Station 23, I lead the design and development of
        enterprise-grade applications—focusing on high-performance backend
        systems, security, and clean architecture. I actively contribute to
        strategic technical decisions that drive system scalability and
        maintainability.
        {'\n\n'}
        During my time at weDevs, I engineered critical components for two major
        SaaS platforms: Appsero, a digital product distribution platform where I
        designed push-to-deploy infrastructure and license management systems,
        and weMail, an enterprise email marketing solution where I developed
        campaign delivery systems with advanced tracking and analytics
        capabilities. These experiences sharpened my skills in creating scalable
        microservices and handling high-volume data processing challenges.{' '}
        {'\n\n'}
        My technical journey spans both backend and frontend domains, with
        particular strength in microservice architecture, distributed systems,
        and event-driven design. I've successfully implemented complex systems
        utilizing Docker, AWS, GCP, and various database technologies including
        MySQL, PostgreSQL, MongoDB, DynamoDB and Redis.
        {'\n\n'}
        With a deep passion for problem-solving and developer experience, I
        strive to build tools and systems that are not only efficient and secure
        but also intuitive and impactful. I'm continuously exploring better ways
        to simplify complexity, optimize performance, and push boundaries in
        modern web development.
        {'\n\n'}
        My approach combines technical depth with strategic vision—balancing
        immediate functionality needs with long-term architectural
        considerations. Whether designing API gateways, implementing service
        meshes, or optimizing database performance, I bring a thoughtful and
        systematic approach to every engineering challenge.
      </p>
    </section>
  );
};

export default AboutMe;
