import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useGlobalContext();

  // Add a check for user and user.data
  if (!user || !user.data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-700 text-base sm:text-lg">Loading...</p>
      </div>
    );
  }

  // Exclude csrf_token from the user info
  const userInfo1 = Object.entries(user.data).filter(
    ([key]) => key !== "csrf_token"
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-primaryColor shadow-lg rounded-lg my-8">
  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Render user information */}
        {userInfo1.map(([key, value], index) => (
          <div
            key={key}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-semibold text-gray-800 capitalize">
                {key.replace("_", " ")}
              </span>
              <span
                className={`ml-2 overflow-hidden text-sm sm:text-base ${index === 0 ? "text-green-600" : "text-gray-600"}`}
              >
                {value?.toString()}
              </span>
            </div>
          </div>
        ))}

        {/* Profile Image and Link */}
        {user.data.username && (
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-semibold text-gray-800 capitalize">Profile</span>
              <div className="flex items-center space-x-3">
                {/* Profile Image */}
                {user.data.profile_image && (
                  <img
                    src={user.data.profile_image}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <Link
                  to={`/dashboard/myprofilecustomer/${user.data.username}`}
                  className="text-blue-600 hover:underline font-semibold text-sm sm:text-base"
                >
                  View My Profile
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
