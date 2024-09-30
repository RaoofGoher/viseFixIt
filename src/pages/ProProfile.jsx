import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FiMail, FiPhone, FiDollarSign, FiCalendar } from 'react-icons/fi'; // Importing icons
import { FaCreditCard } from 'react-icons/fa'; // Importing icons
import StarRating from '../components/Stars';


const ProfilePage = () => {
    const { id } = useParams(); // Get the provider ID from the URL
    const [provider, setProvider] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const fetchProviderDetails = async () => {
            setLoading(true); // Set loading to true before fetching data
            try {
                const response = await axios.get(`http://51.21.129.246:8000/service_provider/get/${id}`);
                setProvider(response.data.data.service_provider);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Error fetching provider details:', error);
                setError('Failed to load provider details. Please try again.'); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }
        };

        fetchProviderDetails();
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!provider) {
        return <p className="text-center text-gray-500">No professionals found.</p>;
    }

    // Track image loading state

    return (
        <div className="profile-page max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 mt-10 mb-10 border border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-6">
                {/* Profile Picture Section */}
                <img 
                    src={provider.sp_profile.profile_picture_url || 'default_profile_picture_url_here'} 
                    alt={`${provider.username}'s profile`} 
                    className={`w-32 h-32 rounded-full border-4 border-primaryColor shadow-lg transform transition-transform duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    onLoad={() => setImageLoaded(true)} // Set image loaded state to true when the image is successfully loaded
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "default_profile_picture_url_here"; // Fallback image
                    }} 
                />
                {!imageLoaded && (
                    <div className="w-32 h-32 rounded-full border-4 border-primaryColor shadow-lg flex items-center justify-center">
                        <span className="text-gray-400">Loading...</span>
                    </div>
                )}
                <div className="ml-6 flex-1">
                    <h2 className="text-4xl font-semibold text-gray-900">{provider.username}</h2>
                    <p className="text-lg text-gray-600 mt-2 flex items-center">
                        <strong className="mr-2">Rating:</strong>  
                        <StarRating rating={provider.average_rating} />
                    </p>
                    <p className="text-lg text-gray-600 mt-2"><strong>{provider.category}</strong></p>
                    <p className="text-lg text-gray-600 mt-1 flex items-center">
                        <FiMail className="mr-2 text-primaryColor" /> {provider.email}
                    </p>
                    <p className="text-lg text-gray-600 mt-1 flex items-center">
                        <FiPhone className="mr-2 text-primaryColor" /> {provider.phone_number}
                    </p>
                </div>
            </div>

            {/* Profile Details Section */}
            <div className="border-t border-gray-300 pt-4">
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">Provider Details</h3>
                <div className="flex items-center mt-2">
                    <p className="text-lg text-gray-600 flex items-center mr-6">
                        <FiDollarSign className="mr-2 text-primaryColor" /> <strong>Base Price:&nbsp;&nbsp;</strong> ${provider.sp_profile.base_price}
                    </p>
                    <p className="text-lg text-gray-600 flex items-center mr-6">
                        <FiCalendar className="mr-2 text-primaryColor" /> <strong>Founded:&nbsp;&nbsp; </strong> {new Date(provider.sp_profile.company_founded_date).toLocaleDateString()}
                    </p>
                    <p className="text-lg text-gray-600 flex items-center">
                       <FaCreditCard className="mr-2 text-primaryColor"/> <strong>Payment Methods:&nbsp;&nbsp;</strong> {provider.sp_profile.payment_methods}
                    </p>
                </div>
                <p className="text-lg text-gray-600 mt-4"><strong>Introduction:</strong> {provider.sp_profile.introduction}</p>
            </div>

            <div className="mt-6">
                <button className="w-full bg-primaryColor text-white px-4 py-3 rounded-lg shadow-md hover:bg-lightColor1 hover:text-black transition duration-300 transform hover:scale-105">
                    Contact Provider
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
