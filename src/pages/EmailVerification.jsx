import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';

const EmailVerification = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState('Verifying...');
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://api.thefixit4u.com/activate/${uid}/${token}/`);
        if (response.status === 200) {
          setStatus('Your email has been verified successfully!');
          showToast('Email verified successfully!','success');
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setStatus('Email verification failed.');
        }
      } catch (error) {
        console.log("email verifiaction error",error)
        setStatus('Email verification failed.');
      }
    };

    verifyEmail();
  }, [uid, token]);

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Email Verification</h2>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
