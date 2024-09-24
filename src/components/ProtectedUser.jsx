import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const ProtectedRoute = ({ children }) => {
    const { token, isAuthenticated } = useGlobalContext();

    // Check if token exists
    if (!token && !isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
