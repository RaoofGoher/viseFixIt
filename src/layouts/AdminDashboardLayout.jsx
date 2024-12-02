import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaUserCircle, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useProContext } from "../context/ProContext";
import { useGlobalContext } from "../context/GlobalContext";
import image from "../assets/logo2.png"; // Update with your logo path

const AdminDashboardLayout = ({ children }) => {
  const { proData, isProAuthenticated, logoutPro } = useProContext();
  const { user, isAuthenticated, logoutUser } = useGlobalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const activeLinkStyle = {
    backgroundColor: "#93bcbc", // Sky Blue
    color: "white",
    fontWeight: "bold",
    borderRadius: "0.5rem",
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    if (isProAuthenticated) {
      logoutPro();
    } else if (isAuthenticated) {
      logoutUser();
    }
    closeNav();
  };

  return (
    <div className="bg-lightColor z-50 h-screen flex flex-col">
      <div className="sm:flex">
        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden p-2 text-black z-10 fixed top-4 left-4 bg-primaryColor rounded-md shadow-lg hover:bg-secondaryColor transition-all"
          onClick={toggleNav}
        >
          {isNavOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-black rounded-lg"></span>
              <span className="block w-6 h-1 bg-black rounded-lg"></span>
              <span className="block w-6 h-1 bg-black rounded-lg"></span>
            </div>
          )}
        </button>

        {/* Sidebar Navigation */}
        <aside
          className={`z-20 py-4 fixed sm:relative h-full top-0 left-0 rounded-md backdrop-blur-md bg-secondaryColor/40 text-white shadow-xl transform transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 sm:block overflow-y-auto scroll-smooth scrollbar-hidden w-72`}
        >
          {/* Close button when sidebar is open */}
          <button
            className="sm:hidden p-2 rounded-full text-black absolute top-2 -right-[0.01rem] backdrop-blur-lg bg-primaryColor/40 shadow-lg hover:bg-secondaryColor transition-all"
            onClick={closeNav}
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="py-8 px-6 text-center border-b border-lightColor3 flex flex-col items-center">
            <img src={image} alt="Logo" width={150} className="mb-6" />
            {/* Profile Section */}
            <div className="flex flex-row gap-4 items-center">
              {isProAuthenticated ? (
                <>
                  {proData?.profile_picture_url &&
                  proData?.profile_picture_url !== "null" ? (
                    <div className="relative flex flex-col items-start">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${
                          proData.profile_picture_url
                        }?t=${new Date().getTime()}`}
                        alt="Pro Profile"
                        className="w-16 h-16 rounded-full border-2 border-primaryColor"
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="w-10 h-10 text-primaryColor mb-2" />
                  )}
                  <p className="text-lg text-gray-800 font-bold">{proData?.username}</p>
                </>
              ) : isAuthenticated ? (
                <>
                  {user?.data?.profile_picture_url &&
                  user?.data?.profile_picture_url !== "null" ? (
                    <div className="relative flex flex-col items-start">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${
                          user.data.profile_picture_url
                        }?t=${new Date().getTime()}`}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full border-2 border-primaryColor mt- mb-2"
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="w-11 h-11 text-primaryColor mb-2" />
                  )}
                  <p className="text-lg text-gray-800 font-bold">{user?.data?.username}</p>
                </>
              ) : (
                <FaUserCircle className="w-11 h-11 text-primaryColor mb-2" />
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6">
            <ul className="space-y-4 text-gray-800">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center p-4 hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav}
                >
                  <FaHome className="mr-3 text-xl" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className="flex items-center p-4 hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav}
                >
                  <FaTachometerAlt className="mr-3 text-xl" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/dashboard/settings"
                  className="flex items-center p-4 hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav}
                >
                  <FaUserCircle className="mr-3 text-xl" />
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full p-4 text-left hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                >
                  <FaSignOutAlt className="mr-3 text-xl" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-6 bg-slate-200 rounded-md ${isNavOpen ? 'sm:ml-72' : 'w-full'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
