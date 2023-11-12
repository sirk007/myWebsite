import React from 'react';
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
                    <p><a href="#home">Home</a></p>
                    <div className="profile__navbar-portfolio">
                        <p>Portfolio</p>
                        <div className="profile__navbar-portfolio-dropdown">
                            <p><a href="#projectOne">React Project</a></p>
                            <p><a href="#projectTwo">PHP Project</a></p>
                        </div>
                    </div>
                    <p><a href="#blog">Skills</a></p>
                </div>
                <div className="profile__navbar-sign">
                    <p><a href="#resume">Resume</a></p>
                    <p><a href="#footer">Contact Me</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar