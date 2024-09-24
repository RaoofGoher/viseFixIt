import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const ServiceProviderForm = () => {
    const { loginUser, setCsrfToken } = useGlobalContext();
    const navigate = useNavigate();

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        address: '',
        zip_code: '',
        isServiceProvider: true, // Set to true by default
        category: '', // Selected category
        subcategory: '', // Selected subcategory
        number_of_people: '', // Number of people
        status: 'pending', // Default status
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        zip_code: Yup.string().required('Zip code is required'),
        category: Yup.string().required('Category is required'),
        subcategory: Yup.string().required('Subcategory is required'),
        number_of_people: Yup.number().required('Number of people is required').positive().integer(),
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`${apiUrl}/service-provider/register/`, values);
            console.log(response.data); // Handle successful response

            const userData = response.data; // Adjust this based on your actual API response

            // Log the user in
            loginUser(userData);
            navigate(`/dashboard/${userData.data.username}`); // Redirect to the dashboard

            const csrfToken = userData.data.csrf_token;
            console.log(csrfToken);
            // Store the CSRF token in the context
            setCsrfToken(csrfToken);
        } catch (error) {
            console.error('There was an error registering the user:', error);
            alert('Registration failed! Please try again.'); // Provide user feedback
        }
    };

    // Sample categories and subcategories
    const categories = [
        { value: '', label: 'Select Category' },
        { value: 'cleaning', label: 'Cleaning' },
        { value: 'roofing', label: 'Roofing' },
        { value: 'interior_design', label: 'Interior Design' },
    ];

    const subcategories = {
        cleaning: [
            { value: '', label: 'Select Subcategory' },
            { value: 'house_cleaning', label: 'House Cleaning' },
            { value: 'office_cleaning', label: 'Office Cleaning' },
            { value: 'carpet_cleaning', label: 'Carpet Cleaning' },
        ],
        roofing: [
            { value: '', label: 'Select Subcategory' },
            { value: 'roof_repair', label: 'Roof Repair' },
            { value: 'roof_installation', label: 'Roof Installation' },
        ],
        interior_design: [
            { value: '', label: 'Select Subcategory' },
            { value: 'space_planning', label: 'Space Planning' },
            { value: 'color_consultation', label: 'Color Consultation' },
        ],
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange }) => (
                <Form className="max-w-md mx-auto p-4 border rounded shadow-lg bg-white my-6">
                    <h2 className="text-lg font-bold mb-4 text-primaryColor bg-lightColor1 py-6 px-2">Pro Registration</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Field
                            type="text"
                            name="first_name"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Field
                            type="text"
                            name="last_name"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Field
                            type="email"
                            name="email"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <Field
                            type="password"
                            name="password"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Field
                            type="tel"
                            name="phone_number"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Field
                            type="text"
                            name="address"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Zip Code</label>
                        <Field
                            type="text"
                            name="zip_code"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <Field as="select" name="category" className="border rounded p-2 w-full border-primaryColor" onChange={handleChange}>
                            {categories.map((cat) => (
                                <option key={cat.value} value={cat.value}>
                                    {cat.label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Subcategory</label>
                        <Field as="select" name="subcategory" className="border rounded p-2 w-full border-primaryColor">
                            {(subcategories[values.category] || []).map((subcat) => (
                                <option key={subcat.value} value={subcat.value}>
                                    {subcat.label}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="subcategory" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Number of People</label>
                        <Field
                            type="number"
                            name="number_of_people"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="number_of_people" component="div" className="text-red-500 text-sm" />
                    </div>

                    <button type="submit" className="bg-primaryColor text-white rounded p-2 w-full hover:bg-lightColor1 hover:text-black">
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ServiceProviderForm;
