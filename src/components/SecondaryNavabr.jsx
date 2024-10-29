import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
const apiUrl = import.meta.env.VITE_API_URL;

const SecondaryNavbar = () => {
  const [navItems, setNavItems] = useState([]); // State to hold categories
  const [hasScrolledLeft, setHasScrolledLeft] = useState(false); // Track if there are items on the left
  const scrollRef = useRef(null); // Reference to the scrollable container
  const { setCategoryIDfromNav } = useGlobalContext();
  const { zipProSearch, setZipProSearch } = useProContext();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories/all`);
      const data = await response.json();
      setNavItems(data.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  useEffect(() => {
    return () => {
      setCategoryIDfromNav(null); // Reset category ID when modal closes
    };
  }, [setCategoryIDfromNav]);

  const handleCategoryClick = (item) => {
    setCategoryIDfromNav(item.id);
    setZipProSearch(null);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setHasScrolledLeft(scrollRef.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const activeLinkStyle = {
    backgroundColor: "#282829",
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <nav className="bg-primaryColor mx-auto px-[160px] mb-2 relative rounded">
      {hasScrolledLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition"
        >
          <FaChevronLeft className='text-white font-bold text-2xl' />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-4 items-center w-full h-[80px]"
        style={{ scrollbarWidth: 'none' }}
      >
        <ul className="flex space-x-4 list-none ml-6">
          {navItems.map((item) => (
            <li key={item.id} className='w-[170px]'>
              <NavLink
                to={`/search-results/${item.id}`}
                onClick={() => handleCategoryClick(item)}
                className={`text-black font-bold transition duration-200 text-white hover:text-white`}
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
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition"
      >
        <FaChevronRight className='text-white font-bold text-2xl' />
      </button>
    </nav>
  );
};

export default SecondaryNavbar;
