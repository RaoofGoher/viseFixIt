import React from 'react';
import logo2 from '../assets/logo2.png'; // Replace with your logo path
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 425px)'
  })

  return (
    <footer className="bg-gray-100 text-black pt-8">
      <div className={`px-10 flex ${isMobile ? "flex-col" : ""} justify-evenly items-center mb-[30px]`}>
       
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2 px-4  `}>
          <h3 className='text-gray-900 font-bold'>Fixt4U</h3>
          <Link to="/" className="hover:text-primaryColor">About</Link>
          <Link to="/about" className="hover:text-primaryColor">Partner with us</Link>
          <Link to="/services" className="hover:text-primaryColor">Careers</Link>
          <div to="/contact"><span className='flex justify-evenly ml-[-10px]'><FaFacebook className='hover:text-secondaryColor cursor-pointer'/> <FaInstagram className='hover:text-secondaryColor cursor-pointer'/> <FaWhatsapp className='hover:text-secondaryColor cursor-pointer'/><FaTwitter className='hover:text-secondaryColor cursor-pointer'/></span></div>
        </nav>
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2  px-4`}>
        <h3 className='text-gray-900 font-bold'>Customer</h3>
          <Link to="/careers" className="hover:text-primaryColor">How to use FIXIT4U</Link>
          <Link to="/about" className="hover:text-primaryColor">Sign up </Link>
          <Link to="/services" className="hover:text-primaryColor">Get the app</Link>
          <Link to="/services" className="hover:text-primaryColor">Services near me</Link>
         
        </nav>
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2  px-4`}>
        <h3 className='text-gray-900 font-bold'>Pros</h3>
          <Link to="/careers" className="hover:text-primaryColor">Fixit4U for pros</Link>
          <Link to="/about" className="hover:text-primaryColor">Sign up</Link>
          <Link to="/services" className="hover:text-primaryColor">Community</Link>
          <Link to="/services" className="hover:text-primaryColor">Pro reviews</Link>
         
        </nav>
        <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2 `}>
        <h2 className='text-gray-900 font-bold'>Support</h2>
          <Link to="/careers" className="hover:text-primaryColor">Help</Link>
          <Link to="/about" className="hover:text-primaryColor">Safty</Link>
          <Link to="/services" className="hover:text-primaryColor">Terms of Use</Link>
          <Link to="/services" className="hover:text-primaryColor">Privacy policy</Link>
         
        </nav>
      </div>
      <div>
      
      <Link to="/">
        <div className='flex justify-between px-[400px] border-t-2 border-gray-100 h-[50px] bg-white pt-[20px] pb-[40px] ' >
        <img src={logo2} alt="Logo" className="h-[25px]" />
        <p className="text-center mr-6 text-gray-500">© 2024 ViseFixiT. All rights reserved.</p>
        </div>
        </Link>
    </div>
    </footer>
  );
};

export default Footer;
