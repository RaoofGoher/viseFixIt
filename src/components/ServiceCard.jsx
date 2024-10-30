import React from 'react';
import ExploreButton from './ExploreButton';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ id, title, description, icon, image }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/search-results/${id}`);
alert(id)  };

  return (
    <div className="relative p-4 bg-black border-4 border-primaryColor rounded-lg hover:border-primaryColor hover:bg-gray-200 hover:text-black overflow-hidden group">
      <img
        src={image} // Your image URL
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 opacity-70"
      />
      <div className="relative z-10 opacity-0 translate-x-4 service-card-content">
        <h3 className="text-2xl font-bold mb-2 flex justify-between">
          {title} {icon}
        </h3>
        <p className="mb-8">{description}</p>
        <button
          className="bg-primaryColor text-white px-4 py-2 rounded hover:bg-lightColor1 transition duration-300 hover:text-black"
          onClick={handleExploreClick}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
