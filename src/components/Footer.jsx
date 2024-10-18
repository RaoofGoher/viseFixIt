import React from 'react';
import logo from '../assets/mainImg.png'; // Replace with your logo path
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const Footer = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 425px)'
  })

  return (
    <footer className="bg-primaryColor text-white py-6">
      <div className={`max-w-6xl mx-4 flex ${isMobile ? "flex-col" : ""} justify-between items-center`}>
        <div className='border-[16px] border-lightColor1'>
        <img src={logo} alt="Logo" className="h-20" />
        </div>
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2`}>
          <Link to="/" className="hover:text-lightColor1">Home</Link>
          <Link to="/about" className="hover:text-lightColor1">About Us</Link>
          <Link to="/services" className="hover:text-lightColor1">Services</Link>
          <Link to="/contact" className="hover:text-lightColor1">Contact</Link>
          <Link to="/privacy" className="hover:text-lightColor1">Privacy Policy</Link>
        </nav>
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2`}>
          <Link to="/careers" className="hover:text-lightColor1">Carrers</Link>
          <Link to="/about" className="hover:text-lightColor1">Support</Link>
          <Link to="/services" className="hover:text-lightColor1">Terms</Link>
          <Link to="/services" className="hover:text-lightColor1">Find a Pro</Link>
         
        </nav>
      </div>
      <p className="mt-4 text-center text-sm text-secondaryColor">© 2024 ViseFixiT. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
