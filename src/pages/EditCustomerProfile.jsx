import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import CustomerImageUpdate from '../components/CustomerImageUpdate';


const apiUrl = import.meta.env.VITE_API_URL;

const EditCustomerProfile = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null);
  const { showToast } = useToast();
  useEffect(() => {
    if (user && user.data.id) {
      setId(user.data.id);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`${apiUrl}/customer/get/${id}/`);
          setProfile(response.data.data.customer);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    zip_code: Yup.string().required('Zip code is required'),
  });

  const handleSubmit = async (values) => {
    try {
      await axios.patch(`${apiUrl}/customer/update/${id}/`, values);
      showToast('Success! Task completed.', 'success')
      navigate(`/myprofilecustomer/${profile.username}`);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!profile) return <div className="text-center">Loading...</div>;

  const initialValues = {
    username: profile.username || '',
    email: profile.email || '',
    phone_number: profile.phone_number || '',
    address: profile.address || '',
    zip_code: profile.zip_code || '',
    profile_picture_url: profile.profile_picture_url || '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto my-6">
          {/* Image Field */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <Field
                  component={CustomerImageUpdate}
                  
                />
          </div>

          {/* Username Field */}
          <div className="space-y-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Field
              type="text"
              name="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Phone Number Field */}
          <div className="space-y-1">
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Field
              type="text"
              name="phone_number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Address Field */}
          <div className="space-y-1">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <Field
              type="text"
              name="address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Zip Code Field */}
          <div className="space-y-1">
            <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <Field
              type="text"
              name="zip_code"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditCustomerProfile;
