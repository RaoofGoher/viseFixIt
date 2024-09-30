import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { useProContext } from '../context/ProContext';
import { useNavigate } from 'react-router-dom';
const SearchComponent = () => {
  const [problem, setProblem] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Store selected category
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  const {setZipProSearch}   = useProContext();

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://51.21.129.246:8000/categories/all');
      setCategories(response.data.data.categories); // Assuming the categories are in response.data.data.categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleProblemChange = (e) => {
    const inputValue = e.target.value;
    setProblem(inputValue);

    if (inputValue) {
      const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCategoryClick = (category) => {
    setProblem(category.name);
    setSelectedCategory(category); // Store selected category
    setShowDropdown(false); // Close dropdown on selection
  };

  const handleSearch = async () => {
    if (!selectedCategory || !zipcode) {
      console.error('Please select a category and enter a zipcode');
      return;
    }

    try {
      const response = await axios.post('http://51.21.129.246:8000/service_provider/search/', {
        zipcode,
        category_id: selectedCategory.id,
      });
      
      const serviceProviders = response.data.service_providers;
      
     setZipProSearch(serviceProviders)
     navigate('/search-results');
      if (serviceProviders.length > 0) {
        
      } else {
        console.log('No service providers found for this category and zipcode.');
      }
    } catch (error) {
      console.error('Error searching service providers:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-grow" style={{ width: '65%' }}>
        <input
          type="text"
          value={problem}
          onChange={handleProblemChange}
          placeholder="Search problem"
          className="border p-2 rounded w-full focus:border-primaryColor focus:outline-none"
        />
        {showDropdown && (
          <ul className="absolute z-10 w-full border bg-white rounded shadow-md max-h-48 overflow-y-auto">
            {filteredCategories.map((category) => (
              <li
                key={category.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-grow relative" style={{ width: '35%' }}>
        <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          placeholder="Zipcode"
          className="border p-2 rounded pl-10 w-full focus:border-primaryColor focus:outline-none"
        />
      </div>
      <button
        onClick={handleSearch}
        className="border-2 bg-primaryColor text-white p-2 rounded hover:bg-lightColor1 hover:border-2 hover:border-primaryColor hover:text-primaryColor"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
