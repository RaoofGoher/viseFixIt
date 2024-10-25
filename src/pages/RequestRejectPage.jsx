import React from 'react'
import { Link } from 'react-router-dom'
import { FaThumbsDown } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';
const apiUrl = import.meta.env.VITE_API_URL;

const RequestRejectPage = () => {
    const { id } = useParams();
    const [status, setStatus] = useState('Verifying...');
    const { showToast } = useToast();
    useEffect(() => {
        const requestReject = async () => {
          try {
            const response = await axios.get(`${apiUrl}/service-request/${id}/reject/`);
            if (response.status === 200) {
              setStatus('Your request has been rejected!');
              showToast('request rejected!','error');
             
            } else {
              setStatus('request rejeted.');
            }
          } catch (error) {
            
            setStatus('request failed. Error');
          }
        };
    
        requestReject();
      }, [id]);



  return (
    <div className='flex flex-col  items-center justify-center h-[30vw]'>
     
     <FaThumbsDown className='text-red-500 text-8xl mb-4' />
     <h1 className='text-6xl font-bold mb-4'>Your request is Rejected</h1>

     <Link
        to='/'
        className='text-white bg-primaryColor hover:bg-secondaryColor rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
      
    </div>
  )
}

export default RequestRejectPage
