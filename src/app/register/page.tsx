import { RegistrationForm } from '@/components/RegistrationForm';
import React from 'react'

const Register = () => {
    return (
        <div className="max-w-md mx-auto mt-8 p-4 pb-10 shadow-md rounded-md" style={{ backgroundColor: '#2A5996' }}>
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">Register</h2>
            <RegistrationForm />
        </div>
    )
}

export default Register;