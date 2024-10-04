import React from 'react';
import { useProContext } from '../context/ProContext';

const ProDashboard = () => {
  const { proData } = useProContext();

  // Check if proData is available
  if (!proData) {
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg">
        <p>Loading...</p>
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
    <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg my-6">
      <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {fields.map((field, index) => (
          <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold capitalize">{field.label}</span>
            <span className="text-gray-700">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProDashboard;
