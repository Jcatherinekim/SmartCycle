import React from 'react';
import { CategoryButton } from './CategoryButtonProps.tsx';
import { InputField } from './InputField.tsx';
import { TextAreaField } from './TextAreaField.tsx';
import './EventForm.css'; //for styling

const categories = [
    'Food', 'Exercise', 'Art', 'Games', 'Music',
    'Outdoor', 'Volunteer', 'Literature', 'Animals'
];

interface EventFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="event-form">
            <div>
                <button type="submit"
                        className="event-form__button">
                    Events
                </button>
            </div>
            <h1 className="event-form__header">
                Write a Post
            </h1>
            <div className="event-form__category-container">
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
            <button type="submit" className="add-post-button">
                Add Post
            </button>
        </form>
    );
};