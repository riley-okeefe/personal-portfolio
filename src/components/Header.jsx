import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [activeComponent, setActiveComponent] = useState("");

    const handleClick = (component) => {
        setActiveComponent(component);
    };

    const isActive = (component) => {
        return activeComponent === component ? 'active' : '';
    };
    return (
        <div className="welcome-card">
            <div className="welcome-options">
                <h1 className='nav-title'>Hi, I'm Riley.</h1>
                <div className="welcome-option">
                    <Link to='/' className={isActive("home")} onClick={() => handleClick("home")}>Home</Link>
                </div>
                <div className="welcome-option">
                    <Link to='/about' className={isActive("about")} onClick={() => handleClick("about")}>About</Link>
                </div>
                <div className="welcome-option">
                    <Link to='/portfolio' className={isActive("portfolio")} onClick={() => handleClick("portfolio")}>Portfolio</Link>
                </div>
                <div className="welcome-option">
                    <Link to='/contact' className={isActive("contact")} onClick={() => handleClick("contact")}>Contact</Link>
                </div>
            </div>
        </div>
    );
}