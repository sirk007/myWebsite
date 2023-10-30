import React from 'react';
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css';

const Navbar = () => {
    return (
        <div className="profile__navbar">
            <div className="profile__navbar-links">
                <div className="profile__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="profile__navbar-links_container">
                    <p><a href="#about">About</a></p>
                    <p><a href="#experience">Experience</a></p>
                    <p><a href="#projects">Projects</a></p>
                    <p><a href="#resume">Resume</a></p>
                </div>
                <div className="profile__navbar-sign">
                    <p>Download Resume</p>
                    <button type="button">Download</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar