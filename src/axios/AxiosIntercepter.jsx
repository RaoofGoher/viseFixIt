import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext'; // Access user token from GlobalContext
import { useProContext } from '../context/ProContext'; // Access pro token from ProContext

const AxiosInterceptor = ({ children }) => {
  const { token } = useGlobalContext(); // User token from GlobalContext
  const { csrfTokenPro } = useProContext(); // Pro token (CSRF token) from ProContext

  useEffect(() => {
    // Add a request interceptor
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Check if the user is authenticated and has a token
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        // If the pro is authenticated, add the pro CSRF token
        if (csrfTokenPro) {
          config.headers['Authorization'] = `Bearer ${csrfTokenPro}`;
        }

        return config;
      },
      (error) => {
        // Handle the error
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor on component unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [token, csrfTokenPro]);

  return children; // Render the children components
};

export default AxiosInterceptor;
