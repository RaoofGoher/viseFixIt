// ServicesGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard'; // Import ServiceCard component

// Sample array of service data
const services = [
    { title: 'Roofing', description: 'High-quality roofing services.' },
    { title: 'Cleaning', description: 'Professional cleaning for your home.' },
    { title: 'Interior Design', description: 'Stylish interior design solutions.' },
    { title: 'Landscaping', description: 'Beautiful landscaping and garden services.' },
    { title: 'Plumbing', description: 'Expert plumbing services for all your needs.' },
    { title: 'Electrical', description: 'Safe and reliable electrical services.' },
    { title: 'Painting', description: 'Professional painting services for homes and offices.' },
    { title: 'Flooring', description: 'High-quality flooring installation and maintenance.' },
    { title: 'HVAC', description: 'Heating, ventilation, and air conditioning services.' },
    { title: 'Pest Control', description: 'Effective pest control services to keep your home safe.' }
  ];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServicesGrid;
