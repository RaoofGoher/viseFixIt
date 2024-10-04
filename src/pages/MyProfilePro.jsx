import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation

const MyProfilePro = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null); // State to hold profile data
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  // Set id when proData changes
  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
  }, [proData]);

  // Fetch data using id
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://51.20.63.119/service_provider/get/${id}`);
          setProfile(response.data.data.service_provider); // Set profile data to state
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData(); 
  }, [id]);

  // Form validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone_number: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    zip_code: Yup.string().required('Required'),
    company_name: Yup.string().nullable(),
    category: Yup.string().required('Required'),
    subcategory: Yup.string().required('Required'),
    number_of_people: Yup.number().required('Required'),
    status: Yup.string().required('Required'),
    average_rating: Yup.number().min(0).max(5).required('Required'),
    base_price: Yup.number().required('Required'),
    introduction: Yup.string().required('Required'),
    company_founded_date: Yup.date().required('Required'),
    payment_methods: Yup.string().required('Required'),
  });

  // // Submit updated data
  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.patch(`https://51.20.63.119/service_provider/update/user/${id}/`, values); // Use a dummy API for the request
  //     console.log("Updated Profile Response:", response.data); // Log the response from the update API
  //     setIsEditing(false); // Exit edit mode after successful update
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error updating profile:', error);
  //   }
  // };

  const handleSubmit = async (values) => {
    const updatedData = {
      email: values.email,         // Assuming values comes from your form
      phone_number: values.phone_number,
      company_name: values.company_name,
      // Include other fields only if they are changed
    };
  
    try {
      const response = await axios.patch(`https://51.20.63.119/service_provider/update/user/${id}/`, updatedData);
      console.log('Update successful:', response.data);
      setProfile((prevProfile) => ({
        ...prevProfile,
        ...updatedData,
      }));
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Render loading or profile
  if (!profile) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">{isEditing ? "Edit Profile" : "Profile Details"}</h1>
      {isEditing ? (
        <Formik
          initialValues={{
            username: profile.username,
            email: profile.email,
            phone_number: profile.phone_number,
            address: profile.address,
            zip_code: profile.zip_code,
            company_name: profile.company_name,
            category: profile.category,
            subcategory: profile.subcategory,
            number_of_people: profile.number_of_people,
            status: profile.status,
            average_rating: profile.average_rating,
            base_price: profile.sp_profile.base_price,
            introduction: profile.sp_profile.introduction,
            company_founded_date: profile.sp_profile.company_founded_date,
            payment_methods: profile.sp_profile.payment_methods,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username:</label>
                <Field type="text" name="username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <Field type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                <Field type="text" name="phone_number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address:</label>
                <Field type="text" name="address" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Zip Code:</label>
                <Field type="text" name="zip_code" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="zip_code" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name:</label>
                <Field type="text" name="company_name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="company_name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category:</label>
                <Field type="text" name="category" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subcategory:</label>
                <Field type="text" name="subcategory" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="subcategory" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of People:</label>
                <Field type="number" name="number_of_people" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="number_of_people" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status:</label>
                <Field type="text" name="status" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Average Rating:</label>
                <Field type="number" name="average_rating" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="average_rating" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Base Price:</label>
                <Field type="number" name="base_price" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="base_price" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Introduction:</label>
                <Field component="textarea" name="introduction" className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-24" />
                <ErrorMessage name="introduction" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Founded Date:</label>
                <Field type="date" name="company_founded_date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="company_founded_date" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Methods:</label>
                <Field type="text" name="payment_methods" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                <ErrorMessage name="payment_methods" component="div" className="text-red-500 text-sm" />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Profile Details</h2>
        <div className="space-y-2">
          <p className="flex justify-between"><strong>Username:</strong> <span className="text-gray-600">{profile.username}</span></p>
          <p className="flex justify-between"><strong>Email:</strong> <span className="text-gray-600">{profile.email}</span></p>
          <p className="flex justify-between"><strong>Phone Number:</strong> <span className="text-gray-600">{profile.phone_number}</span></p>
          <p className="flex justify-between"><strong>Address:</strong> <span className="text-gray-600">{profile.address}</span></p>
          <p className="flex justify-between"><strong>Zip Code:</strong> <span className="text-gray-600">{profile.zip_code}</span></p>
          <p className="flex justify-between"><strong>Company Name:</strong> <span className="text-gray-600">{profile.company_name || "N/A"}</span></p>
          <p className="flex justify-between"><strong>Category:</strong> <span className="text-gray-600">{profile.category}</span></p>
          <p className="flex justify-between"><strong>Subcategory:</strong> <span className="text-gray-600">{profile.subcategory}</span></p>
          <p className="flex justify-between"><strong>Number of People:</strong> <span className="text-gray-600">{profile.number_of_people}</span></p>
          <p className="flex justify-between"><strong>Status:</strong> <span className="text-gray-600">{profile.status}</span></p>
          <p className="flex justify-between"><strong>Average Rating:</strong> <span className="text-gray-600">{profile.average_rating}</span></p>
          <p className="flex justify-between"><strong>Base Price:</strong> <span className="text-gray-600">{profile.sp_profile.base_price}</span></p>
          <p className="flex justify-between"><strong>Introduction:</strong> <span className="text-gray-600">{profile.sp_profile.introduction}</span></p>
          <p className="flex justify-between"><strong>Company Founded Date:</strong> <span className="text-gray-600">{profile.sp_profile.company_founded_date}</span></p>
          <p className="flex justify-between"><strong>Payment Methods:</strong> <span className="text-gray-600">{profile.sp_profile.payment_methods}</span></p>
        </div>
        <button 
          onClick={() => setIsEditing(true)} 
          className="mt-4 w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Edit Profile
        </button>
      </div>
      
      )}
    </div>
  );
};

export default MyProfilePro;
