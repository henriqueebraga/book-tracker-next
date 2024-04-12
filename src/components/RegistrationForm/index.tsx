"use client"
import React, { useState } from 'react'
import { RegistrationFormLabel } from './RegistrationFormLabel'
import { RegistrationButton } from './RegistrationButton'
import { StatusMessage } from '../StatusMessage'

type FormPropsType = {
	firstName: string,
	lastName: string,
	email: string,
	dob: string,
	password: string,
	repeatPassword: string
}

type StatusMessageTypes = {
	type: 'success' | 'error';
	message: string
}

export const RegistrationForm = () => {
	const [formData, setFormData] = useState<FormPropsType>({
		firstName: '',
		lastName: '',
		email: '',
		dob: '',
		password: '',
		repeatPassword: '',
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
	const labels: { [key in keyof FormPropsType]: string } = {
		firstName: 'First name',
		lastName: 'Last name',
		email: 'Email',
		dob: 'Date of Birth',
		password: 'Password',
		repeatPassword: 'Repeat Password',
	}
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	const handleRegister = async () => {
		console.log('executed')
		try {
			if (formData.password !== formData.repeatPassword) {
				handleStatusMessage('error', 'Passwords do not match')
				return;
			}

			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				handleStatusMessage('success', 'Registered successfully')
			} else {
				handleStatusMessage('error', 'Registration failed')
			}
		} catch (error: any) {
			handleStatusMessage('error', 'Error during registration')
		}
	};
	return (
		<>
			<form className="flex flex-col space-y-4">
				{Object.keys(formData).map((key) => (
					<React.Fragment key={key}>
						<RegistrationFormLabel
							item={key}
							onChange={handleOnChange}
							label={labels[key as keyof FormPropsType]}
							name={key}
						/>
					</React.Fragment>
				))}
				<RegistrationButton handleSubmit={handleRegister} />
			</form>
			{!!statusMessage.message ? (
				<StatusMessage>
					<StatusMessage.Content text={statusMessage.message} size='small' variant={statusMessage?.type} />
				</StatusMessage>
			) : null}
		</>
	)
}
