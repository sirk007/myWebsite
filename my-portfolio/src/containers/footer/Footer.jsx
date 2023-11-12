import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {

    const linkedInProfileUrl = 'https://www.linkedin.com/in/kris-ch-42446329b/';
    const githubProfileUrl = 'https://github.com/sirk007';

    return (
        <div className="home__footer section__padding" id="footer">
            <div className="home__footer-heading">
                <h1 className="gradient__text">Thank you for checking my profile out!</h1>
            </div>
            <div className="home__footer-links">
                <div className="home__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>kristijonas.ch@gmail.com</p>
                </div>
                <div className="home__footer-links_div">
                    <h4>Links</h4>
                    <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <p>Contact</p>
                </div>
                <div className="home__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>0.5 Pepe Drive Under the Tree</p>
                    <p>0877149990</p>
                </div>
                <div className="home__footer-copyright">
                    <p>Pepe rights</p>
                </div>
            </div>
        </div>
    )
}

export default Footer