// GlobalContext.js
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // State for Registration Modal
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
  
  // State for Simple Modal
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  // Modal functions
  const openRegistrationModal = () => setRegistrationModalOpen(true);
  const closeRegistrationModal = () => setRegistrationModalOpen(false);
  
  const openServiceModal = () => setServiceModalOpen(true);
  const closeServiceModal = () => setServiceModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        isRegistrationModalOpen,
        openRegistrationModal,
        closeRegistrationModal,
        isServiceModalOpen,
        openServiceModal,
        closeServiceModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
