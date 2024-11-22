import React, { useState } from 'react';
import logo2 from '../assets/logo2.png'; // Replace with your logo path
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaChevronCircleDown } from 'react-icons/fa';


const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isProsOpen, setIsProOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 425px)'
  })

  const isfooterTextNarrow = useMediaQuery({
    query: '(max-width: 750px)'
  })
  return (
    <footer className="bg-gray-100 text-black pt-8">
      <div className={`flex ${isfooterTextNarrow ? "flex-col" : ""} justify-evenly items-start mb-[30px]`}>


        {isfooterTextNarrow ? (
          <nav className={`flex flex-col  items-${isfooterTextNarrow ? "" : "end"} space-y-2 px-4 my-6`}>
            {/* Header with toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 font-bold w-[95vw] border-b-2 flex flex-row justify-between "
            >
              <span>Fixt4U</span><FaChevronCircleDown/>
            </button>

            {/* Collapsible list items */}
            {isOpen && (
              <div className={`flex flex-col ${isOpen ? "" : "items-center"}  space-y-2`}>
                <Link to="/" className="hover:text-primaryColor">About</Link>
                <Link to="/about" className="hover:text-primaryColor">Partner with us</Link>
                <Link to="/services" className="hover:text-primaryColor">Careers</Link>
                <div className="flex justify-evenly ml-[-10px]">
                  <FaFacebook className="hover:text-secondaryColor cursor-pointer" />
                  <FaInstagram className="hover:text-secondaryColor cursor-pointer" />
                  <FaWhatsapp className="hover:text-secondaryColor cursor-pointer" />
                  <FaTwitter className="hover:text-secondaryColor cursor-pointer" />
                </div>
              </div>
            )}
          </nav>
        ) : (

          <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2 px-4  `}>
            <h3 className='text-gray-900 font-bold'>Fixt4U</h3>
            <Link to="/" className="hover:text-primaryColor">About</Link>
            <Link to="/about" className="hover:text-primaryColor">Partner with us</Link>
            <Link to="/services" className="hover:text-primaryColor">Careers</Link>
            <div to="/contact"><span className='flex justify-evenly ml-[-10px]'><FaFacebook className='hover:text-secondaryColor cursor-pointer' /> <FaInstagram className='hover:text-secondaryColor cursor-pointer' /> <FaWhatsapp className='hover:text-secondaryColor cursor-pointer' /><FaTwitter className='hover:text-secondaryColor cursor-pointer' /></span></div>
          </nav>

        )}

        {isfooterTextNarrow ? (
          <nav className={`flex flex-col items-${isfooterTextNarrow ? "" : "end"} space-y-2 px-4 my-6`}>
            {/* Header with toggle button */}
            <button
              onClick={() => setIsCustomerOpen(!isCustomerOpen)}
              className="text-gray-900 font-bold w-[95vw] border-b-2 flex flex-row justify-between"
            >
              <span>Customer</span><FaChevronCircleDown/>
            </button>

            {/* Collapsible list items */}
            {isCustomerOpen && (
              <div className={`flex flex-col ${isCustomerOpen ? "" : "items-center"} space-y-2`}>
                <Link to="/customer" className="hover:text-primaryColor">How to use FIXIT4U</Link>
                <Link to="/prosignup" className="hover:text-primaryColor">Sign up</Link>
                <Link to="*" className="hover:text-primaryColor">Get the app</Link>
                <Link to="/customer" className="hover:text-primaryColor">Services near me</Link>
              </div>
            )}
          </nav>
        ) : (<nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2  px-4`}>
          <h3 className='text-gray-900 font-bold'>Customer</h3>
          <Link to="/customer" className="hover:text-primaryColor">How to use FIXIT4U</Link>
          <Link to="/customersignup" className="hover:text-primaryColor">Sign up </Link>
          <Link to="*" className="hover:text-primaryColor">Get the app</Link>
          <Link to="/customer" className="hover:text-primaryColor">Services near me</Link>

        </nav>)}

        {isfooterTextNarrow ? (<nav className={`flex flex-col items-${isfooterTextNarrow ? "" : "end"} space-y-2 px-4 my-6`}>
          {/* Header with toggle button */}
          <button
            onClick={() => setIsProOpen(!isProsOpen)}
            className="text-gray-900 font-bold w-[95vw] border-b-2 flex flex-row justify-between"
          >
           <span>Pros</span>  <FaChevronCircleDown/>
          </button>

          {/* Collapsible list items */}
          {isProsOpen && (
            <div className={`flex flex-col ${isProsOpen ? "" : "items-center"} space-y-2`}>
              <Link to="/" className="hover:text-primaryColor">Fixit4U for pros</Link>
              <Link to="/prosignup" className="hover:text-primaryColor">Sign up</Link>
              <Link to="/services" className="hover:text-primaryColor">Community</Link>
              <Link to="/services" className="hover:text-primaryColor">Pro reviews</Link>
            </div>
          )}
        </nav>) : (

          <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2  px-4`}>
            <h3 className='text-gray-900 font-bold'>Pros</h3>
            <Link to="/careers" className="hover:text-primaryColor">Fixit4U for pros</Link>
            <Link to="/prosignup" className="hover:text-primaryColor">Sign up</Link>
            <Link to="/services" className="hover:text-primaryColor">Community</Link>
            <Link to="/services" className="hover:text-primaryColor">Pro reviews</Link>

          </nav>

        )}


        {isfooterTextNarrow ? (<nav className={`flex flex-col items-${isfooterTextNarrow ? "" : "end"} space-y-2 px-4 my-6`}>
          {/* Header with toggle button */}
          <button
            onClick={() => setIsSupportOpen(!isSupportOpen)}
            className="text-gray-900 font-bold w-[95vw] border-b-2 flex flex-row justify-between"
          >
           <span> Support </span> <FaChevronCircleDown/>
          </button>

          {/* Collapsible list items */}
          {isSupportOpen && (
            <div className={`flex flex-col ${isSupportOpen ? "" : "items-center"} space-y-2`}>
              <Link to="/" className="hover:text-primaryColor">Help</Link>
              <Link to="/about" className="hover:text-primaryColor">Safty</Link>
              <Link to="/termofuse" className="hover:text-primaryColor">Terms of Use</Link>
              <Link to="/privacypolicy" className="hover:text-primaryColor">Privacy policy</Link>
            </div>
          )}
        </nav>) : (


          <nav className={`flex flex-col items-${isMobile ? "center" : "end"} space-y-2 `}>
            <h2 className='text-gray-900 font-bold'>Support</h2>
            <Link to="/support" className="hover:text-primaryColor">Help</Link>
            <Link to="/support" className="hover:text-primaryColor">Safty</Link>
            <Link to="/support" className="hover:text-primaryColor">Terms of Use</Link>
            <Link to="/privacypolicy" className="hover:text-primaryColor">Privacy policy</Link>

          </nav>

        )}

      </div>
      <div>

        <Link to="/">
          <div className='flex justify-center bg-white'>
            <div className={` flex justify-evenly border-t-2 border-gray-100 h-[50px] bg-white pt-[20px] pb-[40px] ${isfooterTextNarrow ? 'w-[99vw]' : 'w-[60vw]'} `} >
              <img src={logo2} alt="Logo" className="h-[25px]" />
              <p className="text-center mr-6 text-gray-500">© 2024 ViseFixiT. All rights reserved.</p>
            </div>
          </div>
        </Link>
      </div>
    </footer >
  );
};

export default Footer;
