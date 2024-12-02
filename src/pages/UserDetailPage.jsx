import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";

const UserDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p>No user details available.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { user } = state;

  const chartData = {
    labels: ["Active Sessions", "Completed Sessions"],
    datasets: [
      {
        data: [20, 70],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">User Details: {user.username}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phoneNumber}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-semibold mb-2">Status</h3>
          <p><strong>Login Detail:</strong> {user.loginDetail}</p>
          <p><strong>Status:</strong> {user.status}</p>
          <p><strong>User Type:</strong> {user.userType}</p>
        </div>
      </div>
      <div className="mt-6 w-1/3 p-6 flex flex-col justify-center items-center h-34">
        <h3 className="font-semibold mb-4">User Activity Overview</h3>
        <Doughnut data={chartData} className="w-20" />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetailPage;
