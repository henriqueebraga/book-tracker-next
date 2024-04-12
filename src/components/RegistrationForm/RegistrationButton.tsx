import React from 'react'

export const RegistrationButton = ({ handleSubmit }: any) => {
    return (
        <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
            Register
        </button>
    )
}
