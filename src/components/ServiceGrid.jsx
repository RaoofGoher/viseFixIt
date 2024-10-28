// ServicesGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard'; // Import ServiceCard component
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaHome,
  FaPaintBrush,
  FaTools,
  FaCar,
  FaShoppingCart,
  FaNetworkWired,
  FaUserShield
} from 'react-icons/fa';

import Roofing from "../assets/Roofing.jpg";
import Cleaning from "../assets/Cleaning.jpg";
import Interior from "../assets/Interior Design.jpg";
import LandScaping from "../assets/Landscaping.jpg";
import Plumbing from "../assets/Plumbing.jpg";
import Electrical from "../assets/Electrical.jpg";
import Painting from "../assets/Painting.jpg";
import Flooring from "../assets/Flooring.jpg";
import HVAC from "../assets/HVAC.jpg";
import PestControl from "../assets/Pest Control.jpg";

// Sample array of service data
const defaultServices = [
  { title: 'Roofing', description: 'High-quality roofing services.', icon: <FaMapMarkerAlt />, img: Roofing },
  { title: 'Cleaning', description: 'Professional cleaning for your home.', icon: <FaBriefcase />, img: Cleaning },
  { title: 'Interior Design', description: 'Stylish interior design solutions.', icon: <FaHome />, img: Interior },
  { title: 'Landscaping', description: 'Beautiful landscaping and garden services.', icon: <FaPaintBrush />, img: LandScaping },
  { title: 'Plumbing', description: 'Expert plumbing services for all your needs.', icon: <FaTools />, img: Plumbing },
  { title: 'Electrical', description: 'Safe and reliable electrical services.', icon: <FaCar />, img: Electrical },
  { title: 'Painting', description: 'Professional painting services for homes and offices.', icon: <FaShoppingCart />, img: Painting },
  { title: 'Flooring', description: 'High-quality flooring installation and maintenance.', icon: <FaNetworkWired />, img: Flooring },
  { title: 'HVAC', description: 'Heating, ventilation, and air conditioning services.', icon: <FaUserShield />, img: HVAC },
  { title: 'Pest Control', description: 'Effective pest control services to keep your home safe.', icon: <FaBriefcase />, img: PestControl }
];

const images = [Roofing, Cleaning, Interior, LandScaping, Plumbing, Painting];

// Function to get a random image name
function getRandomImageName() {
  // Get a random index based on the length of the images array
  const randomIndex = Math.floor(Math.random() * images.length);
  
  // Return the randomly selected image name
  return images[randomIndex];
}


const ServicesGrid = () => {
  const [services, setServices] = useState(defaultServices);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8; // Number of services to show per page

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.thefixit4u.com/categories/all');
        const apiCategories = response.data.data.categories;
        const updatedServices = apiCategories.map((category, index) => ({
          title: category.name,
          description: defaultServices[index]?.description || 'Service description not available',
          icon: defaultServices[index]?.icon || <FaTools />, 
          img: defaultServices[index]?.img || getRandomImageName()
        }));

        if (apiCategories.length < defaultServices.length) {
          const remainingServices = defaultServices.slice(apiCategories.length);
          setServices([...updatedServices, ...remainingServices]);
        } else {
          setServices(updatedServices);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Pagination logic: slice the services array based on the current page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  // Handle next and previous page
  const nextPage = () => {
    if (currentPage < Math.ceil(services.length / servicesPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="p-4">
      {/* Grid for services */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            image={service.img}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-6 text-white">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mr-2 bg-primaryColor rounded-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(services.length / servicesPerPage)}
          className={`px-4 py-2 bg-primaryColor rounded-md ${currentPage >= Math.ceil(services.length / servicesPerPage) && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServicesGrid;
