import React from 'react';

interface InputFieldProps {
    label: string;
    id: string;
    placeholder: string;
    type: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder, type }) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="mb-2 text-base text-stone-900">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="box-border px-4 py-2 w-full h-10 text-base bg-white rounded-lg border border-solid border-black border-opacity-10 max-sm:text-sm"
            />
        </div>
    );
};