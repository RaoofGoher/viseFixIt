import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserTable = ({ data }) => {
  const navigate = useNavigate();

  const handleViewMore = (user) => {
    navigate(`/admin/dashboard/user/${user.username}`, { state: { user } }); // Pass user data as state
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">User Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Phone Number</th>
            <th className="px-4 py-2 text-left text-gray-600">Email</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
            <th className="px-4 py-2 text-left text-gray-600">User Type</th>
            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-4 py-2 border-b border-gray-300">{item.username}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.phoneNumber}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.email}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.status}</td>
              <td className="px-4 py-2 border-b border-gray-300">{item.userType}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                <button
                  onClick={() => handleViewMore(item)}
                  className="text-blue-500 hover:underline"
                >
                  View More 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UserTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.string,
      userType: PropTypes.string,
    })
  ).isRequired,
};

export default UserTable;
