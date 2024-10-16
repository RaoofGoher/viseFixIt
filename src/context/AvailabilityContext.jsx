// AvailabilityContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {

  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [selectedProId, setSelectedProId] = useState('');
  const [selectedProDetails, setSelectedProDetails] = useState('');

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
      const fetchSubcategories = async () => {
        try {
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
  
  
  // selected pro details
  useEffect(() => {
    const fetchSelectedProDetails = async () => {
      try {
        const response = await axios.get(`https://api.thefixit4u.com/service_provider/get/${selectedProId}`);
        setSelectedProDetails(response.data);
      } catch (error) {
        console.error("Error fetching the service provider details:", error);
        // Handle error appropriately (e.g., show an error message)
      }
    };

    if (selectedProId) {
      fetchSelectedProDetails();
    }
  }, [selectedProId]);
  return (
    <AvailabilityContext.Provider
      value={{
        categoryId,
        setCategoryId,
        subcategoriesList,
        isModalOpen, // Provide modal state
        openModal,   // Provide open modal function
        closeModal,  // Provide close modal function
        selectedProId,
        setSelectedProId,
        selectedProDetails,
        setSelectedProDetails
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};
