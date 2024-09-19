import React from 'react';
import ExploreButton from './ExploreButton';
import ImageUrl from '../assets/p1.jpg';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative p-4 border bg-lightColor1 border-gray-300 rounded-lg hover:border-primaryColor hover:bg-secondaryColor hover:text-white overflow-hidden group">
      {/* Image that is visible by default */}
      <img
        src={ImageUrl} // Your image URL
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
      />

      {/* Content that appears on hover */}
      <div className="relative z-10 opacity-0 translate-x-4 service-card-content">
        <h3 className="text-2xl font-bold mb-2 flex justify-between">
          {title} {icon}
        </h3>
        <p className="mb-8">{description}</p>
        <ExploreButton />
      </div>
    </div>
  );
};

export default ServiceCard;
