import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const MyProfilePro = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null); // State to hold profile data
  const navigate = useNavigate();
  // Set id when proData changes
  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
  }, [proData]);

  // Fetch data using id
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://51.20.63.119/service_provider/get/${id}`);
          setProfile(response.data.data.service_provider); // Set profile data to state
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData(); 
  }, [id]);

  // Render loading or profile
  if (!profile) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Profile Details</h2>
        <div className="space-y-2">
          <p className="flex justify-between"><strong>Username:</strong> <span className="text-gray-600">{profile.username}</span></p>
          <p className="flex justify-between"><strong>Email:</strong> <span className="text-gray-600">{profile.email}</span></p>
          <p className="flex justify-between"><strong>Phone Number:</strong> <span className="text-gray-600">{profile.phone_number}</span></p>
          <p className="flex justify-between"><strong>Address:</strong> <span className="text-gray-600">{profile.address}</span></p>
          <p className="flex justify-between"><strong>Zip Code:</strong> <span className="text-gray-600">{profile.zip_code}</span></p>
          <p className="flex justify-between"><strong>Company Name:</strong> <span className="text-gray-600">{profile.company_name || "N/A"}</span></p>
          <p className="flex justify-between"><strong>Category:</strong> <span className="text-gray-600">{profile.category}</span></p>
          <p className="flex justify-between"><strong>Subcategory:</strong> <span className="text-gray-600">{profile.sp_profile.services_included}</span></p>
          <p className="flex justify-between"><strong>Number of People:</strong> <span className="text-gray-600">{profile.number_of_people}</span></p>
          <p className="flex justify-between"><strong>Status:</strong> <span className="text-gray-600">{profile.status}</span></p>
          <p className="flex justify-between"><strong>Average Rating:</strong> <span className="text-gray-600">{profile.average_rating}</span></p>
          <p className="flex justify-between"><strong>Base Price:</strong> <span className="text-gray-600">{profile.sp_profile.base_price}</span></p>
          <p className="flex justify-between"><strong>Introduction:</strong> <span className="text-gray-600">{profile.sp_profile.introduction}</span></p>
          <p className="flex justify-between"><strong>Company Founded Date:</strong> <span className="text-gray-600">{profile.sp_profile.company_founded_date}</span></p>
          <p className="flex justify-between"><strong>Payment Methods:</strong> <span className="text-gray-600">{profile.sp_profile.payment_methods}</span></p>
        </div>
        <button 
          onClick={() => navigate(`/myprofilepro/${profile.username}/edit`)}
          className="mt-4 w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfilePro;
