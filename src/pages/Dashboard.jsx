import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const { username } = useParams();
    const { user, csrfToken } = useGlobalContext();
    const [userInfo, setUserInfo] = useState(null); // State to store user info
    const userId = user?.data?.id; // Assuming user object has an id property
      console.log(userId)
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`http://51.21.129.246:8000/service_provider/get/${userId}`, {
                    headers: {
                        'X-CSRFToken': csrfToken,  // Include CSRF token in headers
                    },
                });
                setUserInfo(response.data); // Set the fetched user info
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        if (userId) {
            fetchUserInfo();
        }
    }, [userId, csrfToken]); // Dependencies: run effect when userId or csrfToken changes

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
            {userInfo ? (
                <div>
                    <h2 className="text-xl">User Informationnn:</h2>
                    <p>ID: {userInfo.data.id}</p>
                    <p>Name: {userInfo.name}</p>
                    {/* Add other user info fields as needed */}
                </div>
            ) : (
                <p>Loading user informationnn...</p>
            )}
        </div>
    );
};

export default Dashboard;
