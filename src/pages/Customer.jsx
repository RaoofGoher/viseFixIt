import React from 'react'
import CustomerHeroSection from '../components/CustomerHeroSection'
import ScrollToTop from "../components/ScrollToTop"
import DarkBackgroundComponent from "../components/FindYourPro"
import ThisIsHowItWorks from '../components/ThisIsHowItWorks'
const Customer = () => {
  return (
    <div>
        <ScrollToTop/>
      <CustomerHeroSection/>
      <ThisIsHowItWorks/>
      <DarkBackgroundComponent/>
    </div>
  )
}

export default Customer
