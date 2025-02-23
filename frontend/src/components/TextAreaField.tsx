import React from 'react';

interface TextAreaFieldProps {
    label: string;
    id: string;
    placeholder: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, placeholder }) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className="input-label">
                {label}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                className="text-area-field"
            />
        </div>
    );
};