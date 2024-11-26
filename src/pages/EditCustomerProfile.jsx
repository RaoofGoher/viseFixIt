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

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const response = await axios.patch(`${apiUrl}/customer/update/${id}/`, values);
      if (response.data.status === 400) {
        const error = response.data.reason.error;
        if (error === "Email is already taken, try another.") {
          setFieldError('email', "The email is already set. Try another one.");
          showToast('The email is already set. Try another one.', 'warning');
        } else if (error === "Phone number is already taken, try another.") {
          setFieldError('phone_number', "Phone number already exists. Try another one.");
          showToast('Phone number already exists. Try another one.', 'warning');
        }
      } else {
        showToast('Success! Profile updated successfully.', 'success');
        navigate(`/myprofilecustomer/${profile.username}`);
      }
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
        <Form className="max-w-4xl mx-auto p-6 bg-primaryColor rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Customer Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Picture */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <Field component={CustomerImageUpdate}  />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <Field
                type="text"
                name="username"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="text"
                name="phone_number"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Field
                type="text"
                name="address"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <Field
                type="text"
                name="zip_code"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-secondaryColor text-white py-2 px-4 rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:ring-offset-2"
            >
              Update Profile
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditCustomerProfile;
