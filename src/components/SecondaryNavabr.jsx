import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { useMediaQuery } from 'react-responsive';

const apiUrl = import.meta.env.VITE_API_URL;

const SecondaryNavbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [hasScrolledLeft, setHasScrolledLeft] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const scrollRef = useRef(null);
  const { setCategoryIDfromNav } = useGlobalContext();
  const { setZipProSearch, setCategoryIdExplorer } = useProContext();
  const isMedium = useMediaQuery({ query: '(max-width: 440px)' });

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories/all`);
      const data = await response.json();
      setNavItems([...data.data.categories, ...data.data.categories]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (item) => {
    setCategoryIDfromNav(item.id);
    setZipProSearch(null);
    setDisableScroll(true); // Disable scroll on click
    setAutoScrollPaused(true); // Pause auto-scroll

    setTimeout(() => {
      setDisableScroll(false);
      setAutoScrollPaused(false); // Resume auto-scroll after delay
    }, 19000);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
      setHasScrolledLeft(scrollRef.current.scrollLeft > 0); // Update `hasScrolledLeft`
    }
    setAutoScrollPaused(true); 
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
      setHasScrolledLeft(true);
    }
    setAutoScrollPaused(true); 
  };

  const handleScroll = () => {
    if (disableScroll) return; 

    const scrollContainer = scrollRef.current;
    const halfScrollWidth = scrollContainer.scrollWidth / 2;

    // Check if scrolled to halfway point, reset to start for infinite scroll
    if (scrollContainer.scrollLeft >= halfScrollWidth) {
      scrollContainer.scrollLeft = 0;
    } else {
      setHasScrolledLeft(scrollContainer.scrollLeft > 0); // Update `hasScrolledLeft`
    }
  };

  // Auto-scrolling effect
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (!autoScrollPaused && scrollRef.current) {
        scrollRef.current.scrollBy({ left: 2, behavior: 'auto' });
      }
    }, 30);

    return () => clearInterval(autoScrollInterval);
  }, [autoScrollPaused]);

  useEffect(() => {
    if (autoScrollPaused) {
      const resumeTimeout = setTimeout(() => setAutoScrollPaused(false), 9000);
      return () => clearTimeout(resumeTimeout);
    }
  }, [autoScrollPaused]);

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
    <nav className={`bg-primaryColor mx-auto ${isMedium ? "px-[20px]" : "px-[160px]"} mb-2 relative rounded`}>
      {hasScrolledLeft && (
        <button
          onClick={scrollLeft}
          className={`absolute ${isMedium ? "left-0" : "left-6"}  top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition`}
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
          {navItems.map((item, index) => (
            <li key={`${item.id}-${index}`} className='w-[190px]'>
              <NavLink
                to={`/search-results/${item.id}`}
                onClick={() => handleCategoryClick(item)}
                className="text-black font-bold transition duration-200 text-white hover:text-white"
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
        className={`absolute  ${isMedium ? "right-2" : "right-6"}  top-1/2 transform -translate-y-1/2 bg-primaryColor p-2 rounded-full hover:bg-secondaryColor transition`}
      >
        <FaChevronRight className='text-white font-bold text-2xl' />
      </button>
    </nav>
  );
};

export default SecondaryNavbar;
