import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

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
          const response = await axios.get(`${apiUrl}/service_provider/get/${id}`);
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
  const fullImageUrl = `${apiUrl}${profile.sp_profile.profile_picture_url}`;

  return (
    <div className="max-w-6xl mx-auto my-6 rounded-lg p-6 bg-secondaryColor ">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Profile Overview</h1>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Personal Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-3">
            <p className="flex justify-between"><img src={fullImageUrl} alt='profile image' style={{ width: 100, height: 100 }} /></p>
            {console.log("image",profile.sp_profile.profile_picture_url)}
            <p className="flex justify-between"><strong>Username:</strong> <span>{profile.username}</span></p>
            <p className="flex justify-between"><strong>Email:</strong> <span>{profile.email}</span></p>
            <p className="flex justify-between"><strong>Phone Number:</strong> <span>{profile.phone_number}</span></p>
            <p className="flex justify-between"><strong>Address:</strong> <span>{profile.address}</span></p>
            <p className="flex justify-between"><strong>Zip Code:</strong> <span>{profile.zip_code}</span></p>
          </div>
        </div>

        {/* Company Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Company Information</h2>
          <div className="space-y-3">
            <p className="flex justify-between"><strong>Company Name:</strong> <span>{profile.company_name || "N/A"}</span></p>
            <p className="flex justify-between"><strong>Service:</strong> <span>{profile.category}</span></p>
            <p className="flex justify-between"><strong>Status:</strong> <span>{profile.status}</span></p>
            <p className="flex justify-between"><strong>Number of People:</strong> <span>{profile.number_of_people}</span></p>
            <p className="flex justify-between"><strong>Company Founded Date:</strong> <span>{profile.sp_profile.company_founded_date}</span></p>
          </div>
        </div>

        {/* Service Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Services & Pricing</h2>
          <div className="space-y-3">
            <p className="flex justify-between"><strong>included services:</strong> <span>{profile.sp_profile.services_included}</span></p>
            <p className="flex justify-between"><strong>Base Price:</strong> <span>{profile.sp_profile.base_price}</span></p>
            <p className="flex justify-between"><strong>Payment Methods:</strong> <span>{profile.sp_profile.payment_methods}</span></p>
          </div>
        </div>

        {/* Additional Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="space-y-3">
            <p className="flex justify-between"><strong>Introduction:</strong> <span>{profile.sp_profile.introduction}</span></p>
            <p className="flex justify-between"><strong>Average Rating:</strong> <span>{profile.average_rating}</span></p>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="text-center mt-8">
        <button 
          onClick={() => navigate(`/myprofilepro/${profile.username}/edit`)}
          className="w-full md:w-1/2 bg-lightColor1 text-black font-bold py-2 px-4 rounded hover:bg-lightColor2 transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfilePro;
