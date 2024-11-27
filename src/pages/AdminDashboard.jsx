import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useProContext } from "../context/ProContext";
import SummaryCard from "../components/SummaryCard";
import UserTable from "../components/UserTable";

Chart.register(...registerables);

const AdminDashboard = () => {
  const { proData } = useProContext();

  // Function to generate random data
  const generateDummyData = (count) => {
    const userTypes = ["Customer", "Service Provider"];
    const statuses = ["Active", "Inactive"];
    const randomUsername = () => `User${Math.floor(Math.random() * 1000)}`;
    const randomPhoneNumber = () =>
      `(${Math.floor(Math.random() * 900) + 100})-${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`;
    const randomEmail = () => `${randomUsername().toLowerCase()}@example.com`;
    const randomStatus = () =>
      statuses[Math.floor(Math.random() * statuses.length)];
    const randomUserType = () =>
      userTypes[Math.floor(Math.random() * userTypes.length)];

    return Array.from({ length: count }, () => ({
      username: randomUsername(),
      phoneNumber: randomPhoneNumber(),
      email: randomEmail(),
      loginDetail: Math.random() > 0.5 ? "Logged in" : "Logged out",
      status: randomStatus(),
      userType: randomUserType(),
    }));
  };

  // Generate 100 dummy users (You can change the number as needed)
  const dummyData = [
    ...generateDummyData(100), // 100 users
    {
      username: "John Doe",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      loginDetail: "Logged in",
      status: "Active",
      userType: "Customer",
    },
    {
      username: "Jane Smith",
      phoneNumber: "987-654-3210",
      email: "jane@example.com",
      loginDetail: "Logged out",
      status: "Inactive",
      userType: "Service Provider",
    },
    {
      username: "Alice Johnson",
      phoneNumber: "555-555-5555",
      email: "alice@example.com",
      loginDetail: "Logged in",
      status: "Active",
      userType: "Customer",
    },
    {
      username: "Provider X",
      phoneNumber: "111-222-3333",
      email: "providerx@example.com",
      loginDetail: "Logged in",
      status: "Active",
      userType: "Service Provider",
    },
    {
      username: "Eliza Beth",
      phoneNumber: "111-222-3333",
      email: "eliza@example.com",
      loginDetail: "Logged in",
      status: "Inactive",
      userType: "Customer",
    },
    {
      username: "Provider Y",
      phoneNumber: "111-222-3333",
      email: "providery@example.com",
      loginDetail: "Logged in",
      status: "Inactive",
      userType: "Service Provider",
    },
  ];

  const dataToDisplay = proData || dummyData;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataToDisplay.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total active and inactive users based on the full dataset, not just the filtered data
  const totalActiveUsers = dataToDisplay.filter(
    (user) => user.status === "Active"
  ).length;
  const totalInactiveUsers = dataToDisplay.filter(
    (user) => user.status === "Inactive"
  ).length;

  const chartData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "User Status",
        data: [totalActiveUsers, totalInactiveUsers], // Use the full count here
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-5 flex flex-col justify-center items-center bg-white shadow-xl rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Admin Dashboard</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <SummaryCard
          title="Total Users"
          value={dataToDisplay.length}
          color="bg-blue-100"
        />
        <SummaryCard
          title="Active Users"
          value={totalActiveUsers}
          color="bg-green-100"
        />
        <SummaryCard
          title="Inactive Users"
          value={totalInactiveUsers}
          color="bg-red-100"
        />
        <SummaryCard
          title="Total Customers"
          value={
            dataToDisplay.filter((user) => user.userType === "Customer").length
          }
          color="bg-yellow-100"
        />
        <SummaryCard
          title="Total Service Providers"
          value={
            dataToDisplay.filter((user) => user.userType === "Service Provider")
              .length
          }
          color="bg-purple-100"
        />
      </div>

      <div className="mb-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col justify-center items-center">
        <h3 className="font-semibold mb-2">User Status Chart</h3>
        <Bar data={chartData} />
      </div>

      {/* Move the search bar before the table */}
      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="Search by username..."
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h3 className="font-semibold mb-2">User Table</h3>
      <div className="overflow-y-auto w-full max-h-[400px]">
        <UserTable
          data={filteredData} // Display all filtered data without pagination
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
