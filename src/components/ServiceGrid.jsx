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

import Roofing from "../assets/Roofing.jpg"
import Cleaning from "../assets/Cleaning.jpg"
import Interior from "../assets/Interior Design.jpg"
import LandScaping from "../assets/Landscaping.jpg"
import Plumbing from "../assets/Plumbing.jpg"
import Electrical from "../assets/Electrical.jpg"
import Painting from "../assets/Painting.jpg"
import Flooring from "../assets/Flooring.jpg"
import HVAC from "../assets/HVAC.jpg"
import PestControl from "../assets/Pest Control.jpg"


// Sample array of service data
const services = [
    { title: 'Roofing', description: 'High-quality roofing services.', icon:<FaMapMarkerAlt/>,img: Roofing },
    { title: 'Cleaning', description: 'Professional cleaning for your home.', icon:<FaBriefcase/>,img: Cleaning },
    { title: 'Interior Design', description: 'Stylish interior design solutions.', icon:<FaHome/>,img: Interior },
    { title: 'Landscaping', description: 'Beautiful landscaping and garden services.', icon:<FaPaintBrush/>,img: LandScaping },
    { title: 'Plumbing', description: 'Expert plumbing services for all your needs.', icon:<FaTools/>,img:Plumbing },
    { title: 'Electrical', description: 'Safe and reliable electrical services.', icon:<FaCar/>,img: Electrical },
    { title: 'Painting', description: 'Professional painting services for homes and offices.', icon:<FaShoppingCart/>,img: Painting },
    { title: 'Flooring', description: 'High-quality flooring installation and maintenance.', icon:<FaNetworkWired/>,img: Flooring },
    { title: 'HVAC', description: 'Heating, ventilation, and air conditioning services.', icon:<FaUserShield/>,img: HVAC },
    { title: 'Pest Control', description: 'Effective pest control services to keep your home safe.', icon:<FaBriefcase/>,img: PestControl }
  ];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} image={service.img} />
      ))}
    </div>
  );
};

export default ServicesGrid;
