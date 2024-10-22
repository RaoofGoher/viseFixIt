// DashboardLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import PrimaryNavbar from '../components/PrimaryNavbar';

const DashboardLayout = () => {
    return (
        <>
            <PrimaryNavbar />
            <div className="flex w-[90vw]">
                <aside className="w-64 h-screen bg-gray-800 text-white">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard/home" className="block p-4 hover:bg-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profile" className="block p-4 hover:bg-gray-700">Profile</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <Outlet /> {/* This will render the matched child routes */}
                </main>
            </div>
        </>

    );
};

export default DashboardLayout;
