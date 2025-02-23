import React from 'react';

interface InputFieldProps {
    label: string;
    id: string;
    placeholder: string;
    type: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder, type }) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className="input-label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="input-field"
            />
        </div>
    );
};