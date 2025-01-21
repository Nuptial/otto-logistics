import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Otto Logistics Logo" className="logo" />
        <span>Otto Logistics</span>
      </div>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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