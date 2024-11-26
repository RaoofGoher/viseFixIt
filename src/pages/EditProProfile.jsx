import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import ProImageUpdate from "../components/ProImageUpdate"
import * as Yup from 'yup';
import { BiVolumeLow } from 'react-icons/bi';
const apiUrl = import.meta.env.VITE_API_URL;

const EditProProfile = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
  }, [proData]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`${apiUrl}/service_provider/get/${id}`);
          const newProfile = response.data.data.service_provider;

          if (JSON.stringify(newProfile) !== JSON.stringify(profile)) {
            setProfile(newProfile);
            setCategoryId(newProfile.category_id);
          }
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`${apiUrl}/categories/subcategories/${categoryId}/`);
          const fetchedSubcategories = response.data.data.subcategories;
          setSubcategories(fetchedSubcategories);
        } catch (error) {
          console.error('Error fetching subcategories:', error);
        }
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  const initialValues = {
    username: profile ? profile.username : '',
    email: profile ? profile.email : '',
    phone_number: profile ? profile.phone_number : "",
    baseprice: profile ? profile.sp_profile.base_price : '',
    services: (profile && profile.sp_profile && profile.sp_profile.services_included && profile.sp_profile.services_included.length > 0)
      ? profile.sp_profile.services_included
      : ['', '', '', ''],
    company_founded_date: profile ? profile.sp_profile.company_founded_date : '',
    introduction: profile ? profile.sp_profile.introduction : '',
    payment: profile ? profile.sp_profile.payment_methods : '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    baseprice: Yup.string().required('Base price is required'),
    introduction: Yup.string().required('Introduction is required'),
    payment: Yup.string().required('Payment is required'),
    services: Yup.array()
      .of(Yup.string().required('Service is required'))
      .min(1, 'At least one service is required'),
  });

  const handleSubmit = async (values, { setFieldError }) => {
    // Handle form submission logic (unchanged)
  };

  return (
    <div className="flex flex-col justify-center items-center py-8 sm:px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#93bcbc' }}>Edit Professional Profile</h1>

      {profile && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gradient-to-r from-[#93bcbc] to-[#F58634] p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              {/* Image Field */}
              <div className="space-y-1 col-span-full">
                <label className="block text-sm font-medium text-white">Image</label>
                <Field component={ProImageUpdate} />
              </div>

              {/* Username Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Username</label>
                <Field
                  type="text"
                  name="username"
                  className="mt-1 text-sm p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Email</label>
                <Field
                  type="text"
                  name="email"
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Phone Number</label>
                <Field
                  type="text"
                  name="phone_number"
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Company Founded Date Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Company Founded Date</label>
                <Field
                  name="company_founded_date"
                  type="date"
                  value={values.company_founded_date}
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="company_founded_date" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Base Price Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Base Price</label>
                <Field
                  type="text"
                  name="baseprice"
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="baseprice" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Introduction Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Introduction</label>
                <Field
                  type="text"
                  name="introduction"
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="introduction" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Payment Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">Payment</label>
                <Field
                  type="text"
                  name="payment"
                  className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="payment" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Services Field */}
              <div className="space-y-1 col-span-full">
                <label className="block text-sm font-medium text-white">Services</label>
                {values.services.map((service, index) => (
                  <div key={index} className="flex items-center mt-1 space-x-2">
                    <Field
                      as="select"
                      name={`services[${index}]`}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newServices = [...values.services];

                        if (newServices.includes(value)) {
                          showToast('Warning! Subcategory already exists.', 'warning');
                          newServices.pop();
                        } else {
                          newServices[index] = value;
                        }
                        setFieldValue('services', newServices);
                      }}
                      className="block w-full text-sm p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">Select a service</option>
                      {subcategories.map((sub) => (
                        <option key={sub.id} value={sub.name}>
                          {sub.name}
                        </option>
                      ))}
                    </Field>

                    <button
                      type="button"
                      onClick={() => {
                        const newServices = [...values.services];
                        newServices.splice(index, 1);
                        setFieldValue('services', newServices);
                      }}
                      className="px-2 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <ErrorMessage name="services" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Add Service Button */}
              <button
                type="button"
                onClick={() => {
                  const newService = '';
                  if (!values.services.includes(newService)) {
                    setFieldValue('services', [...values.services, newService]);
                  } else {
                    showToast('Warning! Subcategory already exists.', 'warning');
                  }
                }}
                className="w-full px-4 py-2 text-white" style={{ backgroundColor: '#F58634' }} 
              >
                Add Service
              </button>

              {/* Save Changes Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white" style={{ backgroundColor: '#93bcbc' }} 
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditProProfile;