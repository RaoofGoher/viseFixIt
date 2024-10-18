import React, { useState } from 'react';

const SecondaryNavbar = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Array of nav items
  const navItems = [
    { name: 'Home' },
    { name: 'Interior' },
    { name: 'Exterior' },
    { name: 'Lawn' },
    { name: 'Cleaning' },
    { name: 'Electrician' },
  ];

  // Function to open a modal based on item name
  const openModal = (itemName) => {
    setActiveModal(itemName);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <nav className="bg-orange-500 p-4 w-[99.5%] mx-auto mb-[2px]">
        <ul className="flex space-x-6 items-center justify-between">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
         
                onClick={() => openModal(item.name)}
                className={`text-black font-bold font-segoei ${
                  activeModal === item.name ? 'text-secondaryColor' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Modal */}
      {activeModal && (
        <>
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 z-50">
              <h2 className="text-lg font-bold mb-4">{activeModal} Details</h2>
              <p>This is the content for the {activeModal} section.</p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-primaryColor text-white rounded"
              >
                Close
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
        </>
      )}
    </>
  );
};

export default SecondaryNavbar;
