import { useContext, useState } from 'react';
import { AvailabilityContext } from '../context/AvailabilityContext';

const AvailabilityModal = () => {
  const {
    subcategoriesList,
    isModalOpen, // Get modal open state from context
    closeModal,  // Get closeModal function from context
  } = useContext(AvailabilityContext);

  

  return isModalOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>

        {/* Display all subcategoriesList in p tags */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Available Subcategories</h3>
          <div className="space-y-2">
            {console.log("baly",subcategoriesList)}
            {subcategoriesList.map((sub) => (
              
              <p key={sub.id} className="text-gray-700">
                {sub.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={closeModal} // Close modal
            className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AvailabilityModal;
