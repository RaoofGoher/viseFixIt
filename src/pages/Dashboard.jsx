import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
const Dashboard = () => {

    const { username } = useParams();
    const { user } = useGlobalContext();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
        </div>
    );
};

export default Dashboard;