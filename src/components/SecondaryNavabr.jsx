import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const apiUrl = import.meta.env.VITE_API_URL;

const SecondaryNavbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [navItems, setNavItems] = useState([]); // State to hold categories
  const [subCategories, setSubCategories] = useState([]); // State for subcategories
  const scrollRef = useRef(null); // Reference to the scrollable container

  // Function to fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories/all`);
      const data = await response.json();
      setNavItems(data.data.categories); // Assuming data is an array of category objects
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Function to fetch subcategories based on category ID
  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await fetch(`${apiUrl}/categories/subcategories/${categoryId}`);
      const data = await response.json();
      setSubCategories(data.data.subcategories); // Assuming data contains subcategories
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  // Function to open a modal based on item name
  const openModal = (item) => {
    setActiveModal(item.name);
    fetchSubCategories(item.id); // Fetch subcategories using the item's ID
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveModal(null);
    setSubCategories([]); // Clear subcategories when closing the modal
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-orange-500 p-4 w-full mx-auto mb-2 relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 items-center scrollbar-hide w-full"
          style={{ scrollbarWidth: 'none' }} // For Firefox
        >
          <ul className="flex space-x-4 list-none">
            {navItems.map((item) => (
              <li key={item.id}> {/* Assuming each item has a unique id */}
                <button
                  onClick={() => openModal(item)}
                  className={`p-4 text-black font-bold font-segoei transition duration-200 ${
                    activeModal === item.name ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronRight />
        </button>
      </nav>

      {/* Modal */}
      {activeModal && (
        <>
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 z-50">
              <h2 className="text-lg font-bold mb-4">{activeModal} Details</h2>
              <h3 className="text-md font-semibold">Subcategories:</h3>
              {subCategories.length > 0 ? (
                <ul className="list-disc pl-5">
                  {subCategories.map((sub) => (
                    <li key={sub.id}>{sub.name}</li> // Assuming each subcategory has a unique id
                  ))}
                </ul>
              ) : (
                <p>No subcategories available.</p>
              )}
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-primaryColor text-white rounded transition hover:bg-secondaryColor"
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
