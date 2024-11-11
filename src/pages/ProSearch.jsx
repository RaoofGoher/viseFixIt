import React, { useState, useEffect } from 'react';
import { useProContext } from '../context/ProContext';
import { useGlobalContext } from '../context/GlobalContext';
import { Link, useLocation } from 'react-router-dom';
import StarRating from '../components/Stars';
import { useMediaQuery } from 'react-responsive';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const SearchResultsPage = () => {
    const location = useLocation();
    const { zipProSearch, setProfileSearchLocation } = useProContext();
    const { categoryIDfromNav, categoryIdExplorer } = useGlobalContext(); // Destructure categoryIDExplorer
    const [searchType, setSearchType] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 525px)' });

    useEffect(() => {
        const fetchData = async (selectedCategoryID) => {
            try {
                const response = await axios.get(`https://api.thefixit4u.com/get_all_pro_by_category/${selectedCategoryID}/`);
                if (response.data) {
                    setSearchType(response.data.service_providers);
                } else {
                    console.error("Unexpected API response structure:", response.data);
                    setSearchType([]); // Reset to empty array or null
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setSearchType([]); // Reset to empty array or null
            }
        };

        // Determine which category ID to use
        if (zipProSearch === null) {
            if (categoryIDfromNav) {
                // Use the categoryID from navigation if available
                fetchData(categoryIDfromNav);
            } else if (categoryIdExplorer) {
                // Fallback to categoryIDExplorer from context if no categoryID from navigation
                fetchData(categoryIdExplorer);
            }
        } else if (zipProSearch?.length !== 0) {
            // If `zipProSearch` is defined, use it as `searchType`
            setSearchType(zipProSearch);
        }
    }, [zipProSearch, categoryIDfromNav, categoryIdExplorer]); // Include categoryIDExplorer in dependencies

    useEffect(() => {
        setProfileSearchLocation(location.pathname);
    }, [location, setProfileSearchLocation]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-primaryColor">Search Results</h2>
            {searchType?.length === 0 ? (
                <p className="text-gray-600">No service providers found.</p>
            ) : (
                <ul className="space-y-4">
                    {searchType?.map(provider => {
                        const profilePictureURL = provider.profile_picture
                            ? `${apiUrl}${provider.profile_picture}`
                            : null;

                        return (
                            <li key={provider.service_provider_id} className="border rounded-lg px-4 py-6 shadow-md bg-white hover:shadow-gray-600  transition-shadow">
                                <div className={`flex items-center ${isMobile ? "flex-col" : ""}`}>
                                    <div className="relative w-16 h-16 mr-4">
                                        {profilePictureURL ? (
                                            <img
                                                src={profilePictureURL}
                                                alt={`${provider.username}'s profile`}
                                                className="w-full h-full rounded-full border-2 border-primaryColor object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full  border-2 border-primaryColor">
                                                <FaUserCircle className="w-full h-full text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-primaryColor">{provider.username}</h3>
                                        <StarRating rating={provider.average_rating} />
                                        <p className="text-gray-500">Company Name: {provider.company_name}</p>
                                        <p className="text-gray-500">Number of People: {provider.number_of_people}</p>
                                    </div>
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
