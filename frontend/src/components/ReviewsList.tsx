"use client";

// @ts-ignore
import React from "react";
import { ReviewItem } from "./ReviewItem";

const reviewsData = [
    {
        title: "List item",
        category: "Category",
        description:
            "Supporting line text lorem ipsum dolor sit amet, consectetur.",
        iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3adf42a3238f15d28ff1c667b9f92e64530bc79405cf1eb9d59d6b2c146997e9",
    },
    {
        title: "List item",
        category: "Category",
        price: "$$",
        distance: "1.2 miles away",
        description:
            "Supporting line text lorem ipsum dolor sit amet, consectetur.",
        iconSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/ad6693da9706fb2c70a11c7dd2b9e4775f50523f80dc155dbfabc4723fbd0ea7",
    },
];

export const ReviewsList: React.FC = () => {
    return (
        <section className="relative mt-6">
            <div className="flex z-0 w-full bg-blue-300 rounded-3xl min-h-[637px]" />
            <div className="flex absolute bottom-0 left-2/4 z-0 flex-col max-w-full rounded-xl -translate-x-2/4 h-[605px] translate-y-[0%] w-[802px]">
                <div className="px-2 bg-white rounded-xl border border-white border-solid min-h-[605px]">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="mt-1 w-full min-h-[88px]">
                            <ReviewItem {...review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
