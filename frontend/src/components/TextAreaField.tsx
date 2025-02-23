import React from 'react';

interface TextAreaFieldProps {
    label: string;
    id: string;
    placeholder: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, placeholder }) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="mb-2 text-base text-stone-900">
                {label}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                className="box-border px-4 py-2 w-full h-20 text-base bg-white rounded-lg border border-solid resize-none border-black border-opacity-10 max-sm:text-sm"
            />
        </div>
    );
};