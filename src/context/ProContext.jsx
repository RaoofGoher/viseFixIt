// src/context/ProContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProContext = createContext();

export const ProProvider = ({ children }) => {
    const [proData, setProData] = useState(null);
    const [csrfToken, setCsrfToken] = useState('');
    
    return (
        <ProContext.Provider value={{ proData, setProData, csrfToken, setCsrfToken }}>
            {children}
        </ProContext.Provider>
    );
};

export const useProContext = () => {
    return useContext(ProContext);
};
