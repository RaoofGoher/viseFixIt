import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchComponent from './SearchBar';
import Stack from './Stack'
import HeroImage from '../assets/HI.jpg'
import HeroImage1 from '../assets/H2.jpg'
import HeroImage2 from '../assets/H3.jpg'
import HeroImage3 from '../assets/H4.jpg'
import { useMediaQuery } from 'react-responsive'
import HeroIcons from './HeroIcons';

const SimpleSlider = () => {

  const isHeroCollapsing = useMediaQuery({
    query: '(max-width: 949px)'
  })
  const isHeroCollapsing2 = useMediaQuery({
    query: '(max-width: 645px)'
  })
  const isHeroCollapsing3 = useMediaQuery({
    query: '(max-width: 385px)'
  })
  const isHeroImageStretching = useMediaQuery({
    query: '(max-width: 800px)'
  })

  const isIconCollapsing = useMediaQuery({
    query: '(max-width: 740px)'
  })
  const isTextCollapsing1 = useMediaQuery({
    query: '(max-width: 385px)'
  })
  const isSeacrhComponentsCollapsing1 = useMediaQuery({
    query: '(max-width: 360px)'
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
    <div className="relative w-[99vw] mb-[50px] ">

      {/* Overlay content positioned on top of the slider */}
      <div className={`absolute  ${isHeroCollapsing2 ? "top-[70px]" : "top-[50px]"} left-1/2 transform z-10 -translate-x-1/2 ${isHeroCollapsing ? "w-[80vw]" : ""}`}>
        <h1 className={` ${isTextCollapsing1 ? "text-2xl" : "text-5xl"}  font-bold text-center text-white`}>
          Find Top-rated Certified
          <br />
          Pros In Your Area
        </h1>
      </div>
      <div className={`absolute  ${isHeroCollapsing2 ? "top-[370px]" : "top-[320px]"} ${isIconCollapsing ? "top-[400px]" : ""} left-1/2 transform z-10 -translate-x-1/2`}>
        <HeroIcons /> 
      </div>

      <div className={`absolute  ${isHeroCollapsing ? "top-[170px]" : "top-[210px]"}   left-1/2 transform z-10 -translate-x-1/2 ${isHeroCollapsing ? "w-[80vw]" : ""}`}>
        <Stack>
          <SearchComponent buttonText={'Search'} labelText={"Zip Code"}/>

        </Stack>
        
      </div>    
      {/* Slider Component */}
      <Slider {...settings}>
      
        <div className={`bg-heroColor  ${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} flex items-center justify-center`}>
          <img src={HeroImage} className={`${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} w-full`} />
        </div>
        <div className={`bg-heroColor  ${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} flex items-center justify-center`}>
          <img src={HeroImage1} className={`${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} w-full`} />
        </div>
        <div className={`bg-heroColor  ${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} flex items-center justify-center`}>
          <img src={HeroImage2} className={`${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} w-full`} />
        </div>
        <div className={`bg-heroColor  ${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} flex items-center justify-center`}>
          <img src={HeroImage3} className={`${isHeroImageStretching ? "h-[200px]" : "h-[500px]"} w-full`} />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
