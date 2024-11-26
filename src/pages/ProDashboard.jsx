import React from 'react';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';

const ProDashboard = () => {
  const { proData } = useProContext();

  // Check if proData is available
  if (!proData) {
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white shadow-xl rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Define an array of fields to display
  const fields = [
    { label: 'Username', value: proData.username },
    { label: 'Email', value: proData.email },
    { label: 'Phone Number', value: proData.phone_number },
    { label: 'Address', value: proData.address },
    { label: 'Zip Code', value: proData.zip_code },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[#93bcbc] to-[#F58634] shadow-2xl rounded-3xl my-8">
      <h1 className="text-3xl font-semibold text-white mb-6 text-center">Service Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fields.map((field, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border-2 border-[#93bcbc] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="flex flex-col justify-between items-center mb-4">
              <span className="font-medium text-lg text-[#93bcbc]">{field.label}</span>
              <span className="text-lg text-[#F58634] font-semibold">{field.value}</span>
            </div>
            <div className="border-t-2 border-[#93bcbc] mt-4 pt-2">
              <span className="text-sm text-gray-500">Last updated: Just now</span>
            </div>
          </div>
        ))}
        {/* Profile link */}
        <div className="bg-white p-6 rounded-lg border-2 border-[#93bcbc] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-lg text-[#93bcbc]">My Profile</span>
            <Link 
              to={`/dashboard/myprofilepro/${proData.username}`} 
              className="text-[#F58634] font-semibold hover:underline"
            >
              View Profile
            </Link>
          </div>
          <div className="border-t-2 border-[#93bcbc] mt-4 pt-2">
            <span className="text-sm text-gray-500">Manage your profile and settings.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDashboard;
