// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useGlobalContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children; 
};

export default ProtectedRoute;
