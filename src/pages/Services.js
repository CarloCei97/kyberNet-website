import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => (
  <div className="content-container">
    <h2>Our Services</h2>
    <div className="services-grid">
      <ServiceCard
        title="IT Strategy"
        description="We offer comprehensive IT strategy planning to align your technology with your business goals."
      />
      <ServiceCard
        title="Cloud Integration"
        description="Our cloud integration services ensure smooth transitions and secure implementations."
      />
      <ServiceCard
        title="Cybersecurity"
        description="Protect your business with our advanced cybersecurity solutions."
      />
    </div>
  </div>
);

export default Services;
