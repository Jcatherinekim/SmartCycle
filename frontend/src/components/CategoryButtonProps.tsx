import React from 'react';

interface CategoryButtonProps {
    label: string;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ label }) => {
    return (
        <button className="category-button">
            {label}
        </button>
    );
};