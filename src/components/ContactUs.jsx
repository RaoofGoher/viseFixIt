import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MainImage from '../assets/mainImg.png';
import logo2 from '../assets/logo2.png';
import { useMediaQuery } from 'react-responsive';
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
    
  const isMedium = useMediaQuery({
    query: '(max-width: 680px)',
  });
  const isSmall2 = useMediaQuery({
    query: '(max-width: 526px)',
  });
  const isSmall3 = useMediaQuery({
    query: '(max-width: 375px)',
  });
  const isSmall = useMediaQuery({
    query: '(max-width: 530px)',
  });
  const isOverlaping = useMediaQuery({
    query: '(max-width: 1280px)',
  });


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
    <div className= {`flex px-8 py-8 ${isOverlaping ? "flex-col" : "flex-row"} items-center justify-between  border-4 border-lightColor1 mt-24 bg-lightColor1 mb-4`}>
      <div className="flex-4 mb-8">
        <img
          src={logo2}
          alt="Contact Us"
          className={` ${isSmall ? "w-[90vw]" : "w-full"} h-[400px] rounded-lg shadow-lg`}
        />
      </div>
      
      <div className={`bg-white ${isSmall2 ? "px-4" : "px-20"}  py-8 rounded-lg ${isSmall ? "w-[90vw]" : ""} `}>
        <h2 className="text-4xl font-bold mb-4 text-center text-secondaryColor">Contact Us</h2>

        <Formik
          initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
          className= "flex justify-end"
        >
          {({ isSubmitting }) => (
            <Form className={`space-y-4 ${isMedium ? "w-[350px]" : "w-[500px]" } ${isSmall2 ? "w-[150px]":""} ${isSmall3 ? "w-[90vw]" : ""}  text-secondaryColor`}>
              <div  >
                <label htmlFor="name" className="block text-md font-bold w-[100px]">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={` mt-1 block ${isSmall2 ? "" : "w-full" } px-3 py-2  border-2 border-primaryColor rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-md font-bold">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 block ${isSmall2 ? "" : "w-full" } px-3 py-2 border-2 border-primaryColor rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 `}
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-md font-bold">Phone</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className={`mt-1 block ${isSmall2 ? "" : "w-full" } px-3 py-2 border-2 border-primaryColor rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-md font-bold">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className={`mt-1 block ${isSmall2 ? "" : "w-full" }  px-3 py-2 border-2 border-primaryColor rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage name="subject" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block text-md font-bold">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className={`mt-1 block ${isSmall2 ? "" : "w-full" } px-3 py-2 border-2 border-primaryColor rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
              </div>

              <button
                type="submit"
                className={`${isSmall2 ? "w-[80vw]" : "w-full" } py-2 px-4 bg-primaryColor text-white font-semibold rounded-md shadow-sm hover:bg-lightColor2 hover:text-secondaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
