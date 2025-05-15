import React, { useState, useEffect } from "react";
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`ars-navbar ${isScrolled ? 'scrolled' : ''}`} id="ars_navbar">
      <div className="top-bar">
        <a href="/contact" className="top-bar-link">
          <span className="text-white">
            Book a <span className="text-neon-green">Trial</span> Class
          </span>
        </a>
      </div>
      
      <div className="nav-wrapper">
        <nav className="nav-container">
          <div className="nav-logo">
            <a href="/" className="custom-logo-link" rel="home" aria-current="page">
              <img
                width="1536"
                height="556"
                src="./logo.png"
                className="custom-logo"
                alt="Push Sports"
                loading="lazy"
              />
            </a>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="sports-academy" className="nav-link" onClick={closeMobileMenu}>Sports Academy</a>
              </li>
              <li className="nav-item">
                <a href="service" className="nav-link" onClick={closeMobileMenu}>Service</a>
              </li>
              <li className="nav-item">
                <a href="/infrastructure" className="nav-link" onClick={closeMobileMenu}>Sports Infrastructure</a>
              </li>
              <li className="nav-item">
                <a href="/Franchise" className="nav-link" onClick={closeMobileMenu}>Franchise</a>
              </li>
              <li className="nav-item">
                <a href="/membership" className="nav-link" onClick={closeMobileMenu}>Membership</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link" onClick={closeMobileMenu}>About Us</a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link" onClick={closeMobileMenu}>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="nav-actions">
            <a href="#" className="login-button" aria-label="Login">
              <FontAwesomeIcon icon={faUserLock} />
              <span className="login-text">Login</span>
            </a>
            
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;