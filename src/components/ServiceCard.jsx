// ServiceCard.jsx
import React from 'react';
import ExploreButton from './ExploreButton';

const ServiceCard = ({ title, description, icon}) => {
  return (
    <div className="p-4 border bg-lightColor1 border-gray-300 rounded-lg hover:border-primaryColor hover:bg-secondaryColor hover:text-white transition duration-300">
      <h3 className="text-2xl font-bold mb-2 flex justify-between">{title} {icon}</h3>
      <p className="mb-8">{description}</p>
      <ExploreButton/>
    </div>
  );
};

export default ServiceCard;
