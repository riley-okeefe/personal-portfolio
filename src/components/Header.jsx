import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    const [activeComponent, setActiveComponent] = useState("");
    const [menuActive, setMenuActive] = useState(false);

    const handleClick = (component) => {
        setActiveComponent(component);
        setMenuActive(false);
    };

    const isActive = (component) => {
        return activeComponent === component ? 'active' : '';
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className="welcome-card">
            <div className="welcome-options">
                <h1 className='nav-title'>Hi, I'm Riley.</h1>
                <div className='hamburger' onClick={toggleMenu}>
                    <span className={`bar ${menuActive ? 'active': ''}`}></span>
                    <span className={`bar ${menuActive ? 'active': ''}`}></span>
                    <span className={`bar ${menuActive ? 'active': ''}`}></span>
                </div>
                <div className={`welcome-option-group ${menuActive ? 'active' : ''}`}>
                    <div className="welcome-option">
                        <Link to='/personal-portfolio/' className={isActive("home")} onClick={() => handleClick("home")}>Home</Link>
                    </div>
                    <div className="welcome-option">
                        <Link to='/personal-portfolio/about' className={isActive("about")} onClick={() => handleClick("about")}>About</Link>
                    </div>
                    <div className="welcome-option">
                        <Link to='/personal-portfolio/portfolio' className={isActive("portfolio")} onClick={() => handleClick("portfolio")}>Portfolio</Link>
                    </div>
                    <div className="welcome-option">
                        <Link to='/personal-portfolio/contact' className={isActive("contact")} onClick={() => handleClick("contact")}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
