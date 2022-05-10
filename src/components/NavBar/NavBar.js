import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Button } from '@mui/material';
import "./NavBar.css";

function homeRoute() {
    return (
        <Link to={"/"} style={{textDecoration: "none"}}>
            <Button variant='text' size='large' sx={{color: "black"}}>Home</Button>
        </Link>
    )
}
//<Link to={"/"} >HOME</Link> 

function NavBar() {
    return (
        <header className='navbar'>
            <div className='navbar-title'>
                Pet Dating App
                <i class="fa-solid fa-paw navbar-icon"></i>
            </div>
            <div className='navbar-button'>{homeRoute()}</div>
            <div className='navbar-button'>Search</div>
            <div className='navbar-button'>Sign In</div>
        </header>
    )
}

export default NavBar