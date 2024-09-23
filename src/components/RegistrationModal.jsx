import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const RegistrationModal = () => {
  const { isRegistrationModalOpen, closeRegistrationModal } = useGlobalContext();

  return (
    <>
      {isRegistrationModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-primaryColor p-6 rounded-lg shadow-lg w-1/3 text-white">
            <h2 className="text-2xl mb-4 text-center">Register</h2>

            <div className="flex justify-between mb-4">
              <Link to="/customersignup"><button 
                className="bg-secondaryColor text-white px-4 py-2 rounded-lg w-40 hover:bg-primaryColor hover:border hover:border-white"
                onClick={closeRegistrationModal}
              >
                Register as Customer
              </button>
              </Link>
              <button 
                className="bg-lightColor1 text-black px-4 py-2 rounded-lg w-40 hover:bg-primaryColor hover:border hover:border-lightcolor1 hover:text-lightColor2"
                onClick={closeRegistrationModal}
              >
                Register as Professional
              </button>
            </div>

            <button 
              className="bg-secondaryColor text-white px-4 py-2 rounded-lg w-full"
              onClick={closeRegistrationModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;