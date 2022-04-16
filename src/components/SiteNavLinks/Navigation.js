import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (    
        <div>
                <li><NavLink to="/"> Home Page</NavLink></li>
                <li><NavLink to="/AdminCRUD"> Create Page</NavLink></li>
        </div>
    );
}
export default Navigation;