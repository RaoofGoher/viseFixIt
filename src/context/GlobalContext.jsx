// GlobalContext.js
import { createContext, useContext, useState } from 'react';

// Create Global Context
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);

  // Add more global states here
  const [globalMessage, setGlobalMessage] = useState('Welcome to the App!');

  // Modal functions
  const openModal = () => {
    console.log("Modal is opening");
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // Any other global actions can be added here
  const updateMessage = (message) => setGlobalMessage(message);

  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        globalMessage,
        updateMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
