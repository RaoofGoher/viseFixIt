import React, { useState, useEffect } from 'react';

import PrimaryHero from '../components/PrimaryHero';
import ChangingText from '../components/ChangingText';
import ServicesGrid from '../components/ServiceGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactUS from '../components/ContactUs';
import FAQ from '../components/FaqSection';
import TeamSlider from "../components/TeamSlider1"
import SimpleSlider from '../components/HeroSlider';
import SecondaryNavbar from '../components/SecondaryNavabr';


const Loader = () => {
    return <div className="loader">Loading...</div>; // Customize this loader style
  };

const Home = () => {

   
    const [isHeroLoading, setIsHeroLoading] = useState(true);
    const [isTextLoading, setIsTextLoading] = useState(true);
    const [isServicesLoading, setIsServicesLoading] = useState(true);
    const [isTestimonialLoading, setIsTestimonialLoading] = useState(true);
    const [isContactUsLoading, setIsContactUsLoading] = useState(true);
  
  
    useEffect(() => {
       // Simulates a 1-second loading time
      setTimeout(() => setIsHeroLoading(false), 1500);
      setTimeout(() => setIsTextLoading(false), 1200);
      setTimeout(() => setIsServicesLoading(false), 1800);
      setTimeout(() => setIsTestimonialLoading(false), 2000);
      setTimeout(() => setIsContactUsLoading(false), 2000);
    
    }, []);

  return (
    <div>
       <div className='flex justify-center items-center'>
        {isHeroLoading ? <Loader /> : <SimpleSlider/>}
      </div>
      {isTextLoading ? <Loader /> : <ChangingText />}
      {isServicesLoading ? <Loader /> : <ServicesGrid />}
        
    </div>
  )
}

export default Home
