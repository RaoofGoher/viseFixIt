import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MainImage from '../assets/mainImg.png';
const apiUrl = import.meta.env.VITE_API_URL;

// Validation Schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUS = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${apiUrl}/contact_us/`, values);

      if (response.status === 200) {
        alert('Message sent successfully!');
        resetForm(); // Clear form after submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending the message.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-4 border border-4 border-lightColor1 mt-24 bg-lightColor1 mb-4">
      <div className=" p-4 flex justify-center items-center">
        <img
          src={MainImage}
          alt="Contact Us"
          className="w-full h-[600px] rounded-lg shadow-lg"
        />
      </div>
      
      <div className="w-[60vw]">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

        <Formik
          initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="subject" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-primaryColor text-black font-semibold rounded-md shadow-sm hover:bg-lightColor2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUS;
