// GlobalContext.js
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    // State for Registration Modal
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    
    // State for Simple Modal
    const [isServiceModalOpen, setServiceModalOpen] = useState(false);

    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // Store user information
    const [csrfToken, setCsrfToken] = useState('');

    // Modal functions
    const openRegistrationModal = () => setRegistrationModalOpen(true);
    const closeRegistrationModal = () => setRegistrationModalOpen(false);
    
    const openServiceModal = () => setServiceModalOpen(true);
    const closeServiceModal = () => setServiceModalOpen(false);

    // Authentication functions
    const loginUser = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                isRegistrationModalOpen,
                openRegistrationModal,
                closeRegistrationModal,
                isServiceModalOpen,
                openServiceModal,
                closeServiceModal,
                isAuthenticated,
                user,
                loginUser,
                logoutUser,
                csrfToken,
                setCsrfToken
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
