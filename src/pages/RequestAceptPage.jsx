import React from 'react'
import { Link } from 'react-router-dom'
import { FaThumbsUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';
const apiUrl = import.meta.env.VITE_API_URL;

const RequestAceptPage = () => {
    const { id } = useParams();
    const [status, setStatus] = useState('Verifying...');
    const { showToast } = useToast();
    useEffect(() => {
        const requestAccept = async () => {
          try {
            const response = await axios.get(`${apiUrl}/service-request/${id}/accept/`);
            if (response.status === 200) {
              setStatus('Your request has been accepted successfully!');
              showToast('request accepted successfully!','success');
             
            } else {
              setStatus('request rejeted.');
            }
          } catch (error) {
            
            setStatus('request failed. Error');
          }
        };
    
        requestAccept();
      }, [id]);



  return (
    <div className='flex flex-col  items-center justify-center h-[30vw]'>
     
     <FaThumbsUp className='text-primaryColor text-8xl mb-4' />
     <h1 className='text-6xl font-bold mb-4'>Your request is Accepted</h1>

     <Link
        to='/'
        className='text-white bg-primaryColor hover:bg-secondaryColor rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
      
    </div>
  )
}

export default RequestAceptPage
