"use client";

// @ts-ignore
import React from "react";
import { TopNavigation } from "./TopNavigation";
import { CategoryChips } from "./CategoryChips";
import { ReviewsList } from "./ReviewsList";
import { ReviewItem } from "./ReviewItem";

const reviewsData = [
    {
        title: "List item",
        category: "Category",
        description: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
        iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3adf42a3238f15d28ff1c667b9f92e64530bc79405cf1eb9d59d6b2c146997e9",
    },
    {
        title: "Another item",
        category: "Another Category",
        description: "Another supporting text goes here with more details.",
        iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad6693da9706fb2c70a11c7dd2b9e4775f50523f80dc155dbfabc4723fbd0ea7",
    },
];

const MainScreen: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Top Navigation Bar */}
            <TopNavigation />

            {/* Category Selection Chips */}
            <div className="container mx-auto px-4 mt-4">
                <CategoryChips />
            </div>

            {/* Reviews Section */}
            <div className="container mx-auto px-4 mt-6">
                <ReviewsList />
            </div>

            {/* Individual Review Items (if needed outside the list) */}
            <div className="container mx-auto px-4 mt-6">
                {reviewsData.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default MainScreen;
