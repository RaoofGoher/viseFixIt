import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
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

// Import all images
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
import Movers from "../assets/servicesImages/movers.jpg";
import HandyMan from "../assets/servicesImages/handyMan.jpg";
import PetServices from "../assets/servicesImages/petServices.jpg";
import PersonalTraining from "../assets/servicesImages/personalTrainings.jpg";
import BeautyServices from "../assets/servicesImages/beautyServices.png";
import CateringServices from "../assets/servicesImages/cateringServices.jpg";
import HealthAndWellness from "../assets/servicesImages/healthAndWellness.jpg";
import EventPlanning from "../assets/servicesImages/eventPlaner.jpg";
import Photography from "../assets/servicesImages/photographyServices.jpg";
import AutoServices from "../assets/servicesImages/autoServices.jpg";
import HomeServices from "../assets/servicesImages/homeServices.jfif";
import Accounting from "../assets/servicesImages/accounting.jpg";
import LegalServices from "../assets/servicesImages/legalServices.jfif";
import HomeSecurity from "../assets/servicesImages/homeSecurity.jfif";
import EntertainmentServices from "../assets/servicesImages/entertainmentServices.jpg";
import NetworkServices from "../assets/servicesImages/networkServices.jfif";
import ItServices from "../assets/servicesImages/itServices.jfif";
import { useMediaQuery } from 'react-responsive';


// Mappings for icons and descriptions
const iconMapping = {
  Cleaning: <FaBriefcase />,
  Electrician: <FaTools />,
  Plumbing: <FaTools />,
  "Lawn Care": <FaCar />,
  "Handyman Services": <FaShoppingCart />,
  "Moving Services": <FaUserShield />,
  "Pet Services": <FaMapMarkerAlt />,
  "Personal Training": <FaBriefcase />,
  "Beauty Services": <FaPaintBrush />,
  "Catering Services": <FaShoppingCart />,
  "Health and Wellness": <FaUserShield />,
  "Event Planning": <FaMapMarkerAlt />,
  "Photography": <FaBriefcase />,
  "Auto Services": <FaTools />,
  "Home Improvement": <FaTools />,
  Accounting: <FaBriefcase />,
  "Legal Services": <FaUserShield />,
  "Home Security": <FaMapMarkerAlt />,
  "Entertainment Services": <FaPaintBrush />,
  "Network Services": <FaNetworkWired />,
  "IT Services": <FaTools />
};

const descriptionMapping = {
  Cleaning: 'Professional cleaning for your home.',
  Electrician: 'Safe and reliable electrical services.',
  Plumbing: 'Expert plumbing services for all your needs.',
  "Lawn Care": 'Beautiful lawn care and maintenance services.',
  "Handyman Services": 'Reliable handyman services for your home.',
  "Moving Services": 'Efficient moving services to help you relocate.',
  "Pet Services": 'Quality care for your pets.',
  "Personal Training": 'Personalized fitness training to meet your goals.',
  "Beauty Services": 'Professional beauty treatments and services.',
  "Catering Services": 'Delicious catering for all occasions.',
  "Health and Wellness": 'Promoting health and well-being.',
  "Event Planning": 'Planning your perfect event.',
  "Photography": 'Capture your special moments with professional photography.',
  "Auto Services": 'Reliable automotive services.',
  "Home Improvement": 'Quality home improvement services.',
  Accounting: 'Expert accounting and financial services.',
  "Legal Services": 'Professional legal advice and representation.',
  "Home Security": 'Protect your home with security solutions.',
  "Entertainment Services": 'Fun and engaging entertainment services.',
  "Network Services": 'Reliable network services for your business.',
  "IT Services": 'Comprehensive IT solutions and support.'
};

// Function to get the correct image based on the service name
const getImage = (serviceName) => {
  switch (serviceName.trim()) {
    case 'Cleaning': return Cleaning;
    case 'Electrician': return Electrical;
    case 'Plumbing': return Plumbing;
    case 'Lawn Care': return LandScaping;
    case 'Handyman Services': return HandyMan; // Use appropriate image
    case 'Moving Services': return Movers; // Use appropriate image
    case 'Pet Services': return PetServices; // Use appropriate image
    case 'Personal Training': return PersonalTraining; // Use appropriate image
    case 'Beauty Services': return BeautyServices; // Use appropriate image
    case 'Catering Services': return CateringServices; // Use appropriate image
    case 'Health and Wellness': return HealthAndWellness; // Use appropriate image
    case 'Event Planning': return EventPlanning; // Use appropriate image
    case 'Photography': return Photography; // Use appropriate image
    case 'Auto Services': return AutoServices; // Use appropriate image
    case 'Home Improvement': return HomeServices; // Use appropriate image
    case 'Accounting': return Accounting; // Use appropriate image
    case 'Legal Services': return LegalServices; // Use appropriate image
    case 'Home Security': return HomeSecurity; // Use appropriate image
    case 'Entertainment Services': return EntertainmentServices; // Use appropriate image
    case 'Network Services': return NetworkServices; // Use appropriate image
    case 'IT Services': return ItServices ; // Use appropriate image
    default: return null; // or a default image
  }
};

const ServicesGrid = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;
  const isMedium = useMediaQuery({ query: '(max-width: 750px)' });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.thefixit4u.com/categories/all');
        const apiCategories = response.data.data.categories;
        const updatedServices = apiCategories.map(category => ({
          id: category.id,
          name: category.name.trim(), // Trim any extra spaces
          title: category.name.trim(), // Trim any extra spaces
          description: descriptionMapping[category.name.trim()] || 'Service description not available',
          icon: iconMapping[category.name.trim()] || <FaTools />,
          img: getImage(category.name) || 'Nothiung description'
        }));

        setServices(updatedServices);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Pagination logic
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

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
    <div className={`${isMedium ? "px-[40px]" : "px-16"} py-[30px]`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {currentServices.map((service, index) => (
          <ServiceCard
            id={service.id}
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            image={service.img}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6 text-white">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mr-2 bg-secondaryColor rounded-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(services.length / servicesPerPage)}
          className={`px-4 py-2 bg-secondaryColor rounded-md ${currentPage >= Math.ceil(services.length / servicesPerPage) && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServicesGrid;
