import React, { useState } from 'react';
import Logo2 from '../assets/logo2.jpg';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import ServicesModal from './Modal';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';
import { useMediaQuery } from 'react-responsive';
import SecondaryNavbar from './SecondaryNavabr';

const apiUrl = import.meta.env.VITE_API_URL;

const PrimaryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMedium = useMediaQuery({
    query: '(max-width: 948px)',
  });

  const {
    openRegistrationModal,
    isServiceModalOpen,
    isRegistrationModalOpen,
    isAuthenticated,
    user,
    logoutUser,
  } = useGlobalContext();

  const { isProAuthenticated, logoutPro, proData } = useProContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const signUpHandler = () => {
  openRegistrationModal();
  toggleMenu();
}
  return (
    <div className="relative">
      <div className="flex items-center justify-between text-black px-10">
        {/* Logo */}
        <Link to={'/'}>
          <img
            src={Logo2}
            className="w-[200px] h-[120px] rounded-md"
            alt="Logo"
          />
        </Link>

        {/* Hamburger menu for small screens */}
        {isMedium && (
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Main navigation links for larger screens */}
        {!isMedium && (
          <div className="navbar flex items-center space-x-6">
            <div className="flex items-center">
              <span className="text-secondaryColor text-lg font-bold">Call Us: </span>
              <span className="text-primaryColor text-lg font-bold">(123) 456-7890</span>
              <Link to={'/'} className='ml-2 bg-primaryColor p-2 rounded border border-primaryColor text-white hover:bg-white hover:text-black'>
                Home
              </Link>
            </div>

            {!isAuthenticated && !isProAuthenticated ? (
              <Link to="/prosignup">
                <h1 className="cursor-pointer hover:text-white hover:bg-secondaryColor border border-primaryColor py-3 px-4 rounded-sm">
                  Join our Pro Network
                </h1>
              </Link>
            ) : null}

            {!isAuthenticated && !isProAuthenticated ? (
              <>
                <Link className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" to="/customersignup">
                  Sign Up
                </Link>
                <Link to={'/login'}>
                  <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                    Log In
                  </h1>
                </Link>
              </>
            ) : (
              <>
                {isProAuthenticated ? (
                  <>
                    <Link to={`/dashboard/prodashboard/${proData?.username}`}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                        Dashboard
                      </h1>
                    </Link>
                    <Link to={'/'}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={logoutPro}>
                        Logout
                      </h1>
                    </Link>
                    <Link to={`/myprofilepro/${proData?.username}`}>
                      {!proData?.profile_picture_url || proData.profile_picture_url === 'null' ? (
                        <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                      ) : (
                        <img
                          src={`${apiUrl}${proData.profile_picture_url}?t=${new Date().getTime()}`}
                          alt="Profile"
                          className="w-8 h-8 rounded-2xl cursor-pointer text-primaryColor mt-4"
                        />
                      )}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={`/dashboard/${user?.data?.username}`}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                        Dashboard
                      </h1>
                    </Link>
                    <Link to={'/'}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={logoutUser}>
                        Logout
                      </h1>
                    </Link>
                    <Link to={`/myprofilecustomer/${user?.data?.username}`}>
                      {!user?.data?.profile_picture_url || user?.data?.profile_picture_url === 'null' ? (
                        <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                      ) : (
                        <img
                          src={`${apiUrl}${user.data.profile_picture_url}?t=${new Date().getTime()}`}
                          alt="Profile"
                          className="w-8 h-8 cursor-pointer rounded-2xl text-primaryColor mt-4"
                        />
                      )}
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Drawer menu for small screens */}
      {isMedium && isMenuOpen && (
        <div className="fixed top-0 right-0 z-50 w-64 h-full bg-gray-100 shadow-lg transition-transform transform translate-x-0">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
            <FaTimes />
          </button>
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link onClick={toggleMenu} to={'/'} className="bg-primaryColor p-2 rounded border border-primaryColor text-white hover:bg-white hover:text-black">
              Home
            </Link>
            {!isAuthenticated && !isProAuthenticated ? (
              <>
                <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={signUpHandler}>
                  Sign Up
                </h1>
                <Link onClick={toggleMenu} to={'/login'}>
                  <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                    Log In
                  </h1>
                </Link>
              </>
            ) : (
              <>
                {isProAuthenticated ? (
                  <>
                    <Link onClick={toggleMenu} to={`/dashboard/prodashboard/${proData?.username}`}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                        Dashboard
                      </h1>
                    </Link>
                    <Link onClick={toggleMenu} to={'/'}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={logoutPro}>
                        Logout
                      </h1>
                    </Link>
                    <Link onClick={toggleMenu} to={`/myprofilepro/${proData?.username}`}>
                      {!proData?.profile_picture_url || proData.profile_picture_url === 'null' ? (
                        <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                      ) : (
                        <img
                          src={`${apiUrl}${proData.profile_picture_url}?t=${new Date().getTime()}`}
                          alt="Profile"
                          className="w-8 h-8 rounded-2xl cursor-pointer text-primaryColor mt-4"
                        />
                      )}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link onClick={toggleMenu} to={`/dashboard/${user?.data?.username}`}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                        Dashboard
                      </h1>
                    </Link>
                    <Link onClick={toggleMenu} to={'/'}>
                      <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={logoutUser}>
                        Logout
                      </h1>
                    </Link>
                    <Link onClick={toggleMenu} to={`/myprofilecustomer/${user?.data?.username}`}>
                      {!user?.data?.profile_picture_url || user?.data?.profile_picture_url === 'null' ? (
                        <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                      ) : (
                        <img
                          src={`${apiUrl}${user.data.profile_picture_url}?t=${new Date().getTime()}`}
                          alt="Profile"
                          className="w-8 h-8 cursor-pointer rounded-2xl text-primaryColor mt-4"
                        />
                      )}
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Modals */}
      {isRegistrationModalOpen && <RegistrationModal />}
      {isServiceModalOpen && <ServicesModal />}
      <SecondaryNavbar/>
    </div>
  );
};

export default PrimaryNavbar;
