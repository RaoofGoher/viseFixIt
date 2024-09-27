import React from 'react';
import { useProContext } from '../context/ProContext';
import { Link, useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
    const { zipProSearch, setProfileSearchLocation } = useProContext();
    const location = useLocation();
    setProfileSearchLocation(location.pathname);
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-primaryColor">Search Results</h2>
            {zipProSearch.length === 0 ? (
                <p className="text-gray-600">No service providers found.</p>
            ) : (
                <ul className="space-y-4">
                    {zipProSearch.map(provider => (
                        
                        <li key={provider.id} className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-semibold text-primaryColor">{provider.username}</h3>
                            <p className="text-gray-500">Category: {provider.category}</p>
                            <p className="text-gray-500">ID: {provider.service_provider_id}</p>
                            <Link
                                to={`/profile/${provider.service_provider_id}`}
                                className="mt-2 inline-block bg-primaryColor text-white px-4 py-2 rounded hover:bg-lightColor1 transition-colors"
                            >
                                Read More
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResultsPage;
