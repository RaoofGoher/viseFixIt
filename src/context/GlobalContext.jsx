import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    // Initialize states directly from localStorage
    const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('isAuthenticated') === 'true');
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser && storedUser !== 'undefined' ? JSON.parse(storedUser) : null;
    });
    const [csrfToken, setCsrfToken] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [isServiceModalOpen, setServiceModalOpen] = useState(false);
    const [isCustomer, setIsCustomer] = useState(true);

    const logoutUser = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiry');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user'); // Remove stored user data as well
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

    const loginUser = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
        localStorage.setItem('tokenExpiry', expiryTime);
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
                isCustomer,
                setIsCustomer
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
