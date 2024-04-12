import { cookies } from 'next/headers';
import {  getCookie } from 'cookies-next';
import { redirect } from 'next/navigation'

export default function Library() {
	const myCookie = cookies()?.get('userJWT')?.value;
	
	if (!myCookie) {
		redirect('/')
	}
	return (
		<div>
			library
		</div>
	)
}