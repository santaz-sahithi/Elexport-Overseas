import React, { useState } from 'react';
import './navbar.css';
import freshLogo from "../../assests/LogoElexport.jpg"; // Update the path as per your logo's location
// import { behavior } from '@testing-library/user-event/dist/cjs/event/behavior/registry.js';
import { useNavigate } from 'react-router-dom';
// import { behavior } from '@testing-library/user-event/dist/cjs/event/behavior/registry.js';

function scrollToElement(id, padding = 0) {
    const element = document.getElementById(id);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}


const FreshNavbar = () => {
    // State to manage mobile menu toggle
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleAboutUsClick = (event) => {
        event.preventDefault();
        navigate('/');
        
        // Scroll after navigation to homepage
        setTimeout(() => {
            scrollToElement('AboutUsSection', 50);
        }, 100); // Small delay to ensure navigation is completed
    };

    // State to manage dropdown toggle
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle the mobile menu
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to toggle dropdown menu
    // const handleDropdownToggle = () => {
    //     setDropdownOpen(!dropdownOpen);
    // };


    return (
        <header className="fresh-header">
            {/* Logo Section */}
            <div className="fresh-logo">
                <img src={freshLogo} alt="fresh logo" />
            </div>

            {/* Navigation Menu */}
            <nav className="fresh-nav">
                <div className={menuOpen ? 'fresh-menu fresh-show-menu' : 'fresh-menu'}>
                    <a href="/Home">Home</a>
                    {/* Countries Dropdown */}
                    <a href = "/Countries">Countries
                    {/* <a href="/Countries" className="fresh-dropdown"> */}
                        {/* <a  className="dropdown-link">Countries</a>
                        <a className="fresh-dropdown-content">
                            <a href="/UK">United Kingdom</a>
                            <a href="/Canada">Canada</a>
                            <a href="/Latvia">Latvia</a>
                            <a href="/Lithuania">Lithuania</a>
                            <a href="/France">France</a>
                            <a href="/Sweden">Sweden</a>
                            <a href="/Finland">Finland</a>
                            <a href="/Germany">Germany</a>
                        </a> */}
                    </a>


                    <a href="/Services">Services</a>
                    <a href="#AboutUs" onClick={handleAboutUsClick}>About Us</a>
                    <a href="/ContactUs">Contact Us</a>
                </div>
                {/* Mobile Menu Toggle Button */}
                <div className="fresh-menu-toggle" onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default FreshNavbar;
