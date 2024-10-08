import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios';

const EditProProfile = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');
  const [profile, setProfile] = useState(null); // State to hold profile data

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
          const newProfile = response.data.data.service_provider;

          if (JSON.stringify(newProfile) !== JSON.stringify(profile)) {
            setProfile(newProfile); // Set profile data to state only if it's different
          }
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  // Log profile when it changes
  useEffect(() => {
    if (profile) {
      console.log('pro', profile);
    }
  }, [profile]);

  return (
    <div>
      Here is the main edit profile page for professionals
    </div>
  );
}

export default EditProProfile;
