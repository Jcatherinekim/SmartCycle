import React from "react";
import { ReviewItem } from "./ReviewItem.tsx";
import './reviews.css';

export function ReviewsList() {
    const items = [
        {
            title: "List item",
            category: "Category",
            description:
                "Supporting line text lorem ipsum dolor sit amet, consectetur.",
        },
        {
            title: "List item",
            category: "Category",
            description:
                "Supporting line text lorem ipsum dolor sit amet, consectetur.",
        },
    ];

    return (
        <div className="reviews-list">
            {items.map((item, index) => (
                <ReviewItem key={index} {...item} />
            ))}
        </div>
    );
}
