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
    <header className={`push-navbar ${isScrolled ? 'scrolled' : ''}`} id="push_navbar">
      <div className="top-bar">
        <a href="https://pushsports.in/book-a-free-trial-class/" className="top-bar-link">
          <span className="text-white">
            Book a <span className="text-neon-green">Trial</span> Class
          </span>
        </a>
      </div>
      
      <div className="nav-wrapper">
        <nav className="nav-container">
          <div className="nav-logo">
            <a href="https://pushsports.in/" className="custom-logo-link" rel="home" aria-current="page">
              <img
                width="1536"
                height="556"
                src="https://pushsports.in/wp-content/uploads/2024/08/push-final-logo.png"
                className="custom-logo"
                alt="Push Sports"
                loading="lazy"
              />
            </a>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="https://pushsports.in/sports-academy/" className="nav-link" onClick={closeMobileMenu}>Sports Academy</a>
              </li>
              <li className="nav-item">
                <a href="https://pushsports.in/school-hub/" className="nav-link" onClick={closeMobileMenu}>School hub</a>
              </li>
              <li className="nav-item">
                <a href="https://pushsports.in/sports-infrastructure/" className="nav-link" onClick={closeMobileMenu}>Sports Infrastructure</a>
              </li>
              <li className="nav-item">
                <a href="https://pushsports.in/franchise/" className="nav-link" onClick={closeMobileMenu}>Franchise</a>
              </li>
              <li className="nav-item dropdown">
                <button className="dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                  Story <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="https://pushsports.in/about/" className="dropdown-link" onClick={closeMobileMenu}>About us</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="https://pushsports.in/push-sports-shark-tank-india/" className="dropdown-link" onClick={closeMobileMenu}>Shark Tank</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="https://pushsports.in/contact/" className="nav-link" onClick={closeMobileMenu}>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="nav-actions">
            <a href="https://pushsports.in/student-login/" className="login-button" aria-label="Login">
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