import React from 'react';
import LogoImg from '../assets/mainImg.png';
import { FaChevronDown } from 'react-icons/fa';
import ServicesModal from './Modal';
// Import the global context
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const PrimaryNavbar = () => {
  // Access the openModal function from the global context
  const { openModal } = useGlobalContext();

  return (
    <div className="flex items-center justify-between text-black px-10 py-2">
      <Link to={'/'}>
      <div>
        <img src={LogoImg} className="w-[25] h-[83px] border-2 border-primaryColor rounded-md"/>
      </div>
      </Link>
      <div className="navbar flex space-x-6 ">
        
        <h1
          className="cursor-pointer hover:text-white hover:bg-secondaryColor border border-primaryColor py-3 px-4 rounded-sm flex items-center justify-between"
          // Call openModal when Services button is clicked
          onClick={openModal}
        >
          Services <FaChevronDown className="mt-1 ml-1 text-primaryColor"/>
        </h1>
       
        <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">Sign Up</h1>
        <Link to={'/login'}><h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">Log In</h1></Link>
      </div>
      <ServicesModal/>
    </div>
  );
};

export default PrimaryNavbar;
