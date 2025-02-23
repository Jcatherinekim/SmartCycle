"use client";

// @ts-ignore
import React from "react";

export const TopNavigation: React.FC = () => {
    return (
        <header className="flex flex-wrap gap-5 justify-between items-start self-center w-full">
            <button className="flex overflow-hidden gap-2 items-center px-4 py-3.5 text-base leading-none whitespace-nowrap bg-white rounded-full border border-solid border-zinc-300 min-h-[43px] text-stone-900">
        <span className="flex-1 shrink self-stretch my-auto basis-0">
          Location
        </span>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538"
                    alt="Location icon"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
            </button>

            <nav className="flex gap-4 items-center">
                <button className="overflow-hidden gap-2 self-stretch p-3 my-auto text-base leading-none bg-green-300 rounded-lg border border-solid border-zinc-300 text-neutral-100">
                    Make Posts
                </button>
                <button className="overflow-hidden gap-2 self-stretch p-3 my-auto text-base leading-none bg-green-300 rounded-lg border border-solid border-zinc-300 text-neutral-100">
                    Sign Out
                </button>
                <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3 w-11 h-11 bg-green-300 border border-solid border-zinc-300 rounded-[32px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d99a06c214e3b9c1ea676b599b127042a5f518392a2123440df732f26735fde2"
                        alt="Menu icon"
                        className="object-contain self-stretch my-auto w-5 aspect-square"
                    />
                </button>
            </nav>
        </header>
    );
};
