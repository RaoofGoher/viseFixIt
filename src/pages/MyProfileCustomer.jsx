import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const MyProfileCustomer = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user && user.data.id) {
      setId(user.data.id);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`${apiUrl}/customer/get/${id}/`);
          setProfile(response.data.data.customer); // Update the profile state with fetched data
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  if (!profile) return <div className="text-center">Loading...</div>;

  const handleEditClick = () => {
    navigate(`/myprofilecustomer/${profile.username}/edit`); // Navigates to the Edit Profile page
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md mt-8">
      <div className="flex items-center justify-center mb-4">
        {profile.profile_picture_url ? (
          <img
            src={profile.profile_picture_url}
            alt={`${profile.username}'s profile`}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            <span>No Image</span>
          </div>
        )}
      </div>
      <h1 className="text-xl font-semibold text-center mb-2">{profile.username}</h1>
      <p className="text-gray-600 text-center mb-4">{profile.email}</p>

      <div className="border-t pt-4 mb-4">
        <p className="text-gray-700">
          <strong>Phone Number:</strong> {profile.phone_number || 'N/A'}
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> {profile.address || 'N/A'}
        </p>
        <p className="text-gray-700">
          <strong>Zip Code:</strong> {profile.zip_code || 'N/A'}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfileCustomer;
