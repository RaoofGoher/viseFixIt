import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useProContext } from '../context/ProContext';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const ServiceProviderForm = () => {
    const { handleProLogin } = useProContext();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        address: '',
        zip_code: '',
        isServiceProvider: true,
        category: '',
        subcategory: '',
        number_of_people: '',
        status: 'pending',
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        phone_number: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        zip_code: Yup.string().required('Zip code is required'),
        category: Yup.string().required('Category is required'),
        subcategory: Yup.string().required('Subcategory is required'),
        number_of_people: Yup.number().required('Number of people is required').positive().integer(),
    });

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${apiUrl}/categories/all`);
            setCategories(response?.data?.data?.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
            alert('Failed to load categories. Please try again.');
        }
    };

    const fetchSubcategories = async (categoryId) => {
        try {
            const response = await axios.get(`${apiUrl}/categories/subcategories/${categoryId}`);
            setSubcategories(response.data.data.subcategories);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
            alert('Failed to load subcategories. Please try again.');
        }
    };

    const handleCategoryChange = (event, setFieldValue) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setFieldValue('category', category);
        setFieldValue('subcategory', '');
        if (category) {
            fetchSubcategories(category);
        } else {
            setSubcategories([]);
        }
    };

    const handleSubmit = async (values) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${apiUrl}/service_provider/register/`, values);
            const proData = response.data.data;
            const csrfToken = proData.csrf_token;
            handleProLogin(csrfToken, proData);
            navigate(`/dashboard/prodashboard/${proData?.username}`);
        } catch (error) {
            if (error.response) {
                console.error('Error details:', error.response.data);
                alert(error.response.data.message || 'Registration failed! Please try again.');
            } else {
                console.error('There was an error registering the user:', error);
                alert('Registration failed! Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="max-w-md mx-auto p-4 border rounded shadow-lg bg-white my-6">
                    <h2 className="text-lg font-bold mb-4 text-primaryColor bg-lightColor1 py-6 px-2">Pro Registration</h2>

                    {/* First Name and Last Name in two columns */}
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

                    {/* Email and Password in two columns */}
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

                    {/* Confirm Password and Phone Number in two columns */}
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

                    {/* Address and Zip Code in two columns */}
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

                    {/* Category and Subcategory in two columns */}
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <Field as="select" name="category" className="border rounded p-2 w-full border-primaryColor" onChange={(e) => handleCategoryChange(e, setFieldValue)}>
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Subcategory</label>
                            <Field as="select" name="subcategory" className="border rounded p-2 w-full border-primaryColor">
                                <option value="">Select Subcategory</option>
                                {subcategories.map((sub) => (
                                    <option key={sub.id} value={sub.id}>
                                        {sub.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="subcategory" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    {/* Number of People in one column */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Number of People</label>
                        <Field
                            type="number"
                            name="number_of_people"
                            className="border rounded p-2 w-full border-primaryColor"
                        />
                        <ErrorMessage name="number_of_people" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`bg-primaryColor text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ServiceProviderForm;
