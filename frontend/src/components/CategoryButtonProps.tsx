import React from 'react';

interface CategoryButtonProps {
    label: string;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ label }) => {
    return (
        <button className="px-3 py-1.5 text-base rounded-lg border border-green-300 border-solid text-zinc-700 max-md:whitespace-nowrap max-sm:px-2 max-sm:py-1 max-sm:text-sm">
            {label}
        </button>
    );
};