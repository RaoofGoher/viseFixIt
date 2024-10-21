import React, { useEffect } from 'react';
import LogoImg from '../assets/mainImg.png';
import Logo2 from '../assets/logo2.jpg';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon from react-icons
import { FaChevronDown } from 'react-icons/fa';
import ServicesModal from './Modal';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';
import { useMediaQuery } from 'react-responsive';
import SecondaryNavbar from './SecondaryNavabr';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const PrimaryNavbar = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 432px)'
  });

  const isMobile2 = useMediaQuery({
    query: '(max-width: 354px)'
  });

  const {
    openRegistrationModal,
    openServiceModal,
    isServiceModalOpen,
    isRegistrationModalOpen,
    isAuthenticated,
    user,
    logoutUser,
  } = useGlobalContext();

  const { isProAuthenticated, logoutPro, proData } = useProContext();
  


  return (
    <div>
      <div className="flex smartNavbar:flex-col items-center justify-between text-black px-10 ">
        <Link to={'/'}>
          <div>
            <img
              src={Logo2}
              className="w-[200px] h-[120px] rounded-md"
              alt="Logo"
            />
          </div>
        </Link>




        <div className={`navbar flex items-center space-x-6 smartNavbar:py-4 ${isMobile ? "w-[95vw] items-center" : ""} ${isMobile2 ? "px-2" : "px-4"}`}>

          <div className="flex items-center ">
            <span className="text-secondaryColor text-lg font-bold">Call Us: </span>
            <span className="text-primaryColor text-lg font-bold">(123) 456-7890</span>
            <Link to={'/'} className='ml-2 bg-primaryColor p-2 rounded border border-primaryColor text-white hover:bg-white  hover:text-black'>

              Home
            </Link>
          </div>

          {isAuthenticated || isProAuthenticated ? "" : <Link to="/prosignup" className='mt-2'>
            <h1 className="cursor-pointer hover:text-white hover:bg-secondaryColor border border-primaryColor py-3 px-4 rounded-sm flex items-center justify-between">
              Join our Pro Network
            </h1>
          </Link>}


          {/* Conditional rendering based on authentication states */}
          {!isAuthenticated && !isProAuthenticated ? (
            <>
              <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" onClick={openRegistrationModal}>
                Sign Up
              </h1>
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
                  {/* Profile icon for Pro */}
                  <Link to={`/myprofilepro/${proData?.username}`}>

                    {
                      !proData?.profile_picture_url || proData.profile_picture_url === 'null'
                        ? (
                          <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                        ) : (
                          <img
                            src={`${apiUrl}${proData.profile_picture_url}`}
                            alt="Profile"
                            className="w-8 h-8 rounded-2xl cursor-pointer text-primaryColor mt-4"
                          />
                        )
                    }
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
                  {/* Profile icon for Customer */}
                  <Link to={`/myprofilecustomer/${user?.data?.username}`}>
              
                    {
                      !user?.data?.profile_picture_url || user?.data?.profile_picture_url === 'null'
                        ? (
                          <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
                        ) : (
                          <img
                            src={`${apiUrl}${user.data.profile_picture_url}?t=${new Date().getTime()}`}
                            alt="Profile"
                            className="w-8 h-8 cursor-pointer rounded-2xl text-primaryColor mt-4"
                          />
                        )
                    }
                  </Link>
                </>
              )}
            </>
          )}
        </div>


        {/* Conditionally render the modals */}
        {isRegistrationModalOpen && <RegistrationModal />}
        {isServiceModalOpen && <ServicesModal />}
      </div>

    </div>
  );
};

export default PrimaryNavbar;
