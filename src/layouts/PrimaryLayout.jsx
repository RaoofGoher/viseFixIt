import React, { useState, useEffect } from 'react';
import PrimaryNavbar from '../components/PrimaryNavbar';
import PrimaryHero from '../components/PrimaryHero';
import ChangingText from '../components/ChangingText';
import ServicesGrid from '../components/ServiceGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactUS from '../components/ContactUs';
const Loader = () => {
  return <div className="loader">Loading...</div>; // Customize this loader style
};

const PrimaryLayout = () => {
  const [isNavbarLoading, setIsNavbarLoading] = useState(true);
  const [isHeroLoading, setIsHeroLoading] = useState(true);
  const [isTextLoading, setIsTextLoading] = useState(true);
  const [isServicesLoading, setIsServicesLoading] = useState(true);
  const [isTestimonialLoading, setIsTestimonialLoading] = useState(true);
  const [isContactUsLoading, setIsContactUsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => setIsNavbarLoading(false), 1000); // Simulates a 1-second loading time
    setTimeout(() => setIsHeroLoading(false), 1500);
    setTimeout(() => setIsTextLoading(false), 1200);
    setTimeout(() => setIsServicesLoading(false), 1800);
    setTimeout(() => setIsTestimonialLoading(false), 2000);
    setTimeout(() => setIsContactUsLoading(false), 2000);
  
  }, []);

  return (
    <div className='px-8'>
      {isNavbarLoading ? <Loader /> : <PrimaryNavbar />}
      <div className='flex justify-center items-center'>
        {isHeroLoading ? <Loader /> : <PrimaryHero />}
      </div>
      {isTextLoading ? <Loader /> : <ChangingText />}
      {isServicesLoading ? <Loader /> : <ServicesGrid />}
      {isTestimonialLoading ? <Loader /> : <TestimonialSlider />}
    
      {isContactUsLoading ? <Loader /> : <ContactUS />}
    

    </div>
  );
};

export default PrimaryLayout;
