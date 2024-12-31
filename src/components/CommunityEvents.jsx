import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"; // For icons

const CommunityEvents = () => {
  const events = [
    {
      id: 1,
      title: "Handyman Tools Workshop",
      date: "March 20, 2024",
      location: "New York, USA",
      description:
        "Join us for a hands-on workshop on the best tools for handyman services.",
    },
    {
      id: 2,
      title: "Home Repair Webinar",
      date: "April 10, 2024",
      location: "Online",
      description: "Learn home repair basics in this free online webinar.",
    },
    {
      id: 3,
      title: "Advanced Plumbing Techniques",
      date: "May 5, 2024",
      location: "Los Angeles, USA",
      description: "A workshop focused on advanced plumbing skills and techniques.",
    },
    {
      id: 4,
      title: "DIY Home Improvement Expo",
      date: "June 15, 2024",
      location: "Chicago, USA",
      description: "A day-long expo showcasing the latest trends and tools for DIY home improvement.",
    },
    {
      id: 5,
      title: "Painting & Decorating Tips",
      date: "July 12, 2024",
      location: "Online",
      description:
        "Join expert decorators as they share valuable tips for perfecting your home painting techniques.",
    },
    {
      id: 6,
      title: "Eco-Friendly Home Solutions",
      date: "August 3, 2024",
      location: "Austin, USA",
      description:
        "Discover eco-friendly solutions for your home, from sustainable building materials to energy-efficient appliances.",
    },
    {
      id: 7,
      title: "Smart Home Automation Seminar",
      date: "September 25, 2024",
      location: "San Francisco, USA",
      description:
        "Learn how to automate your home with smart devices, making your home more efficient and secure.",
    },
    {
      id: 8,
      title: "Backyard Landscaping Workshop",
      date: "October 10, 2024",
      location: "Miami, USA",
      description:
        "A hands-on workshop on transforming your backyard into a beautiful, functional space with landscaping techniques.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white ">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Upcoming <span className="text-secondaryColor">Events</span> 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-primaryColor hover:text-primaryColor-dark transition-all duration-300">
              {event.title}
            </h3>

            <div className="mt-4 flex items-center text-gray-500">
              <FaCalendarAlt className="text-primaryColor mr-2" />
              <span>{event.date}</span>
            </div>

            <div className="mt-2 flex items-center text-gray-500">
              <FaMapMarkerAlt className="text-primaryColor mr-2" />
              <span>{event.location}</span>
            </div>

            <p className="mt-4 text-gray-600">{event.description}</p>

            <div className="mt-4 text-center">
              <button className="bg-primaryColor hover:bg-white hover:text-secondaryColor hover:border hover:border-secondaryColor  text-white py-2 px-6 rounded-md hover:bg-primaryColor-dark transition-all duration-300">
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityEvents;
