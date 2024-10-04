import React from 'react';
import { useProContext } from '../context/ProContext';
import { Navigate } from 'react-router-dom';

const ProtecetdMyProProfile = ({ children }) => {
    const { isProAuthenticated } = useProContext();
  
    if (!isProAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render children if authenticated
}

export default ProtecetdMyProProfile;
