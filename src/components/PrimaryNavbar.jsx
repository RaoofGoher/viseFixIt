import React from 'react';
import LogoImg from '../assets/mainImg.png';
import { FaChevronDown } from 'react-icons/fa';
import ServicesModal from './Modal';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';

const PrimaryNavbar = () => {
  // Access the modal state and open functions from the global context
  const { 
    openRegistrationModal, 
    openServiceModal, 
    isServiceModalOpen, 
    isRegistrationModalOpen, 
    isAuthenticated, 
    user, 
    logoutUser 
  } = useGlobalContext();

  const { isProAuthenticated, logoutPro } = useProContext();

 

  return (
    <div className="flex items-center justify-between text-black px-10 py-2">
      <Link to={'/'}>
        <div>
          <img 
            src={LogoImg} 
            className="w-[25] h-[83px] border-2 border-primaryColor rounded-md" 
            alt="Logo"
          />
        </div>
      </Link>

      <div className="navbar flex space-x-6 ">
        <h1
          className="cursor-pointer hover:text-white hover:bg-secondaryColor border border-primaryColor py-3 px-4 rounded-sm flex items-center justify-between"
          onClick={openServiceModal} // Call openServiceModal when clicked
        >
          Services <FaChevronDown className="mt-1 ml-1 text-primaryColor" />
        </h1>

        {/* Conditional rendering based on authentication states */}
        {!isAuthenticated && !isProAuthenticated ? (
          <>
            <h1 
              className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" 
              onClick={openRegistrationModal}
            >
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
                <Link to={`/pro-dashboard`}>
                  <h1 className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4">
                    Pro Dashboard
                  </h1>
                </Link>
                <Link to={'/'}>
                  <h1 
                    className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" 
                    onClick={logoutPro}
                  >
                    proLogout
                  </h1>
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
                  <h1 
                    className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4" 
                    onClick={logoutUser}
                  >
                    Logout
                  </h1>
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
