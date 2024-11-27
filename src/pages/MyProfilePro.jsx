import React, { useEffect, useState } from "react";
import { useProContext } from "../context/ProContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;

const MyProfilePro = () => {
  const { proData } = useProContext();
  const [id, setId] = useState("");
  const [profile, setProfile] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
  }, [proData]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `${apiUrl}/service_provider/get/${id}`
          );
          setProfile(response.data.data.service_provider);
        } catch (error) {
          console.error("Error fetching service provider data:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (profile && profile.sp_profile) {
      const newUrl = `${apiUrl}${
        profile.sp_profile.profile_picture_url
      }?t=${new Date().getTime()}`;
      setProfilePicUrl(newUrl);
    }
  }, [profile]);

  if (!profile) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto my-6 rounded-lg p-6 bg-gradient-to-r from-[#93bcbc] to-[#F58634] text-white shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Profile Overview</h1>

      <div className="flex flex-col items-center mb-8">
        {profile.sp_profile?.profile_picture_url ? (
          <img
            src={profilePicUrl}
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg"
          />
        ) : (
          <FaUserCircle className="text-white w-20 h-20 sm:w-24 sm:h-24" />
        )}
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Card */}
        <div className="bg-white text-black shadow-md rounded-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-[#93bcbc] mb-4">
            Personal Information
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Username:</strong> {profile.username}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {profile.phone_number}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
            <p>
              <strong>Zip Code:</strong> {profile.zip_code}
            </p>
          </div>
        </div>

        {/* Company Information Card */}
        <div className="bg-white text-black shadow-md rounded-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-[#93bcbc] mb-4">
            Company Information
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Company Name:</strong> {profile.company_name || "N/A"}
            </p>
            <p>
              <strong>Service:</strong> {profile.category}
            </p>
            <p>
              <strong>Status:</strong> {profile.status}
            </p>
            <p>
              <strong>Number of People:</strong> {profile.number_of_people}
            </p>
            <p>
              <strong>Founded:</strong>{" "}
              {profile.sp_profile?.company_founded_date || "N/A"}
            </p>
          </div>
        </div>

        {/* Service Information Card */}
        <div className="bg-white text-black shadow-md rounded-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-[#93bcbc] mb-4">
            Services & Pricing
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Services Included:</strong>{" "}
              {profile.sp_profile?.services_included || "N/A"}
            </p>
            <p>
              <strong>Base Price:</strong>{" "}
              {profile.sp_profile?.base_price || "N/A"}
            </p>
            <p>
              <strong>Payment Methods:</strong>{" "}
              {profile.sp_profile?.payment_methods || "N/A"}
            </p>
          </div>
        </div>

        {/* Additional Information Card */}
        <div className="bg-white text-black shadow-md rounded-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-[#93bcbc] mb-4">
            Additional Information
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Introduction:</strong>{" "}
              {profile.sp_profile?.introduction || "N/A"}
            </p>
            <p>
              <strong>Average Rating:</strong> {profile.average_rating || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="text-center mt-8">
        <button
          onClick={() =>
            navigate(`/dashboard/myprofilepro/${profile.username}/edit`)
          }
          className="bg-[#F58634] hover:bg-[#93bcbc] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-md"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfilePro;
