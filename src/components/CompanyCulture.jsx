import React from "react";
import { FaUsers, FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const CompanyCulture = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-lightColor3 text-secondaryColor-dark">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Our Values <span className="text-secondaryColor"> &</span> Culture
      </h2>
      
      <p className="text-center max-w-3xl mx-auto text-secondaryColor-dark mb-12">
        At our company, we believe in fostering an innovative, collaborative, and growth-oriented environment. Join us in creating a culture where every voice is valued and every challenge is an opportunity for creativity.
      </p>
      
      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Value 1: Collaboration */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaUsers className="text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
          <p className="text-center text-lightColor2">
            We believe in working together to solve problems, share knowledge, and achieve success as a team.
          </p>
        </div>

        {/* Value 2: Innovation */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaLightbulb className="text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
          <p className="text-center text-lightColor2">
            We are constantly exploring new ideas and technologies to improve and grow both personally and professionally.
          </p>
        </div>

        {/* Value 3: Integrity */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaHandshake className="text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
          <p className="text-center text-lightColor2">
            We maintain honesty and transparency in every action, ensuring trust and respect across all levels.
          </p>
        </div>

        {/* Value 4: Excellence */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaStar className="text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
          <p className="text-center text-lightColor2">
            We set high standards for ourselves and strive to exceed expectations in everything we do.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button
          className="px-6 py-3 text-lg font-semibold bg-primaryColor text-white rounded-lg hover:bg-secondaryColor transition"
        >
          Join Our Team
        </button>
      </div>
    </section>
  );
};

export default CompanyCulture;
