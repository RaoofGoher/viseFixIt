import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
import { useToast } from '../context/ToastContext';

const apiUrl = import.meta.env.VITE_API_URL;

const CustomerImageUpdate = ({ field, form, ...props }) => {
  const [uploading, setUploading] = useState(false);
  const [id, setId] = useState('');
  const { user,updateProfilePicture } = useGlobalContext();
  const { showToast } = useToast();

  useEffect(() => {
    
    if (user && user.data.id) {
      setId(user.data.id);
    }
  }, [user]);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check if the file size is less than 5MB (5 * 1024 * 1024 bytes)
      if (file.size > 5 * 1024 * 1024) {
        showToast('Failed! image is too large below 5mb only.', 'warning')
        return; // Early exit if the file is too large
      }

      form.setFieldValue(field.name, file); // Set the file in Formik's state
      await handleImageUpload(file); // Automatically trigger the upload
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) {
      alert("No image file selected!");
      return; // Early exit if no file is selected
    }

    setUploading(true);

    try {
      // Create FormData object for the image
      const formData = new FormData();
      formData.append("profile_picture", file); // Ensure the key matches what the server expects

      // Make an API request to upload the image using axios
      const response = await axios.post(`${apiUrl}/customer/add/profile/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify content type
        },
      });
         // Handle success response
      showToast('Success! image uploaded.', 'success')
      updateProfilePicture(response.data.data.profile_picture_url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed! " + (error.response ? error.response.data.reason.error : ""));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange}
        disabled={uploading} // Disable while uploading
      />
      {form.values[field.name] && (
        <img
          src={URL.createObjectURL(form.values[field.name])}
          alt="Preview"
          width="100"
        />
      )}
    </div>
  );
};

export default CustomerImageUpdate;
