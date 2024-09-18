import React from 'react'
import HeroImage from '../assets/viseFixitHero.png'
const PrimaryHero = () => {
  return (
    <div className="h-screen bg-cover bg-center w-[98vw] h-[75vh] flex justify-center items-center "  style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className='text-primaryColor text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magni.</div>
      
    </div>
  )
}

export default PrimaryHero
