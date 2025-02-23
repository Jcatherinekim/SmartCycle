import React from "react";
import './reviews.css';

export const TopNavigation: React.FC = () => {
    return (
        <header className="header">
            {/* Search Bar */}
            <button className="search-button">
                <span>Location</span>
                <span>✖</span>
            </button>

            {/* Navigation Buttons */}
            <nav className="nav-buttons">
                <button className="nav-button">Make Posts</button>
                <button className="nav-button">Sign Out</button>
                <button className="profile-button">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d99a06c214e3b9c1ea676b599b127042a5f518392a2123440df732f26735fde2"
                        alt="User Icon"
                    />
                </button>
            </nav>
        </header>
    );
};
