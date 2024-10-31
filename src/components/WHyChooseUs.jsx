import React from 'react';
import ChooseUSbackground from "../assets/icons/whyUs.jpg";
import Phone from "../assets/icons/phoneImage.png";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const WhyChooseUs = () => {
  const isMedium = useMediaQuery({
    query: '(max-width: 769px)',
  });

  return (
    <div
      style={{ backgroundImage: `url(${ChooseUSbackground})` }}
      className={`bg-no-repeat bg-bottom bg-cover flex justify-center items-center ${isMedium ? "h-[600px]" : "h-[400px]"} my-[150px]`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between bg-transparent px-4 md:p-8 w-[90vw] lg:w-[80vw] max-w-screen-xl">
        {/* Left Column - Text Content */}
        <div className={`w-full md:w-1/2 text-left ${isMedium ? "mt-[-50px]" : ""} mb-4 md:mb-0`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Why <span className='text-secondaryColor'>Fixit4U</span> is the Best</h2>
          <p className="text-gray-700 mb-4">
            At Fixit4U Company, we prioritize quality service at unbeatable prices. Our transparent pricing model ensures you get the best value for your money without hidden fees.
          </p>
      <Link to="/customersignup">  <button className='bg-[#373737] text-secondaryColor px-6 py-4 rounded-lg'>Become a Customer</button> </Link>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full flex justify-center">
          <img
            src={Phone}
            alt="XYZ Company Services"
            className={`${isMedium ? "w-[250px]" : "w-[auto]"} w-auto absolute bottom-[-205px]`}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
