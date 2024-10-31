import React from 'react';
import { Link } from 'react-router-dom';
import ProImage from "../assets/icons/proImage.jpg";
const BecomeAProSection = () => {
  return (
    <div className='bg-white flex  justify-center items-center mx-10 my-[150px]'>
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-8 py-10 rounded-sm  w-[75vw]">
      {/* Left Column - Icon */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        {/* Replace FaUserTie with the icon of your choice */}
        <img src={ProImage} alt="Become a Pro" className="w-40 md:w-auto h-auto" />
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left ml-8">
        <h2 className="text-2xl font-bold text-primaryColor mb-2">Become a Pro</h2>
        <p className="text-gray-700 mb-4">
          Join our platform as a trusted professional and connect with clients in need of your services. Showcase your skills and grow your business with us.
        </p>
        <Link to="/prosignup">
        <button className="bg-secondaryColor text-white py-2 px-4 rounded-md hover:bg-lightColor1 transition duration-200">
          Join Us
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default BecomeAProSection;
