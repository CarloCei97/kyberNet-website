import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsFeed from '../components/NewsFeed';
import AnimatedSection from '../components/AnimatedSection';
import '../App.css';

const Home = () => {
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set threshold for when the container background should become opaque
      setContainerVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <div className={`content-container ${containerVisible ? 'visible' : ''}`}>
        <AnimatedSection>
        </AnimatedSection>
        <AnimatedSection>
          <NewsFeed />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
