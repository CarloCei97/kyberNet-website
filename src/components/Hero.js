import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : 1; // Avoid division by zero

    const handleScroll = () => {
      let newOpacity = 1 - 3* window.scrollY / heroHeight;
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero" style={{ opacity }}>
      <div className="hero-content">
        <h1>Welcome to KiberNet</h1>
        <p>Empowering your business with innovative technology solutions.</p>
      </div>
    </div>
  );
};

export default Hero;
