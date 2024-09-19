// ServiceCard.jsx
import React from 'react';
import ExploreButton from './ExploreButton';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-4 border bg-lightColor1 border-gray-300 rounded-lg hover:border-primaryColor hover:bg-secondaryColor transition duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ExploreButton/>
    </div>
  );
};

export default ServiceCard;
