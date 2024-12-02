import React, { useState } from "react";

const PartnerShipIdea = () => {
  // State to track if the spinner is active
  const [isLoading, setIsLoading] = useState(false);

  // Handler for button click
  const handleClick = () => {
    setIsLoading(true); // Show the spinner
    setTimeout(() => {
      setIsLoading(false); // Hide the spinner after 5 seconds
    }, 5000); // 5000ms = 5 seconds
  };
  return (
    <section className="bg-primaryColor flex flex-col items-center justify-center px-10 pt-16 pb-16 py-10 gap-8 text-center">
      <h1 className="font-extrabold text-4xl">
        Got a unique partnership idea?
      </h1>
      <p className="flex flex-col  text-lg">
        Let's team up on brand collabora    tions, joint press releases,
        activations, <span>affiliate realtionships and more.</span>
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="hover:bg-lightColor1 hover:text-black transition-all duration-200 ease-in group bg-secondaryColor text-white p-2 font-bold px-8 sm:px-28 w-0/2 rounded-lg flex items-center justify-center gap-3"
        disabled={isLoading} // Disable button while loading
      >
        {/* Conditional rendering of spinner */}
        {isLoading && (
          <span
            className="w-5 h-5 border-2 border-primaryColor border-t-transparent animate-spin rounded-full"
            aria-hidden="true"
          ></span>
        )}
        {!isLoading ? "Chat with our Partnership team" : "Processing..."}
        
      </button>
    </section>
  );
};

export default PartnerShipIdea;
