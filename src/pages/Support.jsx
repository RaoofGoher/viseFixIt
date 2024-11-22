import React from 'react';
// import Help from '../components/Help'
import CallUs from "../components/CallUs";
import ScrollToTop from "../components/ScrollToTop";
import ContactUsForm from '../components/ContactUsForm';
const Support = () => {
  return (
    <div>
      <ScrollToTop/>
      <CallUs buttonText={'Call Us: 03456562538'} buttonLink={'#'} />
      <ContactUsForm/>
    </div>
  )
}

export default Support
