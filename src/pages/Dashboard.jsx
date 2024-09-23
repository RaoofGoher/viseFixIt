import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Dashboard = () => {
    const { user } = useGlobalContext();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {user ? user.username : 'User'}!</h1>
        </div>
    );
};

export default Dashboard;