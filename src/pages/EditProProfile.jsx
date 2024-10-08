import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios';

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
          const fetchedSubcategories = response.data.data; // Adjust based on actual response structure
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

  return (
    <div>
      Here is the main edit profile page for professionals
      {/* Render additional information as needed */}
    </div>
  );
}

export default EditProProfile;
