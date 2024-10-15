// AvailabilityContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {
  const [availability, setAvailability] = useState({
    categoryId: '',
    subcategories: [],
  });
  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch subcategories by categoryId
  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(`/api/categories/${categoryId}/subcategories`);
      setSubcategoriesList(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const addSubcategory = (subcategory) => {
    setAvailability((prev) => ({
      ...prev,
      subcategories: [...prev.subcategories, subcategory],
    }));
  };

  const removeSubcategory = (index) => {
    setAvailability((prev) => ({
      ...prev,
      subcategories: prev.subcategories.filter((_, i) => i !== index),
    }));
  };

  // Submit availability to the backend
  const submitAvailability = async () => {
    try {
      await axios.post('/api/availability', availability);
      alert('Availability submitted successfully!');
      closeModal(); // Close modal after submission
    } catch (error) {
      console.error("Error submitting availability:", error);
    }
  };

  return (
    <AvailabilityContext.Provider
      value={{
        availability,
        setAvailability,
        fetchSubcategories,
        addSubcategory,
        removeSubcategory,
        subcategoriesList,
        submitAvailability,
        isModalOpen, // Provide modal state
        openModal,   // Provide open modal function
        closeModal,  // Provide close modal function
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};
