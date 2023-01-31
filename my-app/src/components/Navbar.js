import React from 'react';
import css from '../App.module.css';


import logo from "./images/world-logo.png";

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="world logo" />
            <p className="nav-title">My Travel Journal</p>
        </div>
    )
}

export default Navbar;