import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Outlet, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useProContext } from "../context/ProContext";
import {
  FaHome,
  FaUserCircle,
  FaTachometerAlt,
  FaSignOutAlt,
  FaTimes,
  FaStar,
  FaBell,
} from "react-icons/fa";
import image from "../assets/logo2.png";

const apiUrl = import.meta.env.VITE_API_URL;

const DashboardLayout = () => {
  const { proData, isProAuthenticated, logoutPro } = useProContext();
  const { user, isAuthenticated, logoutUser } = useGlobalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // menu Items Here
  const menuItems = ["User One", "User Two", "User Three", "User Four"];

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
    <div className="bg-lightColor h-screen flex flex-col ">
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
          } sm:translate-x-0 sm:block overflow-y-auto scroll-smooth scrollbar-hidden `}
          style={{ width: "290px" }}
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
            <div className="flex flex-row gap-4  items-center ">
              {isProAuthenticated ? (
                <>
                  {proData?.profile_picture_url &&
                  proData?.profile_picture_url !== "null" ? (
                    <div className="relative flex flex-col items-start">
                      <img
                        src={`${apiUrl}${
                          proData.profile_picture_url
                        }?t=${new Date().getTime()}`}
                        alt="Pro Profile"
                        className="w-16 h-16 rounded-full border-2 border-primaryColor "
                      />
                      <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
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
                        src={`${apiUrl}${
                          user.data.profile_picture_url
                        }?t=${new Date().getTime()}`}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full border-2 border-primaryColor mt- mb-2"
                      />
                      {/* Badge */}
                      <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondaryColor opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondaryColor"></span>
                      </span>
                    </div>
                  ) : (
                    <FaUserCircle className="w-11 h-11 text-primaryColor mb-2" />
                  )}

                  <p className="text-lg text-gray-800 font-bold">{user?.data?.username}</p>
                  {/* Notification Button */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ">
                        <FaBell className="text-xl text-gray-800 hover:text-secondaryColor" />
                      </MenuButton>
                      <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondaryColor opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondaryColor"></span>
                      </span>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        {menuItems.map((item, index) => (
                          <MenuItem key={index}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                              {item}
                            </a>
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                </>
              ) : (
                <FaUserCircle className="w-11 h-11 text-primaryColor mb-2" />
              )}
            </div>
            <div>
              <div className="flex space-x-4">
                {/* Review Button */}
                <button className="  flex flex-col justify-center items-center text-white py-2 px-4  hover:text-secondaryColor transition duration-200">
                  <span className="text-2xl text-gray-800 font-bold"> 4.5</span>
                  <div className="flex">
                    <FaStar className="text-xl fill-yellow-500" />
                    <FaStar className="text-xl fill-yellow-500" />
                    <FaStar className="text-xl fill-yellow-500" />
                    <FaStar className="text-xl fill-yellow-500" />
                    <FaStar className="text-xl fill-yellow-500" />
                  </div>
                </button>
              </div>
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
                  to={
                    proData
                      ? `/dashboard/prodashboard/${proData?.username}`
                      : `/dashboard/${user?.data?.username}`
                  }
                  className="flex items-center p-4 hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav}
                >
                  <FaTachometerAlt className="mr-3 text-xl" />
                  Dashboard
                </NavLink>
              </li>
              <li className="text-dark">
                <NavLink
                  to={
                    proData
                      ? `/dashboard/myprofilepro/${proData?.username}`
                      : `/dashboard/myprofilecustomer/${user?.data?.username}`
                  }
                  className="flex items-center p-4 hover:bg-primaryColor rounded-lg transition-all duration-200 hover:text-lightColor2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                  onClick={closeNav}
                >
                  <FaUserCircle className="mr-3 text-xl" />
                  Profile
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
        <main className="flex-1 p-6 bg-slate-200 rounded-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
