import React from 'react'
import PrimaryNavbar from '../components/PrimaryNavbar'
import PrimaryHero from '../components/PrimaryHero'
import ChangingText from '../components/ChangingText'
import ServicesGrid from '../components/ServiceGrid'
import TestimonialSlider from '../components/TestimonialSlider'
const PrimaryLayout = () => {
  return (
    <div className='px-8'>
      <PrimaryNavbar/>
      <div className='flex justify-center items-center'>
      <PrimaryHero/>
      </div>
      <ChangingText/>
      <ServicesGrid/>
      <TestimonialSlider/>
    </div>
  )
}

export default PrimaryLayout
