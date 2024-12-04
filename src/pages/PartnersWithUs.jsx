import React from "react";
import Partners from "../components/Partners";
import PartnersUp from "../components/PartnersUp";
import PartnerShipIdea from "../components/PartnerShipIdea";
import ScrollToTop from "../components/ScrollToTop";
import PartnersAboutUs from "../components/PartnersAboutUs";

const PartnersWithUs = () => {
  return (
    <div>
      <ScrollToTop />
      <Partners />
      <PartnersAboutUs />
      <PartnersUp />
      <PartnerShipIdea />
    </div>
  );
};

export default PartnersWithUs;
