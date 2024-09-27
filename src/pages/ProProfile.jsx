import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams(); // Get the provider ID from the URL
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const fetchProviderDetails = async () => {
            try {
                const response = await axios.get(`http://51.21.129.246:8000/service_provider/get/${id}`);
                setProvider(response.data.data.service_provider);
            } catch (error) {
                console.error('Error fetching provider details:', error);
            }
        };

        fetchProviderDetails();
    }, [id]);

    if (!provider) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="profile-page max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 mb-10">
            <div className="flex items-center space-x-6">
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-gray-900">{provider.username}</h2>
                    <p className="text-sm text-gray-600 mt-2"><strong>Category:</strong> {provider.category}</p>
                    <p className="text-sm text-gray-600 mt-1"><strong>Email:</strong> {provider.email}</p>
                    <p className="text-sm text-gray-600 mt-1"><strong>Phone:</strong> {provider.phone_number}</p>
                </div>
            </div>

            {/* Additional styling for more details if needed */}
            <div className="mt-6">
                <button className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-lightColor1 hover:text-black transition duration-300">
                    Contact Provider
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
