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
    services: profile ? profile.sp_profile.services_included : ['', '', '', ''], // Create initial services state for four dropdowns
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    services: Yup.array()
      .of(Yup.string().required('Service is required'))
      .min(1, 'At least one service is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // Here, you can send the updated profile data to your backend
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
                  as="select"
                  name="username"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="professional626">professional626</option>
                  {/* Add more usernames here if necessary */}
                </Field>
                <ErrorMessage name="username" component="div" className="text-red-500" />
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
                        newServices[index] = value;
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
                  setFieldValue('services', [...values.services, '']); // Add empty service
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
