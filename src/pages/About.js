import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const fadeDistance = 150; // The scroll distance over which the hero fades
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / fadeDistance, 0);
      setHeroOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-wrapper">
      <section className="hero-section">
        <div className="hero-content" style={{ opacity: heroOpacity }}>
          <div className="hero-card">
            <h1 className="hero-title">Our Epic Journey to KiberNet</h1>
            <p className="hero-subtitle">
              From a spark of boundless inspiration to revolutionizing the digital realm, our adventure is fueled by passion, audacity, and unstoppable creativity.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-card">
          <h2>Our Inspiring Story</h2>
          <div className="story-content">
            <p>
              It all began with a vivid vision: to bridge the seemingly insurmountable gap between cutting-edge technology and untapped human potential. At KiberNet, we don’t merely provide IT solutions—we craft immersive experiences that empower your business to soar to unimaginable heights.
            </p>
            <p>
              Every triumph and challenge along our journey has been a testament to our unwavering commitment to excellence. Each line of code, every innovative strategy, and all the late-night brainstorming sessions have contributed to writing a saga of transformation, growth, and relentless pursuit of perfection.
            </p>
            <p>
              Our passion ignites innovation, and our innovative spirit transforms obstacles into stepping stones. With every project, we weave together creativity, technology, and ambition to create a tapestry of success that not only meets but exceeds expectations.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
