import React, { createContext, useContext, useState, useEffect } from 'react';

const ProContext = createContext();

export const ProProvider = ({ children }) => {
    const [proData, setProData] = useState(null);
    const [csrfTokenPro, setCsrfTokenPro] = useState('');
    const [isProAuthenticated, setIsProAuthenticated] = useState(false);

    const logoutPro = () => {
        console.log("Logging out..."); // Debugging logout
        setProData(null);
        setCsrfTokenPro('');
        setIsProAuthenticated(false);
        localStorage.removeItem('csrfToken'); // Remove token from local storage
        localStorage.removeItem('tokenExpiry'); // Remove expiry from local storage
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('csrfToken');
        const tokenExpiry = localStorage.getItem('tokenExpiry');

        console.log("Stored token:", storedToken); // Check stored token
        console.log("Token expiry:", tokenExpiry); // Check stored expiry

        if (storedToken && tokenExpiry) {
            const expiryTime = parseInt(tokenExpiry, 10);
            const timeLeft = expiryTime - Date.now();

            console.log("Time left before logout:", timeLeft); // Debugging time left

            if (timeLeft > 0) {
                setCsrfTokenPro(storedToken);
                setIsProAuthenticated(true);

                // Set an interval to check token expiry every second
                const intervalId = setInterval(() => {
                    const currentTime = Date.now();
                    const updatedTimeLeft = expiryTime - currentTime; // Update time left on each interval

                    console.log("Updated time left before logout:", updatedTimeLeft); // Debugging

                    if (updatedTimeLeft <= 0) {
                        console.log("Token expired, logging out..."); // Additional logging
                        logoutPro(); // Log out if the token has expired
                    }
                }, 1000); // Check every second

                return () => clearInterval(intervalId);
            } else {
                logoutPro(); // Log out if token has already expired
            }
        }
    }, []);

    const handleProLogin = (token) => {
        console.log("Handling Pro login with token:", token); // Debugging login

        const expiryTime = Date.now() + 2 * 60 * 1000; // Set expiry time to 2 minutes from now
        localStorage.setItem('csrfToken', token); // Store the token
        localStorage.setItem('tokenExpiry', String(expiryTime)); // Store the expiry time as a string

        // Check localStorage immediately after storing
        console.log("Stored token in localStorage:", localStorage.getItem('csrfToken'));
        console.log("Stored tokenExpiry in localStorage:", localStorage.getItem('tokenExpiry'));

        setCsrfTokenPro(token);
        setIsProAuthenticated(true);

        // Automatically log out after 2 minutes
        setTimeout(() => {
            console.log("Token expired, logging out after 2 minutes..."); // Additional logging
            logoutPro(); // Log out after 2 minutes
        }, 2 * 60 * 1000); // 2 minutes in milliseconds
    };

    return (
        <ProContext.Provider value={{ 
            proData, 
            setProData, 
            csrfTokenPro, 
            setCsrfTokenPro, 
            isProAuthenticated, 
            logoutPro, 
            handleProLogin 
        }}>
            {children}
        </ProContext.Provider>
    );
};

export const useProContext = () => {
    return useContext(ProContext);
};
