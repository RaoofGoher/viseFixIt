import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


const ChangingText = () => {
  const texts = ['Gardening', 'Roofing', 'Cleaning', 'Interior'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine the media queries to determine the proper margin
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 740px)' });
  const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 601px)' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [texts.length]);

  // Determine margin based on screen size
  const marginTop = isExtraSmallScreen
    ? 'mt-[410px]'
    : isMediumScreen
    ? 'mt-[300px]'
    : isSmallScreen
    ? 'mt-[200px]'
    : 'mt-16'; // Default margin for larger screens

  return (
    <div
      className={`flex flex-col justify-center items-center space-y-2 m-4 ${marginTop}`}
    >
      <h2 className="text-4xl font-bold text-center text-dark mb-4">
        Our great services are
      </h2>
      <h1
        key={texts[currentIndex]} // Use key to trigger re-mount on text change
        className="text-6xl font-bold text-center text-primaryColor my-2 px-2 slidingText"
      >
        {texts[currentIndex]}
      </h1>
    </div>
  );
};

export default ChangingText;
