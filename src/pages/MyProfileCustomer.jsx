import React, { useEffect, useState, useCallback } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const MyProfileCustomer = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);  // State for triggering fade-out

  useEffect(() => {
    if (user && user.data.id) {
      setId(user.data.id);
    }
  }, [user]);

  const fetchProfile = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get(`${apiUrl}/customer/get/${id}/`);
        setProfile(response.data.data.customer);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile) {
      const newUrl = `${apiUrl}${profile.profile_picture_url}?t=${new Date().getTime()}`;
      setProfilePicUrl(newUrl);
    }
  }, [profile]);

  if (!profile) return <div className="text-center text-darkColor1">Loading...</div>;

  const handleEditClick = () => {
    setIsEditing(true); // Trigger fade-out
    setTimeout(() => {
      navigate(`/dashboard/myprofilecustomer/${profile.username}/edit`);
    }, 500); // Delay navigation until the animation completes
  };

  return (
    <div
      className={`container mx-auto p-8 max-w-4xl bg-primaryColor shadow-2xl rounded-lg lg:mt-12 transform transition duration-300 min-h-[400px] sm:min-h-[350px] ${
        isEditing ? 'opacity-0 transition-opacity' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Side: Profile Picture and Email */}
        <div className="flex flex-col items-center w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative hover:-hue-rotate-30 w-32 h-32 mb-5 shadow-lg transition-shadow rounded-full duration-300">
            {profile.profile_picture_url ? (
              <img
                src={profilePicUrl}
                alt={`${profile.username}'s profile`}
                className="w-full h-full rounded-full border-4 border-secondaryColor object-cover hover:shadow-xl transition-shadow duration-300"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-white">
                <FaUserCircle size={72} />
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-darkColor1 mb-2">{profile.username}</h1>
          <p className="text-white italic mb-6">{profile.email}</p>
        </div>

        {/* Right Side: Personal Information */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h3 className="text-lg font-semibold text-darkColor1 mb-4">Personal Information</h3>
          <div className="mt-8 border-t border-lightColor3 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Phone Number:</span>
              <span className="text-white font-semibold">{profile.phone_number || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Address:</span>
              <span className="text-white font-semibold">{profile.address || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Zip Code:</span>
              <span className="text-white font-semibold">{profile.zip_code || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleEditClick}
          className="px-6 py-3 bg-secondaryColor hover:bg-slate-400 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 ease-in-out shadow-lg"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfileCustomer;
