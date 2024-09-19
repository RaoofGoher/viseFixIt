import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchComponent = () => {
  const [problem, setProblem] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { problem, zipcode });
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-grow" style={{ width: '65%' }}>
        <input
          type="text"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Search problem"
          className="border p-2 rounded w-full focus:border-primaryColor focus:outline-none"
        />
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
        className="bg-primaryColor text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
