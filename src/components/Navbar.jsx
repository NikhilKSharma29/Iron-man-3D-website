import React from 'react'
import '../css components/Navbar.css'
import { RiSearchLine } from "react-icons/ri";
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <>
        <div className="container">
        <nav className="navbar">
            <div className="logo">
                <img className="logo-image" src={logo} alt="company logo" />
                
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Cast</a></li>
                <li><a href="#">Get tickets</a></li>
            </ul>
            <div className="search-bar">
                <RiSearchLine className="ri-search-line"></RiSearchLine>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navbar;