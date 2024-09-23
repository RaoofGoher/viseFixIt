import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import img from '../assets/mainImg.png';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

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
    const { loginUser } = useGlobalContext(); // Access global context
    const navigate = useNavigate(); // For navigation

    const handleLogin = async (values) => {
        try {
            const response = await axios.post(`${apiUrl}/service_provider/login/`, values);
            const userData = response.data; // Assuming this includes the user data (like username)
            loginUser(userData); // Store user data in global context
            navigate(`/dashboard/${userData.data.username}`); // Redirect to dashboard
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed! Please check your credentials and try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-2">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
                {/* Image Section */}
                <div className="w-1/2">
                    <img
                        src={img}
                        alt="Login visual"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Form Section */}
                <div className="w-1/2 p-8">
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
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
