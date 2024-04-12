"use client"
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { StatusMessage } from '../StatusMessage';
import { UseCookieContext } from '@/context-api/Cookie/CookieContext';

type StatusMessageTypes = {
	type: 'success' | 'error';
	message: string
}

export const LoginForm = () => {
    const { updateIsCookieUser } = UseCookieContext()
    const { push, refresh } = useRouter()
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [statusMessage, setStatusMessage] = useState<StatusMessageTypes>({
		type: 'success' || 'error',
		message: ''
	})
    const handleStatusMessage = ( type: StatusMessageTypes['type'], message: StatusMessageTypes['message']) => {
		setStatusMessage({
			type,
			message
		})
		setTimeout(() => {
			setStatusMessage({
				type: 'success' || 'error',
				message: ''
			})
		}, 600)	
	}
    const handleLogin = async () => {
        try {
            const { data } = await axios.post('/api/auth/login', loginForm);
            handleStatusMessage('success', data.message)
            updateIsCookieUser(true)
            setTimeout(() => push('/books'), 500)
            refresh();
            
        } catch(error) {
            handleStatusMessage('error', 'Your email and password does not match. Please try again.')
        }
    };
    return (
        <form className="flex flex-col space-y-4">
            <label className="flex flex-col">
                <span className="text-white">Username:</span>
                <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                    className="mt-1 p-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-400"
                />
            </label>
            <label className="flex flex-col">
                <span className="text-white">Password:</span>
                <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="mt-1 p-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-400"
                />
            </label>
            <button
                type="button"
                onClick={handleLogin}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
                Login
            </button>
            {!!statusMessage.message ? (
				<StatusMessage>
					<StatusMessage.Content text={statusMessage.message} size='small' variant={statusMessage?.type} />
				</StatusMessage>
			) : null}
        </form>
    )
}
