import React from 'react';
import { landscapingIcon, ElectricalIcon, HandyPersonIcon, PlumbingIcon, RemodelingIcon, RoofingIcon } from '../data/HeroIcons';
import { useMediaQuery } from 'react-responsive';

function HeroIcons() {
  const isIconCollapsing = useMediaQuery({
    query: '(max-width: 1000px)',
  });
  const isIconCollapsing2 = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const isIconWhite = useMediaQuery({
    query: '(max-width: 800px)'
  })
  return (
    <div
      className={`flex flex-wrap ${
        isIconCollapsing ? 'w-[90vw]' : 'w-[50vw]'
      } justify-between ${isIconWhite ? "bg-primaryColor":"text-white"} ${isIconWhite ? "p-4":""} ` }
    >
      {/* Each icon and title wrapped in a flex column */}
      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={landscapingIcon}
          alt="Landscaping"
          className={`w-18 h-12 hover:scale-110 transition-transform`}
        />
        <span className="text-md mt-1">Landscaping</span>
      </div>

      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={ElectricalIcon}
          alt="Electrical"
          className="w-18 h-12 hover:scale-110 transition-transform"
        />
        <span className="text-md mt-1">Electrical</span>
      </div>

      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={HandyPersonIcon}
          alt="Handy Person"
          className="w-18 h-12 hover:scale-110 transition-transform"
        />
        <span className="text-md mt-1">Handy Person</span>
      </div>

      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={PlumbingIcon}
          alt="Plumbing"
          className="w-18 h-12 hover:scale-110 transition-transform"
        />
        <span className="text-md mt-1">Plumbing</span>
      </div>

      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={RemodelingIcon}
          alt="Remodeling"
          className="w-18 h-12 hover:scale-110 transition-transform"
        />
        <span className="text-md mt-1">Remodeling</span>
      </div>

      <div
        className={`flex flex-col items-center ${
          isIconCollapsing2 ? 'w-1/3 mb-4' : ''
        }`}
      >
        <img
          src={RoofingIcon}
          alt="Roofing"
          className="w-18 h-12 hover:scale-110 transition-transform"
        />
        <span className="text-md mt-1">Roofing</span>
      </div>
    </div>
  );
}

export default HeroIcons;
