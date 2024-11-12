import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useGlobalContext();

  // Add a check for user and user.data
  if (!user || !user.data) {
    return <p>Loading...</p>;
  }

  // Exclude csrf_token from the user info
  const userInfo1 = Object.entries(user.data).filter(
    ([key]) => key !== "csrf_token"
  );

  return (
    <div className="mb-4 sm:mb-0 md:max-w-2xl sm:mx-auto p-2 sm:p-5 bg-white shadow-md rounded-lg -my-6 sm:my-6">
      <h1 className=" text-xl sm:text-2xl font-bold mb-2 sm:mb-4">User Dashboard</h1>
      <div className="grid grid-rows-1 md:grid-cols-1 gap-1 sm:gap-4 text-[0.8rem] sm:text-[1rem]">
        {userInfo1.map(([key, value], index) => (
          <div
            key={key}
            className="flex justify-between bg-gray-100 p-3 rounded-lg"
          >
            <span className="font-semibold capitalize">
              {key.replace("_", " ")} 
            </span>
            <span
              className={`ml-2 ${
                index === 0 ? "text-green-500" : "text-gray-700"
              }`}
            >
              {value?.toString()}
            </span>
          </div>
        ))}

        {/* Use the username from user.data for the profile link */}
        {user.data.username && (
          <Link
            to={`/dashboard/myprofilecustomer/${user.data.username}`}
            className="text-blue-500"
          >
            View My Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
