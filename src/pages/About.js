import React from 'react';
import './About.css';

const teamMembers = [
  { name: 'Jane Doe', role: 'Visionary CEO & Founder', img: 'https://via.placeholder.com/150' },
  { name: 'John Smith', role: 'Innovative Lead Developer', img: 'https://via.placeholder.com/150' },
  { name: 'Mary Johnson', role: 'Dynamic Project Manager', img: 'https://via.placeholder.com/150' }
];

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Journey to KiberNet</h1>
          <p className="hero-subtitle">
            From a spark of inspiration to transforming digital landscapes—our story is one of passion, innovation, and relentless creativity.
          </p>
        </div>
      </section>

      <section className="story-section">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            It all began with a vision to bridge the gap between technology and human potential. At KiberNet, we don’t just implement IT solutions;
            we craft bespoke experiences that empower your business.
          </p>
          <p>
            Every challenge we’ve overcome and every milestone we’ve reached has been driven by our commitment to excellence and a deep understanding
            of our clients’ needs. We believe every line of code and every strategy is a vital chapter in your success story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
