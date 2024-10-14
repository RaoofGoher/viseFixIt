import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const apiUrl = import.meta.env.VITE_API_URL;

const CustomerForm = () => {
    const { loginUser, setCsrfToken } = useGlobalContext();
    const navigate = useNavigate();
    const { showToast } = useToast();
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '', // Add confirm password field
        phone_number: '',
        address: '',
        zip_code: '',
        isCustomer: true,
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match') // Validate that passwords match
            .required('Confirm password is required'),
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        zip_code: Yup.string().required('Zip code is required'),
    });

    const handleSubmit = async (values,{ setFieldError }) => {
        try {
            const response = await axios.post(`${apiUrl}/customer/register/`, values);
            // Adjust this based on your actual API response
            console.log(response.data.reason.error)
            if(response.data.status === 409 && response.data.reason.error === "email already taken try another account"){
                const errorMessages = response.data.reason.error;
               setFieldError('email', "Email already taken");
              showToast('email already exist', 'warning')
             }else if(response.data.status === 409 && response.data.reason.error === "Phone number already exists"){
               
                showToast('phone number already exist', 'warning')
                const errorMessages = response.data.reason.error;
               setFieldError('phone_number', errorMessages);
               
             }else {

            // Log the user in
            const userData = response.data;
            loginUser(userData);
            navigate(`/dashboard/${userData.data.username}`); // Redirect to the dashboard

            const csrfToken = userData.data.csrf_token;
            console.log(csrfToken);
            // Store the CSRF token in the context
            setCsrfToken(csrfToken);
             }
        } catch (error) {
            console.error('There was an error registering the user:', error);
            alert('Registration failed! Please try again.'); // Provide user feedback
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="max-w-lg mx-auto p-4 border rounded shadow-lg bg-white my-6">
                    <h2 className="text-lg font-bold mb-4 text-primaryColor">Customer Registration</h2>

                    {/* Two columns for all fields */}
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <Field
                                type="text"
                                name="first_name"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <Field
                                type="text"
                                name="last_name"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <Field
                                type="tel"
                                name="phone_number"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                        </div>
                       
                    </div>

                    <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Re-enter Password</label>
                            <Field
                                type="password"
                                name="confirm_password"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-sm" />
                        </div>

                        
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Address</label>
                            <Field
                                type="text"
                                name="address"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Zip Code</label>
                            <Field
                                type="text"
                                name="zip_code"
                                className="border rounded p-2 w-full border-primaryColor"
                            />
                            <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    <button type="submit" className="bg-primaryColor text-white rounded p-2 w-full hover:bg-lightColor1 hover:text-black">
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomerForm;
