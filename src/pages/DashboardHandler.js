import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function Dashboard({cookies}) {
    if (cookies.isAdmin === 'true') {
        return (<AdminDashboard />);
    }
    else if (cookies.isAdmin === 'false') {
        return (<UserDashboard />);
    }
}

export default Dashboard;