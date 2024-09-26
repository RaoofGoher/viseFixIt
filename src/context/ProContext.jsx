import React, { createContext, useContext, useState, useEffect } from 'react';

const ProContext = createContext();

export const ProProvider = ({ children }) => {
    const [proData, setProData] = useState(null);
    const [csrfTokenPro, setCsrfTokenPro] = useState('');
    const [isProAuthenticated, setIsProAuthenticated] = useState(false);
    const [zipProSearch, setZipProSearch] = useState([]);

    const logoutPro = () => {
        console.log("Logging out...");
        setProData(null);
        setCsrfTokenPro('');
        setIsProAuthenticated(false);
        localStorage.removeItem('csrfToken');
        localStorage.removeItem('tokenExpiry');
        localStorage.removeItem('proData'); // Also clear proData from local storage
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('csrfToken');
        const tokenExpiry = localStorage.getItem('tokenExpiry');

        if (storedToken && tokenExpiry) {
            const expiryTime = parseInt(tokenExpiry, 10);
            const timeLeft = expiryTime - Date.now();

            if (timeLeft > 0) {
                setCsrfTokenPro(storedToken);
                setIsProAuthenticated(true);

                const storedProData = localStorage.getItem('proData');
                console.log("Stored proData:", storedProData); // Check what is stored

                if (storedProData) {
                    try {
                        const parsedProData = JSON.parse(storedProData);
                        console.log("Parsed proData:", parsedProData); // Log parsed data
                        setProData(parsedProData); // Safely parse proData
                    } catch (error) {
                        console.error('Error parsing proData:', error);
                        setProData(null); // Set null on error
                    }
                } else {
                    setProData(null); // Set to null if no proData in localStorage
                }

                const timerId = setTimeout(() => {
                    console.log("Token expired, logging out...");
                    logoutPro();
                }, timeLeft);

                return () => clearTimeout(timerId);
            } else {
                logoutPro();
            }
        }
    }, []);

    const handleProLogin = (token, proData) => {
        const expiryTime = Date.now() + 10 * 60 * 1000; // Adjusted to 10 minutes
        localStorage.setItem('csrfToken', token);
        localStorage.setItem('tokenExpiry', String(expiryTime));

        if (proData) {
            localStorage.setItem('proData', JSON.stringify(proData)); // Store proData in local storage
            console.log("Storing proData:", proData); // Log what's being stored
        }

        setCsrfTokenPro(token);
        setIsProAuthenticated(true);
        setProData(proData); // Set proData in context
        // Automatically log out after 10 minutes
        setTimeout(() => {
            console.log("Token expired, logging out...");
            logoutPro();
        }, 10 * 60 * 1000);
    };

    return (
        <ProContext.Provider value={{ 
            proData, 
            setProData, 
            csrfTokenPro, 
            setCsrfTokenPro, 
            isProAuthenticated, 
            logoutPro, 
            handleProLogin,
            zipProSearch, 
            setZipProSearch 
        }}>
            {children}
        </ProContext.Provider>
    );
};

export const useProContext = () => {
    return useContext(ProContext);
};
