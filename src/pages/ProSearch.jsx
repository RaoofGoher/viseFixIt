import React, { useState, useEffect } from 'react'; // Added useEffect import
import { useProContext } from '../context/ProContext';
import { Link, useLocation } from 'react-router-dom'; // Imported useLocation
import StarRating from '../components/Stars'; // Import the StarRating component
import { useMediaQuery } from 'react-responsive';

const SearchResultsPage = () => {
    const location = useLocation(); // Use location to get the current route
    const { zipProSearch, setProfileSearchLocation } = useProContext();
    const isMobile = useMediaQuery({ query: '(max-width: 525px)' });

    useEffect(() => {
        // Update profileSearchLocation every time the route changes
        setProfileSearchLocation(location.pathname);
    }, [location, setProfileSearchLocation]); // Add setProfileSearchLocation as a dependency

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-primaryColor">Search Results</h2>
            {zipProSearch.length === 0 ? (
                <p className="text-gray-600">No service providers found.</p>
            ) : (
                <ul className="space-y-4">
                    {zipProSearch.map(provider => {
                        const [imageLoaded, setImageLoaded] = useState(false); // Track image loading state

                        return (
                            <li key={provider.service_provider_id} className="border rounded-lg px-4 py-6 shadow-md bg-white hover:shadow-lg transition-shadow">
                                <div className={`flex items-center ${isMobile && "flex-col"}`}>
                                    {/* Image Section */}
                                    <div className="relative w-16 h-16 mr-4">
                                        <img 
                                            src={provider.image_url || 'default_image_url_here'} 
                                            alt={`${provider.username}'s profile`} 
                                            className={`w-full h-full rounded-full border border-2 border-primaryColor object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                                            onLoad={() => setImageLoaded(true)} // Set image loaded state to true when the image is successfully loaded
                                            onError={(e) => { 
                                                e.target.onerror = null; 
                                                e.target.src = "default_image_url_here"; // Fallback image
                                            }} 
                                        />
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full border border-2 border-primaryColor">
                                                <span className="text-[10px] text-gray-400 ">Loading...</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-primaryColor">{provider.username}</h3>
                                        <StarRating rating={provider.average_rating} />
                                        <p className="text-gray-500">Company Name: {provider.company_name}</p>
                                        <p className="text-gray-500">Number of People: {provider.number_of_people}</p>
                                    </div>
                                    {/* Base Price Section */}
                                    <div className="text-lg font-bold text-gray-800 flex flex-col text-right">
                                        Base Price: {provider.base_price}$
                                        <Link
                                            to={`/profile/${provider.service_provider_id}`}
                                            className="mt-2 inline-block bg-primaryColor text-white px-4 py-2 rounded hover:bg-lightColor1 transition-colors"
                                        >
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default SearchResultsPage;
