import React from 'react';
import { Navigate } from 'react-router-dom';
import { useProContext } from '../context/ProContext';
import { useGlobalContext } from '../context/GlobalContext';

const ProtectedProfileRoute = ({ children }) => {
    const { isProAuthenticated } = useProContext(); // Check if the pro is authenticated
    const { isAuthenticated } = useGlobalContext(); // Check if the user is authenticated

    // If neither is authenticated, redirect to login page
    if (!isProAuthenticated && !isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render the children if either is authenticated
};

export default ProtectedProfileRoute;
