import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const SecondaryNavbar = () => {
  const [navItems, setNavItems] = useState([]); // State to hold categories
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store the clicked category
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

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  // Function to handle category click
  const handleCategoryClick = (item) => {
    setSelectedCategory({ id: item.id, name: item.name }); // Replace state with the clicked category
  };

  // Log the updated selected category whenever it changes
  useEffect(() => {
    if (selectedCategory) {
      console.log("Selected Category:", selectedCategory);
    }
  }, [selectedCategory]);

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
    
    backgroundColor:"#282829",
    paddingTop:'100px',
    paddingBottom:'100px',
    paddingLeft:"10px",
    paddingRight:"10px",
  };
  
  return (
    <>
      <nav className="bg-primaryColor w-[94vw] mx-auto mb-2 relative rounded ">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronLeft className='text-secondaryColor font-bold text-2xl' />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 p-4 items-center scrollbar-hide w-full"
          style={{ scrollbarWidth: 'none' }} // For Firefox
        >
          <ul className="flex space-x-4 list-none ml-6">
            {navItems.map((item) => (
              <li key={item.id} className='w-[170px]' > {/* Assuming each item has a unique id */}
                <NavLink
                to={`/category/${item.id}`}
                  onClick={() => handleCategoryClick(item)} // Handle click event
                  className={`text-black font-bold transition duration-200 text-white hover:text-secondaryColor`}
                  style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full  hover:bg-gray-200 transition"
        >
          <FaChevronRight className='text-secondaryColor font-bold text-2xl' />
        </button>
      </nav>
    </>
  );
};

export default SecondaryNavbar;
