import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [csrfToken, setCsrfToken] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [isServiceModalOpen, setServiceModalOpen] = useState(false);

    const logoutUser = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiry');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const tokenExpiryTime = localStorage.getItem('tokenExpiry');

        if (tokenExpiryTime) {
            const expiryTimeout = parseInt(tokenExpiryTime, 10) - new Date().getTime();
            if (expiryTimeout > 0) {
                const timerId = setTimeout(logoutUser, expiryTimeout);
                return () => clearTimeout(timerId);
            } else {
                logoutUser();
            }
        }
    }, [token]); // Trigger effect when token changes

    useEffect(() => {
        const handleTabClose = () => {
            localStorage.removeItem('token');
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, []);

    const loginUser = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('token', authToken);

        const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
        localStorage.setItem('tokenExpiry', expiryTime);
        setIsAuthenticated(true);
    };

    const openRegistrationModal = () => setRegistrationModalOpen(true);
    const closeRegistrationModal = () => setRegistrationModalOpen(false);
    
    const openServiceModal = () => setServiceModalOpen(true);
    const closeServiceModal = () => setServiceModalOpen(false);

    return (
        <GlobalContext.Provider
            value={{
                isAuthenticated,
                user,
                loginUser,
                logoutUser,
                token,
                csrfToken,
                setCsrfToken,
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
