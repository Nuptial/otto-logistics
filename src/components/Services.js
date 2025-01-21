import React from 'react';

function Services() {
  const services = [
    {
      title: 'Air Freight',
      icon: '✈️',
      description: 'Fast and reliable air freight services worldwide'
    },
    {
      title: 'Sea Freight',
      icon: '🚢',
      description: 'Cost-effective ocean freight solutions'
    },
    {
      title: 'Ground Transport',
      icon: '🚛',
      description: 'Efficient road and rail transportation'
    },
    {
      title: 'Warehousing',
      icon: '🏭',
      description: 'Secure storage and inventory management'
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 