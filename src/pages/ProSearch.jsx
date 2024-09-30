import React from 'react';
import { useProContext } from '../context/ProContext';
import { Link } from 'react-router-dom';
import StarRating from '../components/Stars'; // Import the StarRating component

const SearchResultsPage = () => {
    const { zipProSearch } = useProContext();

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-primaryColor">Search Results</h2>
            {zipProSearch.length === 0 ? (
                <p className="text-gray-600">No service providers found.</p>
            ) : (
                <ul className="space-y-4">
                    {zipProSearch.map(provider => (
                        <li key={provider.service_provider_id} className="border rounded-lg px-4 py-12  shadow-md bg-white hover:shadow-lg transition-shadow">
                            <div className="flex items-center">
                                {/* Image Section */}
                                <img 
                                    src={provider.image_url} 
                                    alt={`${provider.username}'s profile`} 
                                    className="w-16 h-16 rounded-full mr-4 border border-2 border-primaryColor" 
                                    onError={(e) => { e.target.onerror = null; e.target.src="default_image_url_here"; }} // Optional: fallback image
                                />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-primaryColor">{provider.username}</h3>
                                    <StarRating rating={provider.average_rating} />
                                    <p className="text-gray-500">Company Name: {provider.company_name}</p>
                                    <p className="text-gray-500">Number of People: {provider.number_of_people}</p>
                                </div>
                                {/* Base Price Section */}
                                <div className="text-lg font-bold text-gray-800 flex flex-col">
                                    Base Price: {provider.base_price}$$
                                    <Link
                                to={`/profile/${provider.service_provider_id}`}
                                className="mt-2 inline-block bg-primaryColor text-white px-4 py-2 rounded hover:bg-lightColor1 transition-colors"
                            >
                                View Profile
                            </Link>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResultsPage;
