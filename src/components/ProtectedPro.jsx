import { Navigate } from 'react-router-dom';
import { useProContext } from '../context/ProContext'; // Adjust the import path as needed

const ProtectedPro = ({ children }) => {
    const { isProAuthenticated } = useProContext();

    // Check if the user is authenticated as a pro user
    if (!isProAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render the children if authenticated
};

export default ProtectedPro;
