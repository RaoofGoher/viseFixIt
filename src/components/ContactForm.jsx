import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form or send data to backend here
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        
        {isSubmitted && (
          <div className="text-green-600 font-bold mb-4 text-center">
            Thank you for contacting us!
          </div>
        )}
        
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={`border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone (Optional)
            </label>
            <input
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className={`border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      );
};

export default ContactForm;
