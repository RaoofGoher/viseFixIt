import React from 'react';
import { landscapingIcon, ElectricalIcon, HandyPersonIcon, PlumbingIcon, RemodelingIcon, RoofingIcon } from '../data/HeroIcons';

function HeroIcons() {
  return (
    <div className="flex w-[50vw] justify-between text-white">
      {/* Each icon and title wrapped in a flex column */}
      <div className="flex flex-col items-center">
        <img src={landscapingIcon} alt="Landscaping" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Landscaping</span> {/* Title below the icon */}
      </div>

      <div className="flex flex-col items-center">
        <img src={ElectricalIcon} alt="Electrical" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Electrical</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={HandyPersonIcon} alt="Handy Person" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Handy Person</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={PlumbingIcon} alt="Plumbing" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Plumbing</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={RemodelingIcon} alt="Remodeling" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Remodeling</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={RoofingIcon} alt="Roofing" className="w-18 h-12 hover:scale-110 transition-transform" />
        <span className="text-md mt-1">Roofing</span>
      </div>
    </div>
  );
}

export default HeroIcons;
