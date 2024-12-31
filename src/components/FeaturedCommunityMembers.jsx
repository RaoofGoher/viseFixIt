import React from "react";
import image1 from "../assets/p3.jpg"
import image2 from "../assets/p2.jpg"
 
const FeaturedCommunityMembers = () => {
  const members = [
    { id: 1, name: "John Doe", posts: 45, bio: "DIY enthusiast. Loves to share tips and tricks.", imageUrl: image1 },
    { id: 2, name: "Sarah Lee", posts: 32, bio: "Passionate about home improvement and problem-solving.", imageUrl: image2 },
    { id: 3, name: "Mike Green", posts: 60, bio: "Avid carpenter with a love for custom furniture.", imageUrl: image1 },
    { id: 4, name: "Emma Stone", posts: 22, bio: "Always learning new skills in plumbing and electrical work.", imageUrl: image2 },
    { id: 5, name: "Tommy James", posts: 18, bio: "Building my own dream home, one project at a time.", imageUrl: image1 },
    { id: 6, name: "Olivia Green", posts: 40, bio: "Expert in landscaping and gardening, loves to share ideas.", imageUrl: image2 },
    // Add more members here
  ];

  return (
    <section className="py-16 px-6 bg-white ">
      <h2 className="text-4xl font-semibold mb-8 text-center text-primaryColor">
        Featured <span className="text-secondaryColor"> Community </span> Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div>
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primaryColor"
              />
              
            </div>

            <h3 className="text-lg font-semibold text-center mt-4 text-primaryColor hover:text-primaryColor-dark transition-all duration-300">
              {member.name}
            </h3>
            <p className="text-center text-gray-600">{member.bio}</p>
            <p className="text-center text-gray-500 mt-2">Posts: {member.posts}</p>

            {/* Hover Effects */}
            <div className="text-center mt-4">
              <button className="bg-primaryColor hover:bg-white hover:border hover:border-secondaryColor hover:text-secondaryColor   text-white py-2 px-4 rounded-md  transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCommunityMembers;
