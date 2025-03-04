import React from 'react';
import './Services.css';

const services = [
  {
    name: 'C++ Development',
    description:
      'Develop high-performance applications using modern C++ for efficiency and scalability.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/427px-ISO_C%2B%2B_Logo.svg.png'
  },
  {
    name: 'Data Analysis',
    description:
      'Transform raw data into actionable insights with our advanced analytics tools.',
    icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg'
  },
  {
    name: 'Python Automation',
    description:
      'Streamline operations with robust Python automation solutions that save time and reduce errors.',
    icon: 'https://www.svgrepo.com/show/354238/python.svg'
  },
  {
    name: 'Full Stack Web Development',
    description:
      'Build responsive, secure, and scalable web applications from front to back.',
    icon: 'https://www.svgrepo.com/show/374034/reacttemplate.svg'
  },
  {
    name: 'AI Solutions',
    description:
      'Integrate cutting-edge AI to drive smarter business decisions and innovate your processes.',
    icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta-color.png'
  }
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <section className="services-hero">
        <h1 className="services-title">Our Services </h1>
        <p className="services-subtitle">
          Empowering your business with state-of-the-art technology solutions.
        </p>
      </section>
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.name} className="service-icon" />
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
