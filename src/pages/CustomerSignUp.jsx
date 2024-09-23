import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL;


const CustomerForm = () => {
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
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
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        zip_code: Yup.string().required('Zip code is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`${apiUrl}/customer/register/`, values);
            console.log(response.data); // Handle successful response
            alert('Registration successful!'); // Provide user feedback
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
                <Form className="max-w-md mx-auto p-4 border rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Customer Registration</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Field
                            type="text"
                            name="first_name"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Field
                            type="text"
                            name="last_name"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Field
                            type="email"
                            name="email"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <Field
                            type="password"
                            name="password"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Field
                            type="tel"
                            name="phone_number"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Field
                            type="text"
                            name="address"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Zip Code</label>
                        <Field
                            type="text"
                            name="zip_code"
                            className="border rounded p-2 w-full"
                        />
                        <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomerForm;
