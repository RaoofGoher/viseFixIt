import React, { useEffect, useState } from 'react';
import { useProContext } from '../context/ProContext';
import axios from 'axios'; // Import axios for making API requests

const MyProfilePro = () => {
  const { proData } = useProContext();
  const [id, setId] = useState('');

  // Set id when proData changes
  useEffect(() => {
    if (proData && proData.id) {
      setId(proData.id);
    }
    console.log("proData:", proData);
  }, [proData]);

  // Fetch data using id
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://51.20.63.119/service_provider/get/${id}`);
          console.log("API Response:", response.data.data.service_provider); // Log the response data from the API
        } catch (error) {
          console.error('Error fetching service provider data:', error);
        }
      }
    };

    fetchData(); // Fetch data if id is available
  }, [id]); // Trigger the fetch whenever id changes

  return (
    <></>
  );
};

export default MyProfilePro;
