import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import PrimaryNavbar from "../components/PrimaryNavbar";
import { useGlobalContext } from "../context/GlobalContext";
import { useProContext } from "../context/ProContext";

const DashboardLayout = () => {
  const { proData } = useProContext();
  const { user } = useGlobalContext();
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the toggle

  const activeLinkStyle = {
    backgroundColor: "#F58634",
  };

  // Function to toggle the navigation on mobile screens
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the sidebar
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <PrimaryNavbar />
      <div className="sm:flex w-[90vw] ml-[10px] sm:ml-[40px]">
        {/* Mobile Toggle Button */}
        <button className="sm:hidden p-2 text-black" onClick={toggleNav}>
          {/* Cross icon for mobile toggle */}
          <span
            className={`block w-5 h-1 bg-black rounded-lg transform transition-all duration-300 ${
              isNavOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ marginBottom: "0.5rem" }}
          ></span>
          <span
            className={`block w-5 h-1 bg-black rounded-lg transform transition-all duration-300 ${
              isNavOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ marginBottom: "0.5rem" }}
          ></span>
          <span
            className={`block w-5 h-1 bg-black rounded-lg transform transition-all duration-300 ${
              isNavOpen ? "-rotate-45 -translate-y-4" : ""
            }`}
          ></span>
        </button>

        {/* Sidebar Navigation */}
        <aside
          className={`mt-2 absolute sm:relative w-48 sm:w-64 h-screen rounded-xl bg-secondaryColor text-white transform transition-transform duration-300 ${
            isNavOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } sm:translate-x-0 sm:opacity-100 sm:block`}
        >
          <nav>
            <ul>
              <li>
                <NavLink
                  to={
                    proData
                      ? `/dashboard/prodashboard/${proData?.username}`
                      : `/dashboard/${user?.data?.username}`
                  }
                  className="block p-4 hover:bg-primaryColor"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav} // Close sidebar when clicked
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={
                    proData
                      ? `/dashboard/myprofilepro/${proData?.username}`
                      : `/dashboard/myprofilecustomer/${user?.data?.username}`
                  }
                  className="block p-4 hover:bg-primaryColor"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav} // Close sidebar when clicked
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/settings"
                  className="block p-4 hover:bg-primaryColor"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav} // Close sidebar when clicked
                >
                  Settings
                </NavLink>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet /> {/* This will render the matched child routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
