import React from "react";
import { Link } from "react-router-dom";
const partnersAbout = () => {
  return (
    <section className="bg-lightColor3 text-center py-5 px-12 sm:px-20">
      <div>
        <h1 className="text-4xl font-bold  mb-5 mt-4">
          About <span className="text-secondaryColor">Us</span>
        </h1>
      </div>
      <div>
        <p className=" text-base sm:text-xl leading-tight mb-5 mt-8">
          We're Fixit, a technology company helping millions of people
          confidently care for and improve their homes. Every day in every
          county of the U.S., people turn to Fixit to complete small fixes,
          routine maintenance and major improvements. With over 10 million
          5-star projects and counting, we empower homeowners to take control
          and local businesses to grow. Interested in learning more about
          Fixit?
          <span className="text-secondaryColor">
            <Link to={'/'} > Check out our About Us page.</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default partnersAbout;
