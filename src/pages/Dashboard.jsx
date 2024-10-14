import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useGlobalContext();

  // Add a check for user and user.data
  if (!user || !user.data) {
    return <p>Loading...</p>;
  }

  // Exclude csrf_token from the user info
  const userInfo1 = Object.entries(user.data).filter(([key]) => key !== 'csrf_token');

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg my-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {userInfo1.map(([key, value]) => (
          <div key={key} className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold capitalize">{key.replace('_', ' ')}</span>
            <span className="text-gray-700">{value?.toString()}</span>
          </div>
        ))}

        {/* Use the username from user.data for the profile link */}
        {user.data.username && (
          
          <Link to={`/myprofilecustomer/${user.data.username}`} className="text-blue-500">
            View My Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
