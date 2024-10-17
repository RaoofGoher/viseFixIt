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
  const [selectedProCategories, setSelectedProCategories] = useState('');
  const [availabilityResponse, setAvailabilityResponse ] =useState('');
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  // Open and close modal functions
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openReceiptModal = () => {
    setIsReceiptModalOpen(true);
  };

  const closeReceiptModal = () => {
    setIsReceiptModalOpen(false);
  };

  // Fetch subcategories when categoryId changes
  useEffect(() => {
    if (categoryId) {
      const fetchSubcategories = async () => {
        try {
          const response = await axios.get(`https://api.thefixit4u.com/categories/subcategories/${categoryId}/`);
          setSubcategoriesList(response.data.data.subcategories);
          
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

  const resetSelectedServices = () => {
    setSelectedServices(
      subcategoriesList.map(sub => ({
        ...sub,
        quantity: 0,
        total: 0,
      }))
    );
  };

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
        setSelectedProDetails,
        selectedProCategories,
        setSelectedProCategories,
        availabilityResponse, 
        setAvailabilityResponse,
        isReceiptModalOpen,
        setIsReceiptModalOpen,
        openReceiptModal,
        closeReceiptModal,  // Provide open receipt modal function
        selectedServices, 
        setSelectedServices,
        resetSelectedServices
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};
