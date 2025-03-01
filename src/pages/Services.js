import React from 'react';
import './Services.css';

const services = [
  {
    name: 'C++ Development',
    description:
      'Develop high-performance applications using modern C++ for efficiency and scalability.',
    icon: 'https://via.placeholder.com/80?text=C%2B%2B'
  },
  {
    name: 'Data Analysis',
    description:
      'Transform raw data into actionable insights with our advanced analytics tools.',
    icon: 'https://via.placeholder.com/80?text=Data'
  },
  {
    name: 'Python Automation',
    description:
      'Streamline operations with robust Python automation solutions that save time and reduce errors.',
    icon: 'https://via.placeholder.com/80?text=Py'
  },
  {
    name: 'Full Stack Web Development',
    description:
      'Build responsive, secure, and scalable web applications from front to back.',
    icon: 'https://via.placeholder.com/80?text=Web'
  },
  {
    name: 'AI Solutions',
    description:
      'Integrate cutting-edge AI to drive smarter business decisions and innovate your processes.',
    icon: 'https://via.placeholder.com/80?text=AI'
  }
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <section className="services-hero">
        <h1 className="services-title">Our Services</h1>
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
      <section className="call-to-action">
        <button className="book-call-button">Book a Call Now</button>
      </section>
    </div>
  );
};

export default Services;
