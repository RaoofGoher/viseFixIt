import React from 'react';
import LogoImg from '../assets/mainImg.png';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon from react-icons
import { FaChevronDown } from 'react-icons/fa';
import ServicesModal from './Modal';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';
import { useMediaQuery } from 'react-responsive';

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
    logoutUser
  } = useGlobalContext();

  const { isProAuthenticated, logoutPro, proData } = useProContext();

  return (
    <div className="flex smartNavbar:flex-col items-center justify-between text-black px-10 py-2">
      <Link to={'/'}>
        <div>
          <img
            src={LogoImg}
            className="w-[25] h-[83px] border-2 border-primaryColor rounded-md"
            alt="Logo"
          />
        </div>
      </Link>

      <div className={`navbar flex space-x-6 smartNavbar:py-4 ${isMobile ? "w-[95vw] items-center" : ""} ${isMobile2 ? "px-2" : "px-4"}`}>
        
        {isAuthenticated || isProAuthenticated ? "" : <Link to="/prosignup" className='mt-2'>
          <h1 className="cursor-pointer hover:text-white hover:bg-secondaryColor border border-primaryColor py-3 px-4 rounded-sm flex items-center justify-between">
            Join as Pro
          </h1>
        </Link> }
        
        
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
                  <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
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
                  <FaUserCircle className="w-8 h-8 cursor-pointer text-primaryColor mt-4" />
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
  );
};

export default PrimaryNavbar;
