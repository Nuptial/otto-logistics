import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero" id="home">
        <img src={require('../assets/omer-tır.jpg')} alt="Hero Background" className="hero-image" width="100%" height="100%" style={{objectFit: 'cover'}}/>
      </div>
    </section>
  );
}

export default Hero; 