import React, { createContext, useContext, useState, useEffect } from 'react';

const ProContext = createContext();

export const ProProvider = ({ children }) => {
    // Initialize directly from localStorage to avoid the race condition
    const [proData, setProData] = useState(() => {
        const storedProData = localStorage.getItem('proData');
        return storedProData ? JSON.parse(storedProData) : null;
    });
    const [csrfTokenPro, setCsrfTokenPro] = useState(localStorage.getItem('csrfToken') || '');
    const [isProAuthenticated, setIsProAuthenticated] = useState(() => localStorage.getItem('isProAuthenticated') === 'true');
    const [zipProSearch, setZipProSearch] = useState([]);

    const logoutPro = () => {
        console.log("Logging out...");
        setProData(null);
        setCsrfTokenPro('');
        setIsProAuthenticated(false);
        localStorage.removeItem('csrfToken');
        localStorage.removeItem('tokenExpiry');
        localStorage.removeItem('proData');
        localStorage.removeItem('isProAuthenticated');
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

                const timerId = setTimeout(logoutPro, timeLeft);
                return () => clearTimeout(timerId);
            } else {
                logoutPro();
            }
        } else {
            logoutPro();
        }
    }, []);

    const handleProLogin = (token, proData) => {
        const expiryTime = Date.now() + 10 * 60 * 1000; // Adjusted to 10 minutes
        localStorage.setItem('csrfToken', token);
        localStorage.setItem('tokenExpiry', String(expiryTime));

        if (proData) {
            localStorage.setItem('proData', JSON.stringify(proData));
        }

        setCsrfTokenPro(token);
        setIsProAuthenticated(true);
        setProData(proData);

        setTimeout(logoutPro, 10 * 60 * 1000); // Auto-logout after 10 minutes
        localStorage.setItem('isProAuthenticated', 'true');
    };

    return (
        <ProContext.Provider
            value={{
                proData,
                setProData,
                csrfTokenPro,
                setCsrfTokenPro,
                isProAuthenticated,
                logoutPro,
                handleProLogin,
                zipProSearch,
                setZipProSearch,
            }}
        >
            {children}
        </ProContext.Provider>
    );
};

export const useProContext = () => useContext(ProContext);
