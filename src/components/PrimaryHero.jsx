import React from 'react'
import HeroImage from '../assets/viseFixitHero.jpg'
import SearchBarWithLabel from './SearchBar'
import Stack from './Stack'
const PrimaryHero = () => {
  return (
    <>
    <div className="bg-cover bg-center w-[98vw] h-[75vh] flex justify-center items-center "  style={{ backgroundImage: `url(${HeroImage})` }}>
       <Stack>
        <SearchBarWithLabel buttonText={'Search'} labelText={"Zip Code"}/>
        
       </Stack>
    </div>
     
     </>
  )
}

export default PrimaryHero
