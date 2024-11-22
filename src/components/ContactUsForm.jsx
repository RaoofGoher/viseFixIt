import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../assets/background2.jpg";

const ContactUsForm = () => {
  const [animate, setAnimate] = useState(false);
  const formRef = useRef(null);

  // IntersectionObserver callback function
  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setAnimate(true); // Trigger animation when element comes into view
    }
  };

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger animation when 50% of the component is visible
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  // Initial Form Values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Form Submission Handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data: ", values);
    alert("Message sent successfully!");
    resetForm();
  };

  // Inline CSS for slide-up animation
  const slideUpAnimation = {
    animation: animate ? "slideUp 1s ease-out forwards" : "", // Only apply animation when animate state is true
  };

  // Keyframes for the animation
  const keyframes = `
    @keyframes slideUp {
      0% {
        transform: translateY(100%); /* Start below the screen */
        opacity: 0; /* Fully transparent */
      }
      100% {
        transform: translateY(0); /* End at its normal position */
        opacity: 1; /* Fully visible */
      }
    }
  `;

  return (
    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Inline style for keyframes */}
      <style>{keyframes}</style>

      <div
        ref={formRef}
        className="absolute right-24 w-full max-w-md bg-transparent p-6"
        style={slideUpAnimation} // Apply slide-up animation here
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUsForm;
