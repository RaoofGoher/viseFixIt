import React from "react";
import { FaRegComment } from "react-icons/fa"; // Using a comment icon for better UI

const DiscussionForum = () => {
  const topics = [
    {
      id: 1,
      title: "Best Tools for Home Improvement",
      description: "What are the best tools for home improvement projects?",
      posts: 12,
    },
    {
      id: 2,
      title: "How to Install a Kitchen Sink",
      description: "Share your tips on installing a kitchen sink. What works best?",
      posts: 8,
    },
    {
      id: 3,
      title: "Dealing with Plumbing Leaks",
      description: "How do you handle plumbing leaks? Share your experiences and solutions.",
      posts: 15,
    },
    {
      id: 4,
      title: "Tips for Painting Walls Like a Pro",
      description: "Looking for tips on how to paint walls like a professional. What techniques work best?",
      posts: 9,
    },
    {
      id: 5,
      title: "How to Fix a Leaky Faucet",
      description: "Discuss how to fix common faucet leaks and save on plumber costs.",
      posts: 21,
    },
    {
      id: 6,
      title: "Building Custom Furniture",
      description: "Share your projects and ideas for building custom furniture.",
      posts: 5,
    },
    {
      id: 7,
      title: "How to Install a Ceiling Fan",
      description: "Have you ever installed a ceiling fan? Share tips for installation and safety.",
      posts: 11,
    },
    {
      id: 8,
      title: "Upgrading Your Home Electrical System",
      description: "Discuss upgrading your electrical system for better energy efficiency and safety.",
      posts: 7,
    },
    {
      id: 9,
      title: "Organizing Your Garage",
      description: "What are the best ways to organize a messy garage and maximize space?",
      posts: 14,
    },
    {
      id: 10,
      title: "Bathroom Renovation Ideas",
      description: "Looking for creative ideas for renovating a small bathroom. Share your best hacks!",
      posts: 16,
    },
    // Add more topics as needed
  ];

  return (
    <section className="py-16 px-6 bg-white text-secondaryColor-dark">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Discussion <span className="text-secondaryColor"> Forum</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white p-6 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-primaryColor"
          >
            <h3 className="text-2xl font-semibold text-primaryColor hover:text-secondaryColor transition-all duration-300">
              {topic.title}
            </h3>
            <p className="mt-2 text-gray-600 hover:text-secondaryColor transition-all duration-300">
              {topic.description}
            </p>

            <div className="flex items-center mt-2 text-gray-500">
              <FaRegComment className="mr-2" />
              <span className="text-sm text-gray-400">Posts: {topic.posts}</span>
            </div>

            <div className="mt-4">
              <button className="w-full bg-primaryColor   text-white py-2 px-6 rounded-md hover:bg-white hover:text-secondaryColor hover:border-secondaryColor hover:border  transition-all duration-300">
                Join Discussion 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscussionForum;
