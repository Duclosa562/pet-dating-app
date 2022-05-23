import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import { useCookies } from 'react-cookie';
import LandingPage from "./LandingPage";

import { render } from '@testing-library/react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
  } from "react-router-dom";
function Dashboard() {

    const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);
    // return (<Route path="/UserDashboard" element={<UserDashboard/>}></Route>);

    console.log("In here gagaga");

    if (cookies["isLoggedIn"] === 'false')
        return (<LandingPage/>)

    if (cookies["isAdmin"] === 'true') {
        return (<AdminDashboard />);
    }
    else if (cookies["isAdmin"] === 'false') {
        return (<UserDashboard />);
    }
    
}

export default Dashboard;