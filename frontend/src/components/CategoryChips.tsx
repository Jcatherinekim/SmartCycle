import React from "react";
import './reviews.css';

const categories = [
    "Food", "Exercise", "Art", "Games", "Music",
    "Outdoor", "Volunteer", "Literature", "Animals",
];

export const CategoryChips: React.FC = () => {
    return (
        <nav className="category-nav">
            {categories.map((category) => (
                <button key={category} className="category-chip">
                    {category}
                </button>
            ))}
        </nav>
    );
};
