import React from "react";
import './reviews.css';

interface ReviewItemProps {
    title: string;
    category: string;
    description: string;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
                                                          title,
                                                          category,
                                                          description
                                                      }) => {
    return (
        <div className="review-item">
            <div>
                <h3 className="review-title">{title}</h3>
                <p className="review-category">{category}</p>
                <p className="review-description">{description}</p>
            </div>
            <button className="heart-button">♥</button>
        </div>
    );
};
