import React from 'react';
import './components/reviews.css';
import { TopNavigation } from './components/TopNavigation.tsx';
import { CategoryChips } from './components/CategoryChips.tsx';
import { ReviewsList } from './components/ReviewsList.tsx';

const App: React.FC = () => {
    return (
        <div className="app">
            <TopNavigation />
            <CategoryChips />
            <ReviewsList />
        </div>
    );
};

export default App;
