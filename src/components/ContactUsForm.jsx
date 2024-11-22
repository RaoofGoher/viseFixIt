import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../assets/phone.png";

const ContactUsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

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

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data: ", values);
    alert("Message sent successfully!");
    resetForm();
  };

  return (
    <div className=" group flex flex-col-reverse lg:flex-row justify-between items-center lg:mx-20 min-h-screen p-6 lg:p-0">
      {/* Responsive Image */}
      <div className="hidden lg:block w-1/2 ">
        <img
          src={image}
          alt="phone"
          className="  group-hover:animate-pulse   -rotate-45 group-hover:opacity-100 opacity-0 bg-transparent object-cover translate-x-0 group-hover:translate-x-20 transform transition-all duration-700 filter grayscale brightness-90 drop-shadow-2xl shadow-black contrast-125 group-hover:sepia"
        />
      </div>
      
      {/* Form Section */}
      <div className=" rounded-md  drop-shadow-2xl lg:w-1/2 w-full duration-300 group-hover:translate-x-0 -translate-x-96  opacity-100   bg-primaryColor   p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-white ">
          Contact Us
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 animate-slideInUp">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-bold"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-bold"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-bold"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
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
                className="w-full py-2 px-4  bg-secondaryColor text-white font-semibold rounded-md hover:bg-lightColor2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
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
