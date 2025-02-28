import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 1;
    const handleScroll = () => {
      let newOpacity = 1 - 3 * window.scrollY / headerHeight;
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Background element with dynamic opacity */}
      <div className="header-bg" style={{ opacity: bgOpacity }}></div>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="KiberNet Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
