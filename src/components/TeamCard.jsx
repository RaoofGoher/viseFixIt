import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className=" ml-6 p-6 my-6 max-w-xs w-full rounded-lg shadow-lg bg-primaryColor overflow-hidden hover:shadow-2xl hover:shadow-custom-green transform hover:-translate-y-1 transition-all duration-300">
      <img
        src= {member.image}
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-white">{member.role}</p>
        <div className="mt-4 flex space-x-3">
          <a href={member.linkedin} aria-label={`LinkedIn profile of ${member.name}`} className="text-blue-500">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href={member.twitter} aria-label={`Twitter profile of ${member.name}`} className="text-blue-400">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
