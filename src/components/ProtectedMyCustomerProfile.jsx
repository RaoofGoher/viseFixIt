import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const ProtecetdMyProProfile = ({ children }) => {
    const { isAuthenticated } = useGlobalContext();

    // Check if token exists
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtecetdMyProProfile;
