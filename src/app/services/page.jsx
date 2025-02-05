import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Residential Electrical Repairs',
      description: 'Comprehensive electrical repair services for homes, ensuring safety and efficiency.',
      image: '/images/residential-repairs.jpg'
    },
    {
      title: 'Commercial Electrical Installations',
      description: 'Expert electrical installations for commercial properties, tailored to business needs.',
      image: '/images/commercial-installations.jpg'
    },
    {
      title: 'Lighting Design & Installation',
      description: 'Custom lighting solutions to enhance the ambiance and functionality of your space.',
      image: '/images/lighting-design.jpg'
    },
    {
      title: 'Electrical Panel Upgrades',
      description: 'Upgrade your electrical panels to support modern appliances and ensure safety.',
      image: '/images/panel-upgrades.jpg'
    },
    {
      title: 'Wiring & Rewiring Services',
      description: 'Professional wiring and rewiring services to meet all your electrical needs.',
      image: '/images/wiring-services.jpg'
    },
    {
      title: 'Emergency Electrical Services',
      description: '24/7 emergency electrical services to address urgent electrical issues promptly.',
      image: '/images/emergency-services.jpg'
    }
  ];

  return (
    <div className="container my-5">
    <section className="services-section text-center">

      <h2 className="text-center mb-4">Our Services</h2>
      <p className="mb-5 text-muted">Explore our range of professional electrician services designed to meet all your electrical needs with precision and care.</p>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
} 
