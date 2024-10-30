import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg shadow-md">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-primaryColor mb-2">Why XYZ Company Has the Best Rates</h2>
        <p className="text-gray-700 mb-4">
          At XYZ Company, we prioritize quality service at unbeatable prices. Our transparent pricing model ensures you get the best value for your money without hidden fees.
        </p>
        <h3 className="text-xl font-semibold text-primaryColor mb-1">Why Choose Us:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Competitive rates that cater to all budgets.</li>
          <li>Exceptional customer service and support.</li>
          <li>Trusted professionals with proven expertise.</li>
          <li>Flexible scheduling to meet your needs.</li>
        </ul>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
        <img
          src="path/to/your/image.jpg" // Replace with your image path
          alt="XYZ Company Services"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
