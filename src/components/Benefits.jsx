import React from "react";
import { FaWrench, FaRegClock, FaHardHat, FaTools, FaTruck, FaHome } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white text-secondaryColor ">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Benefits <span className="text-secondaryColor"> & </span> Perks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Benefit 1: Tool Allowance */}
        <div className="group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaTools className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Tool Allowance</h3>
          <p className="text-center text-dark group-hover:text-white">
            We provide our team with a generous tool allowance to ensure you have the best equipment for the job.
          </p>
        </div>

        {/* Benefit 2: Flexible Working Hours */}
        <div className=" group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaRegClock className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Flexible Working Hours</h3>
          <p className="text-center text-dark group-hover:text-white">
            Enjoy flexible working hours with opportunities to choose your schedule and manage your work-life balance.
          </p>
        </div>

        {/* Benefit 3: Safety Gear */}
        <div className=" group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaHardHat className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Safety Gear Provided</h3>
          <p className="text-center text-dark group-hover:text-white">
            Your safety is our top priority. We provide top-quality safety gear including hard hats, gloves, and high-visibility vests.
          </p>
        </div>

        {/* Benefit 4: Company Vehicle */}
        <div className="group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaTruck className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Company Vehicle</h3>
          <p className="text-center text-dark group-hover:text-white">
            Get a company vehicle to travel to job sites, so you can focus on the work without worrying about transportation.
          </p>
        </div>

        {/* Benefit 5: Paid Training */}
        <div className=" group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaWrench className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Paid Training</h3>
          <p className="text-center text-dark group-hover:text-white">
            We offer paid training to help you improve your skills and stay up-to-date with the latest industry standards.
          </p>
        </div>

        {/* Benefit 6: Job Security */}
        <div className=" group flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-primaryColor hover:text-white transition">
          <FaHome className="text-4xl mb-4 text-primaryColor group-hover:text-white" />
          <h3 className="text-2xl font-semibold mb-2">Job Security</h3>
          <p className="text-center text-dark group-hover:text-white">
            Enjoy job security with long-term opportunities in a growing company that values your hard work.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      {/* <div className="text-center mt-12">
        <button
          className="px-6 py-3 text-lg font-semibold bg-primaryColor text-white rounded-lg hover:bg-secondaryColor transition"
        >
          Join Our Team Today
        </button>
      </div> */}
    </section>
  );
};

export default Benefits;
