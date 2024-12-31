import React from "react";
import { FaTools, FaTruck, FaRegClock, FaHardHat, FaQuestionCircle } from "react-icons/fa";

const FAQs = () => {
  return (
    <section className="py-16 px-6 bg-white text-secondaryColor-dark">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Frequently <span className="text-secondaryColor"> Asked </span> Questions
      </h2>
      
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* FAQ 1: Roles Available */}
        <details className="group border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaQuestionCircle className="mr-2 text-primaryColor group-hover:text-white" />
            What roles are available?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            We have positions for Handyman Technicians, Plumbers, Electricians, Carpenters, Painters, and more. 
            Explore our listings to see the specific roles and job descriptions.
          </p>
        </details>

        {/* FAQ 2: Remote Work */}
        <details className=" group  border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaRegClock className="mr-2 text-primaryColor group-hover:text-white " />
            Can I work remotely?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            Since most of our roles require on-site work, remote work is not typically available. However, we do offer flexible scheduling based on your availability and location.
          </p>
        </details>

        {/* FAQ 3: Tool Provision */}
        <details className="group border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaTools className="mr-2 text-primaryColor group-hover:text-white" />
            Do I need to provide my own tools?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            We provide essential tools and equipment for our employees. However, if you have your own tools or specific preferences, you are welcome to bring them to the job.
          </p>
        </details>

        {/* FAQ 4: Job Flexibility */}
        <details className="group  border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaTruck className="mr-2 text-primaryColor group-hover:text-white" />
            Do I need to provide transportation?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            We provide company vehicles for many of our workers, but some roles may require you to use your own transportation. We cover travel expenses for on-site jobs.
          </p>
        </details>

        {/* FAQ 5: Safety Measures */}
        <details className=" group border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaHardHat className="mr-2 text-primaryColor group-hover:text-white" />
            What safety measures are in place?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            Safety is a top priority. We provide all necessary safety gear, including hard hats, gloves, and high-visibility vests. All employees are trained in workplace safety protocols and are required to follow strict safety guidelines.
          </p>
        </details>

        {/* FAQ 6: Part-Time Opportunities */}
        <details className=" group border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaRegClock className="mr-2 text-primaryColor group-hover:text-white" />
            Are there part-time or flexible work opportunities?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            Yes, we offer both full-time and part-time roles. Many of our workers have flexible hours, depending on the job and location. Speak with our HR team to customize your schedule.
          </p>
        </details>

        {/* FAQ 7: Work Environment */}
        <details className="group border border-gray-600 rounded-lg p-6 bg-white text-primaryColor hover:bg-primaryColor hover:text-white transition">
          <summary className="font-semibold text-lg flex items-center">
            <FaQuestionCircle className="mr-2 text-primaryColor group-hover:text-white " />
            What is the work environment like?
          </summary>
          <p className="mt-2 text-dark group-hover:text-white">
            We work in a variety of residential and commercial settings, offering a dynamic and hands-on work environment. Each day presents new challenges, and you’ll be part of a collaborative team that values quality and professionalism.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQs;
