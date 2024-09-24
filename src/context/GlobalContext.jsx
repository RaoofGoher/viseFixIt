import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [csrfToken, setCsrfToken] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token')); // Initialize token from localStorage

    // Logout function to clear token and user info
    const logoutUser = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token'); // Remove token from localStorage
        localStorage.removeItem('tokenExpiry'); // Remove token expiry time
        setIsAuthenticated(false);
    };

    // Handle token expiration
    useEffect(() => {
        const tokenExpiryTime = localStorage.getItem('tokenExpiry');

        const checkTokenExpiry = () => {
            const currentTime = new Date().getTime();
            if (tokenExpiryTime && currentTime > tokenExpiryTime) {
                logoutUser();  // Logout if token is expired
            }
        };

        // Set interval to check token expiry every minute
        const intervalId = setInterval(checkTokenExpiry, 60000); // 60000ms = 1 minute

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    // Handle tab close event
    useEffect(() => {
        const handleTabClose = () => {
            localStorage.removeItem('token'); // Remove token on tab close
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose); // Cleanup on component unmount
        };
    }, []);

    // Login function to set user and token
    const loginUser = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('token', authToken); // Save token in localStorage

        // Set token expiry to 1 hour from now
        const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour in milliseconds
        localStorage.setItem('tokenExpiry', expiryTime);
        setIsAuthenticated(true);
    };

    return (
        <GlobalContext.Provider
            value={{
                isAuthenticated,
                user,
                loginUser,
                logoutUser,
                token,
                csrfToken,
                setCsrfToken
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
