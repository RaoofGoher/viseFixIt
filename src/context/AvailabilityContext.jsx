// AvailabilityContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {

  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState('');

  // Open and close modal functions
  const openModal = () => {
    console.log("Opening modal...");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setIsModalOpen(false);
  };

  // Fetch subcategories when categoryId changes
  useEffect(() => {
    if (categoryId) {
      console.log(`CategoryId has changed to: ${categoryId}. Fetching subcategories...`);
      const fetchSubcategories = async () => {
        try {
          console.log("Making API request...");
          const response = await axios.get(`https://api.thefixit4u.com/categories/subcategories/${categoryId}/`);
          setSubcategoriesList(response.data.data.subcategories);
          console.log("Subcategories fetched successfully:", response.data.data.subcategories);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      };

      fetchSubcategories();
    } else {
      console.warn("No categoryId provided!");
    }
  }, [categoryId]); // useEffect runs when categoryId changes

  return (
    <AvailabilityContext.Provider
      value={{
        categoryId,
        setCategoryId,
        subcategoriesList,
        isModalOpen, // Provide modal state
        openModal,   // Provide open modal function
        closeModal,  // Provide close modal function
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};
