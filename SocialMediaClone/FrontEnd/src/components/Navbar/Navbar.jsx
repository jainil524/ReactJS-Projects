import React from 'react'
import './css/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div className='logo'><img src='./src/assets/img/Logo.png' alt="" /></div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/addPost">Post +</NavLink></li>
                    <li><NavLink to="/notification">Notifications</NavLink></li>
                    <li>
                        <NavLink to="/profile"><img src="https://dummyjson.com/users/1" alt="Profile Pic" className="profile-pic" /></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
