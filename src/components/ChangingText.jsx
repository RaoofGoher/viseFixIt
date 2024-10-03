import React, { useState, useEffect } from 'react';

const ChangingText = () => {
  const texts = ['Gardening', 'Roofing', 'Cleaning', 'Interior'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [texts.length]);

  return (
    <div className="flex changingText:flex-col justify-center items-center space-x-4 m-8">
      <h2 className="text-4xl font-bold text-center text-black my-4">Our great services are </h2>
      <div className="h-16 overflow-hidden">
        <h1
          key={texts[currentIndex]} // use key to trigger re-mount on text change
          className="text-6xl font-bold text-center text-primaryColor my-4 px-2 animate-slideUp"
        >
          {texts[currentIndex]}
        </h1>
      </div>
    </div>
  );
};

export default ChangingText;
