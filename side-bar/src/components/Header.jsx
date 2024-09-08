import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="left-content">
                    <h1 className="company-name">Company Name</h1>
                </div>
                <div className="right-container">
                    <nav className="nav-bar">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
