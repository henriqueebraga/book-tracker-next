import { LoginForm } from '@/components/LoginForm'
import React from 'react'

const Login = () => {
    return (
        <div className="max-w-md mx-auto mt-8 p-4 pb-10 shadow-md rounded-md" style={{ backgroundColor: '#2A5996' }}>
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">Login</h2>
            <LoginForm />
        </div>
    )
}

export default Login