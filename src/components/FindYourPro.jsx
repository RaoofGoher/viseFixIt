import React from 'react';
import BackgroundImage from '../assets/icons/findYourPro.jpg'; // Replace with your image path
import SearchComponent from './SearchBar';

const DarkBackgroundComponent = () => {
  return (
    <div className='flex justify-center items-center'>
      <div 
        className="w-[70vw] h-[400px] my-16 relative flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primaryColor opacity-30"></div>

        {/* Content on Top */}
        <div className="relative z-10 p-8 bg-white border border-gray-300 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold text-primaryColor mb-4">Find Your Pro</h2>
          <p className="text-gray-600 mb-4">Connect with top professionals for your needs.</p>
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default DarkBackgroundComponent;
