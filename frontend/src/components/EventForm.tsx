import React from 'react';
import { CategoryButton } from './CategoryButtonProps.tsx';
import { InputField } from './InputField.tsx';
import { TextAreaField } from './TextAreaField.tsx';

const categories = [
    'Food', 'Exercise', 'Art', 'Games', 'Music',
    'Outdoor', 'Volunteer', 'Literature', 'Animals'
];

interface EventFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="box-border p-8 bg-yellow-50 rounded-2xl border-8 border-blue-300 border-solid h-[680px] w-[1205px] max-md:mx-auto max-md:my-5 max-md:h-auto max-md:w-[90%] max-sm:p-4">
            <div className="p-3 text-sm font-bold bg-green-300 rounded text-neutral-100 w-fit">
                Events
            </div>
            <h1 className="mx-0 mt-5 mb-10 text-6xl tracking-wide text-center text-blue-400 max-sm:text-4xl">
                Write a Post
            </h1>
            <div className="flex flex-wrap gap-2 p-2 mb-5 bg-white rounded-xl max-md:overflow-x-auto max-md:flex-nowrap max-sm:p-1">
                {categories.map((category) => (
                    <CategoryButton key={category} label={category} />
                ))}
            </div>
            <InputField
                label="Location"
                id="location"
                placeholder="City, State"
                type="text"
            />
            <InputField
                label="Event Title"
                id="eventTitle"
                placeholder="Type here..."
                type="text"
            />
            <TextAreaField
                label="Description"
                id="description"
                placeholder="Type here..."
            />
            <button type="submit" className="px-6 py-3 mx-auto my-0 text-base bg-green-300 rounded cursor-pointer border-[none] text-neutral-100">
                Add Post
            </button>
        </form>
    );
};