import React from 'react'

type PropsType = {
    name: string,
    item: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegistrationFormLabel = ({ item, label, onChange, name} : PropsType) => {
    return (
        <label
            key={item}
            className="flex flex-col"
        >
            <span>{label}:</span>
            <input
                type="text"
                name={name}
                onChange={onChange}
                placeholder={label}
                className="mt-1 p-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-400"
            />
        </label>
    )
}
