import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Dashboard = () => {
    const { username } = useParams();
    const { user, csrfToken } = useGlobalContext();
    const [userInfo, setUserInfo] = useState(null); // State to store user info
    const userId = user?.data?.id; // Assuming user object has an id property


    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`${apiUrl}/customer/get/${userId}`, {
                    headers: {
                        // 'Contetnt-Type': 'application/json',
                        'X-CSRFToken': csrfToken,  // Include CSRF token in headers
                        // "Accept": 'application/json',
                    },
                });
                setUserInfo(response.data); // Set the fetched user info
               console.log(response.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        if (userId) {
            fetchUserInfo();
        }
    }, [userId, csrfToken]); // Dependencies: run effect when userId or csrfToken changes

    console.log("hello user" ,userInfo)
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
            {userInfo ? (
                <div>
                    <h2 className="text-xl">User Informatio:</h2>
                    <p>ID: {userInfo?.data?.customer?.id}</p>
                    <p>Name: {userInfo?.data?.customer?.username}</p>
                    {/* Add other user info fields as needed */}
                </div>
            ) : (
                <p>Loading user informationnn...</p>
            )}
        </div>
    );
};

export default Dashboard;
