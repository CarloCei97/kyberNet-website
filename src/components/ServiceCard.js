import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

export default ServiceCard;
