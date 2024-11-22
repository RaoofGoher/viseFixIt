import React from "react";
import image from "../assets/herosec2.jpg";

const CustomerHeroSection = () => {
  return (
    <div className="relative bg-primaryColor">
      {/* Hero Section Background */}
      <div
        className="h-[60vh] sm:h-[75vh] md:h-screen bg-cover bg-center flex items-center justify-center mix-blend-multiply"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Hero Section Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold drop-shadow-lg space-y-2">
          <span className="block text-secondaryColor drop-shadow-md">
            Book projects,
          </span>
          <span className="block text-primaryColor drop-shadow-md animate-pulse">
            fast and easy.
          </span>
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-medium space-y-1 drop-shadow-md">
          <span className="block">It’s never been easier to cross</span>
          <span className="block">projects off your list. We’ll walk</span>
          <span className="block">you through the basics.</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerHeroSection;
