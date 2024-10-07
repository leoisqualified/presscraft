import React from 'react';

function Services() {
  const servicesList = [
    { title: 'Custom Signage', description: 'Fucking Hell' },
    { title: 'Digital Signage', description: 'Fucking Hell' },
    { title: 'Vehicle Graphics', description: 'Fucking Hell' },
    { title: 'Installation & Maintenance', description: 'Fucking Hell' },
    { title: 'Logistic Support', description: 'Fucking Hell' },
    { title: 'And Many More'}
  ];

  return (
    <>
      <section className="services">
        <h1 className="services-title">Services We Offer</h1>
        <div className="service-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
