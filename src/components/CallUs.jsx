import React from 'react';
import { Link,  } from 'react-router-dom';
import image from '../assets/background2.jpg';

const CallUs = ({ buttonText, buttonLink, isExternal }) => {
  // const location = useLocation();

  return (
    <div
      className={'h-screen flex justify-end items-center text-white text-center overflow-hidden '}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-full md:max-w-4xl p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center gap-4">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold flex flex-col ">
          Feel Free <span className="text-secondaryColor font-bold">To</span> Contact Us
        </h1>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          FixIt wants you to stay comfortable and enjoy high-quality handyman services all year round!
        </span>
        <p className="text-sm sm:text-base md:text-lg text-balance leading-relaxed">
          FixIt delivers top-quality handyman services with a focus on customer satisfaction since{" "}
          <span className="text-secondaryColor font-bold animate-pulse duration-300">
            2002
          </span>
          . We provide diagnostics and expert solutions to meet your needs.
        </p>

        {/* Conditionally Render Link or External Anchor Tag */}
        {isExternal ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 animate-bounce sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg hover:font-semibold transition-all duration-300 shadow-xl bg-secondaryColor hover:bg-lightColor1 hover:text-black rounded-full"
          >
            <span className="animate-pulse">{buttonText}</span>
          </a>
        ) : (
          <Link
            to={buttonLink}
            className="px-4 animate-bounce sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg hover:font-semibold transition-all duration-300 shadow-xl bg-secondaryColor hover:bg-lightColor1 hover:text-black rounded-full"
          >
            <span className="animate-pulse">{buttonText}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CallUs;
