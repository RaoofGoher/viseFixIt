import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
const apiUrl = import.meta.env.VITE_API_URL;

const SecondaryNavbar = () => {
  const [navItems, setNavItems] = useState([]); // State to hold categories
  const scrollRef = useRef(null); // Reference to the scrollable container
  const { setCategoryIDfromNav } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

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

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  // Function to handle category click
  const handleCategoryClick = (item) => {
    setCategoryIDfromNav(item.id); // Replace state with the clicked category
    console.log("category id", item);
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

  const activeLinkStyle = {
    backgroundColor: "#282829",
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <>
      <nav className="bg-primaryColor mx-auto px-6 mb-2 relative rounded">
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition"
        >
          <FaChevronLeft className='text-white font-bold text-2xl' />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 p-4 items-center w-full h-[80px]"
          style={{ scrollbarWidth: 'none' }} // For Firefox
        >
          <ul className="flex space-x-4 list-none ml-6">
            {navItems.map((item) => (
              <li key={item.id} className='w-[170px]'> {/* Assuming each item has a unique id */}
                <NavLink
                  to={`/search-results/${item.id}`} // Make sure each link is unique
                  onClick={() => handleCategoryClick(item)} // Handle click event
                  className={`text-black font-bold transition duration-200 text-white hover:text-white`}
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)} // Apply active style
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition"
        >
          <FaChevronRight className='text-white font-bold text-2xl' />
        </button>
      </nav>
    </>
  );
};

export default SecondaryNavbar;
