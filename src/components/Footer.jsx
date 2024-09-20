import React from 'react';
import logo from '../assets/mainImg.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className='border-[16px] border-lightColor1'>
        <img src={logo} alt="Logo" className="h-20" />
        </div>
        <nav className="flex flex-col items-end space-y-2">
          <a href="/" className="hover:text-lightColor1">Home</a>
          <a href="/about" className="hover:text-lightColor1">About Us</a>
          <a href="/services" className="hover:text-lightColor1">Services</a>
          <a href="/contact" className="hover:text-lightColor1">Contact</a>
          <a href="/privacy" className="hover:text-lightColor1">Privacy Policy</a>
        </nav>
        <nav className="flex flex-col items-end space-y-2">
          <a href="/" className="hover:text-lightColor1">Home</a>
          <a href="/about" className="hover:text-lightColor1">About Us</a>
          <a href="/services" className="hover:text-lightColor1">Services</a>
          <a href="/contact" className="hover:text-lightColor1">Contact</a>
          <a href="/privacy" className="hover:text-lightColor1">Privacy Policy</a>
        </nav>
      </div>
      <p className="mt-4 text-center text-sm text-lightColor2">© 2024 ViseFixiT. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
