import React from 'react';
import MainImage from '../assets/mainImg.png'
const ContactUS = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-4 border border-4 border-lightColor1 mt-24 bg-lightColor1 mb-4">
         <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={MainImage} // Replace with your image URL
          alt="Contact Us"
          className="w-full h-[500px] rounded-lg shadow-lg"
        />
      </div>
      {/* Form Section */}
      <div className="w-[60vw] ">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primaryColor text-white font-semibold rounded-md shadow-sm hover:bg-lightColor2 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
     
    </div>
  );
};

export default ContactUS;
