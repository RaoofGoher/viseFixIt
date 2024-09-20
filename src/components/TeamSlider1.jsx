import React from "react";
import Slider from "react-slick";
import TeamCard from "./TeamCard";
import person1 from "../assets/p2.jpg"

// Example team data with unique IDs
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    image: person1,
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: person1,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Product Manager',
    image: person1,
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    twitter: 'https://twitter.com/alicejohnson',
  },
  {
    id: 4,
    name: 'Bob Brown',
    role: 'Designer',
    image: person1,
    linkedin: 'https://www.linkedin.com/in/bobbrown',
    twitter: 'https://twitter.com/bobbrown',
  },
  // Add more unique team members here...
];

const TeamSlider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on your design
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ], // Adjust based on your design
  };

  return (
    <>
      <div className="text-center text-5xl font-bold m-8">Our <span className="text-primaryColor"> Team </span></div>
      <Slider {...settings} className="py-12">
        {teamMembers.map(member => (
          <TeamCard key={member.id} member={member}/>
        ))}
      </Slider>
    </>
  );
};

export default TeamSlider1;
