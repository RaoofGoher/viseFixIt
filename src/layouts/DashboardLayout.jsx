// DashboardLayout.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import PrimaryNavbar from '../components/PrimaryNavbar';
import { useGlobalContext } from '../context/GlobalContext';
import { useProContext } from '../context/ProContext';
const DashboardLayout = () => {

    const { proData } = useProContext();   
    const {user} = useGlobalContext();
    
    // `/myprofilepro/${proData?.username}`
    // `/myprofilecustomer/${user?.data?.username}`

// {proData ? `/myprofilepro/${proData?.username}` : `/myprofilecustomer/${user?.data?.username}`}

    const activeLinkStyle = { 
        backgroundColor:"#F58634"
      };
    
    return (
        <div>
            <PrimaryNavbar />
            <div className="flex w-[90vw] ml-[40px]">
                <aside className="w-64 h-screen bg-secondaryColor text-white">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/dashboard/home" className="block p-4 hover:bg-primaryColor"  style={({ isActive }) => (isActive ? activeLinkStyle : null)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={proData ? `/dashboard/myprofilepro/${proData?.username}` : `/dashboard/myprofilecustomer/${user?.data?.username}`} className="block p-4 hover:bg-primaryColor" style={({ isActive }) => (isActive ? activeLinkStyle : null)}>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/settings" className="block p-4 hover:bg-primaryColor"style={({ isActive }) => (isActive ? activeLinkStyle : null)} >Settings</NavLink>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <Outlet /> {/* This will render the matched child routes */}
                </main>
            </div>
        </div>

    );
};

export default DashboardLayout;
