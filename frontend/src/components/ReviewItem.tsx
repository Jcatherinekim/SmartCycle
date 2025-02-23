"use client";

// @ts-ignore
import React from "react";

interface ReviewItemProps {
    title: string;
    category: string;
    price: string;
    distance: string;
    description: string;
    iconSrc: string;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
                                                          title,
                                                          category,
                                                          price,
                                                          distance,
                                                          description,
                                                          iconSrc,
                                                      }) => {
    return (
        <article className="w-full">
            <div className="flex flex-wrap gap-4 items-start px-4 py-3 w-full">
                <div className="flex-1 shrink basis-0 min-w-60">
                    <h3 className="flex-1 shrink gap-2 self-stretch w-full text-2xl font-semibold tracking-tight leading-tight basis-0 text-ellipsis text-zinc-900">
                        {title}
                    </h3>
                    <div className="mt-2 w-full text-base leading-none text-zinc-700">
                        <p className="flex-1 shrink gap-1 self-stretch w-full basis-0">
                            {category} • {price} • {distance}
                        </p>
                        <p className="text-ellipsis">{description}</p>
                    </div>
                </div>
                <div className="flex gap-2.5 items-start w-6 min-h-16">
                    <img
                        loading="lazy"
                        src={iconSrc}
                        alt=""
                        className="object-contain w-6 aspect-square"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center px-4 w-full">
                <hr className="w-full border border-solid bg-stone-300 border-stone-300 min-h-px" />
            </div>
        </article>
    );
};
