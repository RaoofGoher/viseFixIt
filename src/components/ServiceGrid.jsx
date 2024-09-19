// ServicesGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard'; // Import ServiceCard component
import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaHome,
    FaPaintBrush,
    FaTools,
    FaCar,
    FaShoppingCart,
    FaUtensils,
    FaNetworkWired,
    FaUserShield
  } from 'react-icons/fa';

// Sample array of service data
const services = [
    { title: 'Roofing', description: 'High-quality roofing services.', icon:<FaMapMarkerAlt/> },
    { title: 'Cleaning', description: 'Professional cleaning for your home.', icon:<FaBriefcase/> },
    { title: 'Interior Design', description: 'Stylish interior design solutions.', icon:<FaHome/> },
    { title: 'Landscaping', description: 'Beautiful landscaping and garden services.', icon:<FaPaintBrush/> },
    { title: 'Plumbing', description: 'Expert plumbing services for all your needs.', icon:<FaTools/> },
    { title: 'Electrical', description: 'Safe and reliable electrical services.', icon:<FaCar/> },
    { title: 'Painting', description: 'Professional painting services for homes and offices.', icon:<FaShoppingCart/> },
    { title: 'Flooring', description: 'High-quality flooring installation and maintenance.', icon:<FaNetworkWired/> },
    { title: 'HVAC', description: 'Heating, ventilation, and air conditioning services.', icon:<FaUserShield/> },
    { title: 'Pest Control', description: 'Effective pest control services to keep your home safe.', icon:<FaBriefcase/> }
  ];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
      ))}
    </div>
  );
};

export default ServicesGrid;
