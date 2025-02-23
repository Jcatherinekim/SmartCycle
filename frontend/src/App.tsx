// @ts-ignore
import React from 'react';
import { Home } from "./components/Home.tsx"; // Make sure the path is correct

import { ReviewItem } from './components/ReviewItem'; // Import your TSX file
import Events from "./components/Events";
import {EventForm} from "./components/EventForm.tsx";
import ExamplesReviewsWeb from "./components/ExamplesReviewsWeb.tsx";

// const App: React.FC = () => {
//     return (
//         <div className="p-4">
//             <h1 className="text-3xl font-bold mb-4">Review List</h1>
//             <ReviewItem
//                 title="The Art of Coffee"
//                 category="Cafe"
//                 price="$$"
//                 distance="1.5 miles"
//                 description="A cozy spot for coffee lovers with a great ambiance and tasty pastries."
//                 iconSrc="/assets/coffee-icon.svg" // Make sure the path is correct
//             />
//         </div>
//     );
// };
const App: React.FC = () => {
    return (
        <div>
            <ExamplesReviewsWeb />  {/* Ensure you're using the correct component name */}
        </div>
    );
};

export default App;