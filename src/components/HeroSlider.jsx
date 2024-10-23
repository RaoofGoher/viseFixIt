import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchComponent from './SearchBar';
import Stack from './Stack'
import HeroImage from '../assets/viseFixitHero.jpg'
import HeroImage1 from '../assets/h1.jpg'
import HeroImage2 from '../assets/h2.jpg'
import HeroImage3 from '../assets/h3.jpg'
import { useMediaQuery } from 'react-responsive'
import HeroIcons from './HeroIcons';

const SimpleSlider = () => {

  const isHeroCollapsing = useMediaQuery({
    query: '(max-width: 950px)'
  })
  const isHeroCollapsing2 = useMediaQuery({
    query: '(max-width: 644px)'
  })
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="relative w-[94vw] mb-[50px] ">

      {/* Overlay content positioned on top of the slider */}
      <div className={`absolute  ${isHeroCollapsing2 ? "top-[70px]" : "top-[50px]"} left-1/2 transform z-10 -translate-x-1/2 ${isHeroCollapsing ? "w-[80vw]" : ""}`}>
        <h1 className="text-6xl font-bold text-center text-white">
          Find Top-rated Certified
          <br />
          Pros In Your Area.
        </h1>
      </div>
      <div className={`absolute  ${isHeroCollapsing2 ? "top-[70px]" : "top-[320px]"} left-1/2 transform z-10 -translate-x-1/2 ${isHeroCollapsing ? "w-[80vw]" : ""}`}>
        <HeroIcons /> 
      </div>

      <div className={`absolute  ${isHeroCollapsing2 ? "top-[70px]" : "top-[210px]"} left-1/2 transform z-10 -translate-x-1/2 ${isHeroCollapsing ? "w-[80vw]" : ""}`}>
        <Stack>
          <SearchComponent buttonText={'Search'} labelText={"Zip Code"} />

        </Stack>
        
      </div>    
      {/* Slider Component */}
      <Slider {...settings}>
      
        <div className={`bg-heroColor ${isHeroCollapsing ? "h-52" : "h-[400px]"} flex items-center justify-center`}>
          <img src={HeroImage} className="border border-2 border-heroColor" />
        </div>
        <div className={`bg-heroColor ${isHeroCollapsing ? "h-52" : "h-[400px]"} flex items-center justify-center`}>
          <img src={HeroImage1} className="" />
        </div>
        <div className={`bg-heroColor ${isHeroCollapsing ? "h-52" : "h-[400px]"} flex items-center justify-center`}>
          <img src={HeroImage2} className="" />
        </div>
        <div className={`bg-heroColor ${isHeroCollapsing ? "h-52" : "h-[400px]"} flex items-center justify-center`}>
          <img src={HeroImage3} className="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
