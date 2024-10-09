import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditProProfile = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null); // State to hold profile data
  const [categoryId, setCategoryId] = useState(''); // State for category ID
  const [subcategories, setSubcategories] = useState([]); // State for subcategories

  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
  }, [proData]);

  // Fetch profile data using id
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://51.20.63.119/service_provider/get/${id}`);
          const newProfile = response.data.data.service_provider;

          if (JSON.stringify(newProfile) !== JSON.stringify(profile)) {
            setProfile(newProfile); // Set profile data to state only if it's different
            setCategoryId(newProfile.category_id); // Set category ID to state
          }
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  // Fetch subcategories based on categoryId
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`https://51.20.63.119/categories/subcategories/${categoryId}/`);
          const fetchedSubcategories = response.data.data.subcategories; // Adjust based on actual response structure
          setSubcategories(fetchedSubcategories);
          console.log('Subcategories:', fetchedSubcategories); // Log subcategories
        } catch (error) {
          console.error('Error fetching subcategories:', error);
        }
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  // Log profile when it changes
  useEffect(() => {
    if (profile) {
      console.log('Profile:', profile);
    }
  }, [profile]);

  const initialValues = {
    username: profile ? profile.username : '',
    email: profile ? profile.email : '',
    services: 
      (profile && profile.sp_profile && profile.sp_profile.services_included && profile.sp_profile.services_included.length > 0) 
        ? profile.sp_profile.services_included 
        : ['', '', '', ''], // Default to empty services if none exist
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('email is required'),
    services: Yup.array()
      .of(Yup.string().required('Service is required'))
      .min(1, 'At least one service is required'),
  });

  const handleSubmit = async (values) => {
    // Map service names to their IDs
    const selectedServiceIds = values.services.map(serviceName => {
      const foundSubcategory = subcategories.find(sub => sub.name === serviceName);
      return foundSubcategory ? foundSubcategory.id : null;
    }).filter(id => id !== null);
  
    const registerData = {
      username: values.username,
      email: values.email,
    };
  
    const profileData = {
      services_included: selectedServiceIds,
    };
  
    // 1. Send PATCH request for registerData
    const registerResponse = await axios.patch(`https://51.20.63.119/service_provider/update/user/${id}/`, registerData);
    console.log('Register Data PATCH request successful:', registerResponse.data);
  
    // 2. Try PATCH request for profileData
    const profileResponse = await axios.patch(`https://51.20.63.119/service_provider/update/profile/${id}/`, profileData);
  
    if (profileResponse.status === 200) {
      // If PATCH request was successful
      console.log('Profile Data PATCH request successful:', profileResponse.data.status);
    } else if (profileResponse.status === 404 && profileResponse.data.reason?.error === "SP Profile not found.") {
      // If PATCH fails due to 404, send POST request for profileData
      const postResponse = await axios.post(`https://51.20.63.119/service_provider/create/profile/`, profileData);
      console.log('Profile Data POST request successful (created new profile):', postResponse.data);
    } else {
      // Handle other errors
      console.error('Error in PATCH request for profileData:', profileResponse.data);
    }
  };
  
  
  
  

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Professional Profile</h1>

      {profile && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <Field
                  type="text"
                  name="username"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="username" component="div" className="text-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="text"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Services</label>
                {values.services.map((service, index) => (
                  <div key={index} className="flex items-center mt-1">
                    <Field
                      as="select"
                      name={`services[${index}]`}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newServices = [...values.services];

                        // Only update if the selected service is not already in the array
                        if (newServices.includes(value)) {
                          alert('This service has already been added. The last entry has been removed.');
                          newServices.pop(); // Remove the last entry if duplicate
                        } else {
                          newServices[index] = value; // Update the selected service
                        }

                        setFieldValue('services', newServices);
                      }}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                        newServices.splice(index, 1); // Remove service
                        setFieldValue('services', newServices);
                      }}
                      className="ml-2 px-2 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <ErrorMessage name="services" component="div" className="text-red-500" />
              </div>

              <button
                type="button"
                onClick={() => {
                  // Check for empty selection before adding
                  const newService = '';
                  if (!values.services.includes(newService)) {
                    setFieldValue('services', [...values.services, newService]); // Add empty service
                  } else {
                    alert('This service has already been added.');
                  }
                }}
                className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Add Service
              </button>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
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
