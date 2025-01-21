import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Otto Logistics Logo" className="logo" />
        <span>Otto Logistics</span>
      </div>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar; 