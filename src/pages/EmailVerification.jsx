import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const EmailVerification = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://api.thefixit4u.com/activate/${id}/${token}/`);
        if (response.status === 200) {
          setStatus('Your email has been verified successfully!');
        } else {
          setStatus('Email verification failed.');
        }
      } catch (error) {
        setStatus('Email verification failed.');
      }
    };

    verifyEmail();
  }, [uid, token]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Email Verification</h2>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
