"use client";

// @ts-ignore
import React from "react";
import { TopNavigation } from "./TopNavigation";
import { CategoryChips } from "./CategoryChips";
import { ReviewsList } from "./ReviewsList";

const ExamplesReviewsWeb: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col px-7 pt-7 bg-yellow-50 rounded-2xl border-8 border-blue-300 border-solid max-w-[921px]">
            <TopNavigation />
            <div className="mt-6">
                <CategoryChips />
            </div>
            <ReviewsList />
        </main>
    );
};

export default ExamplesReviewsWeb;