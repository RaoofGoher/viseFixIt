import React, { useState, useEffect } from "react";

import PrimaryHero from "../components/PrimaryHero";
import ChangingText from "../components/ChangingText";
import ServicesGrid from "../components/ServiceGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactUS from "../components/ContactUs";
import FAQ from "../components/FaqSection";
import TeamSlider from "../components/TeamSlider1";
import SimpleSlider from "../components/HeroSlider";
import SecondaryNavbar from "../components/SecondaryNavabr";
import HowItWorks from "../components/HowItWorks";
import BecomeAProSection from "../components/BecomeAPro";
import WhyChooseUs from "../components/WHyChooseUs";
import FindYourPro from "../components/FindYourPro";
import CallUs from "../components/CallUs";

const Loader = () => {
  return <div className="loader">Loading...</div>; // Customize this loader style
};

const Home = () => {
  const [isHeroLoading, setIsHeroLoading] = useState(true);
  const [isTextLoading, setIsTextLoading] = useState(true);
  const [isServicesLoading, setIsServicesLoading] = useState(true);
  const [isHowItWorksLoading, setIsHowItWorksLoading] = useState(true);
  const [isBecomeAProLoading, setIsBecomeAProLoading] = useState(true);
  const [isWhyChooseUsLoading, setIsWhyChooseUsLoading] = useState(true);
  const [isFindYourProLoading, setIsFindYourProLoading] = useState(true);
  const [isCallUsLoading, setIsCallUsLoading] = useState(true);

  useEffect(() => {
    // Simulates a 1-second loading time
    setTimeout(() => setIsHeroLoading(false), 1500);
    setTimeout(() => setIsTextLoading(false), 1200);
    setTimeout(() => setIsServicesLoading(false), 1800);
    setTimeout(() => setIsHowItWorksLoading(false), 2000);
    setTimeout(() => setIsContactUsLoading(false), 2000);
    setTimeout(() => setIsBecomeAProLoading(false), 2000);
    setTimeout(() => setIsWhyChooseUsLoading(false), 2000);
    setTimeout(() => setIsFindYourProLoading(false), 2000);
    setTimeout(() => setIsCallUsLoading(false), 1200);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        {isHeroLoading ? <Loader /> : <SimpleSlider />}
      </div>
      {isTextLoading ? <Loader /> : <ChangingText />}
      {isServicesLoading ? <Loader /> : <ServicesGrid />}
      {isHowItWorksLoading ? <Loader /> : <HowItWorks />}
      {isBecomeAProLoading ? <Loader /> : <BecomeAProSection />}
      {isWhyChooseUsLoading ? <Loader /> : <WhyChooseUs />}
      {isFindYourProLoading ? <Loader /> : <FindYourPro />}
      {isCallUsLoading ? <Loader/> : <CallUs buttonText={"Contact Us"} buttonLink={'/support'} isExternal={false} />}
    </div>
  );
};

export default Home;
