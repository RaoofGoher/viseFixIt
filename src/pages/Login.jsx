import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo2 from '../assets/logo2.png';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
import { useNavigate } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';
import { useToast } from '../context/ToastContext';
import { useMediaQuery } from 'react-responsive';
const apiUrl = import.meta.env.VITE_API_URL;

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const LoginComponent = () => {
    const { loginUser, setCsrfToken, openRegistrationModal, isRegistrationModalOpen,logoutUser, } = useGlobalContext(); // Access global context
    const { handleProLogin, profileSearchLocation,setProfileSearchLocation } = useProContext(); // Access pro context
    const navigate = useNavigate(); // For navigation
    const { showToast } = useToast();

    const isMedium = useMediaQuery({
        query: '(max-width: 925px)',
      });
    const isMedium2 = useMediaQuery({
        query: '(max-width: 420px)',
      });


    const handleLogin = async (values) => {
        try {
            const response = await axios.post(`${apiUrl}/service_provider/login/`, values);
            const userData = response.data; // Assuming this includes the user data (like username)
              console.log("location",profileSearchLocation)
            // Check if the user is a pro or customer
            const isSearchResults = /^\/search-results(\/\d+)?$/.test(profileSearchLocation);
            if (isSearchResults) {
                // Always navigate to search-profile
                if (userData?.data?.isCustomer === false) { // Assuming isCustomer = false indicates a pro
                   
                   

                    const csrfToken = userData.data.csrf_token;

                    // Store the CSRF token in the context and set pro data
                    setCsrfToken(csrfToken);
                    handleProLogin(csrfToken, userData.data); // Pass the pro data to handleProLogin
                } else {
                   
                    loginUser(userData); // Store user data in global context
                }

                // Redirect to search-profile route
                navigate("/search-results");
            
            } else {
                // For any other route
                if (userData?.data?.isCustomer === false) { // Assuming isCustomer = false indicates a pro
                    const csrfToken = userData.data.csrf_token;

                    // Store the CSRF token in the context and set pro data
                    setCsrfToken(csrfToken);
                    handleProLogin(csrfToken, userData.data); // Pass the pro data to handleProLogin

                    // Redirect to pro dashboard
                    navigate(`/dashboard/prodashboard/${userData?.data?.username}`);
                } else {
                    
                    loginUser(userData); // Store user data in global context
                    navigate(`/dashboard/${userData.data.username}`); // Redirect to customer dashboard
                }
            }
            showToast('Success! you are loged in.', 'success')
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed! Please check your credentials and try again.');
            logoutUser()
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-100 mb-2`}>
            <div className={`max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex ${isMedium ? "m-8":""}  ${isMedium ? "flex-col" :""} items-center justify-center`}>
                {/* Image Section */}
                <div className="w-1/2 mt-4 md:ml-4 ">
                    <img
                        src={logo2}
                        alt="Login visual"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Form Section */}
                <div className={`${isMedium2 ? "" : "w-1/2"} ${isMedium ? "py-4" : "p-8"}`}>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleLogin} // Call the handleLogin function
                    >
                        {({ errors, touched }) => (
                            <Form>
                                {/* Email Field */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className={`w-full p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-primaryColor'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Password Field */}
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className={`w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-primaryColor'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryColor transition duration-300"
                                >
                                    Log In
                                </button>
                                {
                                
                                profileSearchLocation ==="/search-results" ? 
                                <h1
                                    className="cursor-pointer hover:text-primaryColor border-b-2 border-primaryColor py-4"
                                    onClick={openRegistrationModal}
                                >
                                    Or CLick here to Create a new Profile
                                </h1>
                                : ""
                                }
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {isRegistrationModalOpen && <RegistrationModal />}
        </div>
    );
};

export default LoginComponent;
