'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { HeaderIcon } from './HeaderIcon';
import Image from 'next/image';
import { HeaderButton } from './HeaderButton';
import { getCookie } from 'cookies-next';
import { USER_COOKIE } from '@/utils/constants';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { UseCookieContext } from '@/context-api/Cookie/CookieContext';

// Lazily loaded components
const LazyHeaderContentBox: React.ComponentType<{children: ReactNode}> = dynamic(() => import('./HeaderContentBox'), {
	ssr: false,
  });

export function HeaderIconLinks() {
	const { isCookieUser, updateIsCookieUser } = UseCookieContext();
	const [dataCyLogin, setDataCyLogin] = useState('');
	const userCookie = getCookie(USER_COOKIE)
	useEffect(() => {
		updateIsCookieUser(!!userCookie)
	}, [])
	useEffect(() => {
		setDataCyLogin(`authDropdown-${isCookieUser ? 'logged-in' : 'logged-out'}`);
	  }, [isCookieUser]);
	const logout = async () => {
        try {
            const response = await axios.post('/api/auth/logout')
			updateIsCookieUser(false)
            return response
        } catch (error) {
            console.log(error)
        }
    }
	return (
		<div className="flex items-center">
			<HeaderIcon>
			<div className="relative group mx-2" data-cy={dataCyLogin}>
					<Image
						src='/profile.svg'
						alt='profile'
						width={25}
						height={25}
					/>
					<div className="absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 overflow-hidden" data-cy="authDropdownContent">
						<LazyHeaderContentBox>
							<div className='bg-[#4d6b9d] p-2 w-32 h-20 rounded'>
								{!isCookieUser ? (
									<>
										<HeaderButton href='/login' label='Login' />
									</>
								) : (
									<>
										<HeaderButton onClick={logout} href='' label='Logout' />
									</>
								)}
							</div>
						</LazyHeaderContentBox>
					</div>
				</div>
			</HeaderIcon>
			<HeaderIcon>
				<a href='/library' className='mx-2'>
					<Image
						src='/heart.svg'
						alt='favorite'
						width={25}
						height={25}
					/>
				</a>
			</HeaderIcon>
		</div>
	)
}

