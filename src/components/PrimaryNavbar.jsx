import React from 'react';
import LogoImg from '../assets/mainImg.png';
import { FaChevronDown } from 'react-icons/fa';

const PrimaryNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-black px-10">
      <div ><img src={LogoImg} className="w-[25] h-[83px] border-2 border-primaryColor rounded-md"/></div>
      <div className="navbar flex space-x-6 ">
      <h1 className="cursor-pointer hover:text-white hover:bg-grayColor border border-primaryColor py-3 px-4 rounded-sm flex items-center justify-between">
      Services <FaChevronDown className="mt-1 ml-1 text-primaryColor"/>
    </h1>
        <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">Sign Up</h1>
        <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">Log In</h1>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
