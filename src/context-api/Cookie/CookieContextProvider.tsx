"use client"

import React, { useState, useEffect } from 'react';
import { CookieContext } from './CookieContext'
import { getCookie, getCookies } from 'cookies-next';
import { USER_COOKIE } from '@/utils/constants';

interface CookieProviderProps {
	children: React.ReactNode;
}

const CookieContextProvider = ({ children }: CookieProviderProps) => {
	const [cookies, setCookies] = useState<any>(getCookies());
	const [isCookieUser, setIsCookieUser] = useState<any>(getCookie(USER_COOKIE) || false)


	const updateIsCookieUser = (value: boolean) => {
		setIsCookieUser(value);
	};
	return (
		<CookieContext.Provider value={{ cookies, isCookieUser, updateIsCookieUser }}>
			{children}
		</CookieContext.Provider>
	);
};

export default CookieContextProvider;
