import React from 'react'
import PrimaryNavbar from '../components/PrimaryNavbar'
import PrimaryHero from '../components/PrimaryHero'
import ChangingText from '../components/ChangingText'
import ServicesGrid from '../components/ServiceGrid'
const PrimaryLayout = () => {
  return (
    <div className=''>
      <PrimaryNavbar/>
      <div className='flex justify-center items-center'>
      <PrimaryHero/>
      </div>
      <ChangingText/>
      <ServicesGrid/>
    </div>
  )
}

export default PrimaryLayout
