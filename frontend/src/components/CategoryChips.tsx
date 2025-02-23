"use client";

// @ts-ignore
import React from 'react';

const categories = [
    "Food",
    "Exercise",
    "Art",
    "Games",
    "Music",
    "Outdoor",
    "Volunteer",
    "Literature",
];

export const CategoryChips: React.FC = () => {
    return (
        <nav className="flex overflow-hidden flex-wrap gap-2 justify-center items-center py-2 w-full text-base leading-none text-center whitespace-nowrap bg-white rounded-xl min-h-12 text-zinc-700">
            {categories.map((category) => (
                <button
                    key={category}
                    className="flex overflow-hidden justify-center items-center self-stretch my-auto rounded-lg border border-green-300 border-solid min-h-8"
                >
          <span className="gap-2 self-stretch px-3 py-1.5 my-auto">
            {category}
          </span>
                </button>
            ))}
        </nav>
    );
};
