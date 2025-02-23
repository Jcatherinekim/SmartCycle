import React from 'react';
import {TopNavigation} from './TopNavigation.tsx';
import {CategoryChips} from './CategoryChips.tsx';
import {ReviewsList} from './ReviewsList.tsx';

const ExamplesReviewsWeb: React.FC = () => {
    return (
        <main className="flex flex-col p-7 bg-yellow-50 rounded-2xl border-8 border-blue-300 border-solid max-w-[921px] mx-auto mt-8">
            <TopNavigation />
            <CategoryChips />
            <ReviewsList />
        </main>
    );
};

export default ExamplesReviewsWeb;
