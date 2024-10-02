import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchComponent from './SearchBar';
import Stack from './Stack'
import HeroImage from '../assets/viseFixitHero.png'
import HeroImage1 from '../assets/h1.png'
import HeroImage2 from '../assets/h2.png'
import HeroImage3 from '../assets/h3.png'


const SimpleSlider = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="relative w-[94vw]">
      {/* Overlay content positioned on top of the slider */}
      <div className="absolute top-20 left-1/2 transform z-10 -translate-x-1/2">
      <Stack>
        <SearchComponent buttonText={'Search'} labelText={"Zip Code"}/>
        
       </Stack>
      </div>

      {/* Slider Component */}
      <Slider {...settings}>
        <div className="bg-gray-400 h-72 flex items-center justify-center">
          <img src={HeroImage} className=""/>
        </div>
        <div className="bg-gray-500 h-72 flex items-center justify-center">
        <img src={HeroImage1} className=""/>
        </div>
        <div className="bg-gray-600 h-72 flex items-center justify-center">
        <img src={HeroImage2} className=""/>
        </div>
        <div className="bg-gray-600 h-72 flex items-center justify-center">
        <img src={HeroImage3} className=""/>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
