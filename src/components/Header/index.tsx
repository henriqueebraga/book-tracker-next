import { cookies } from 'next/headers';
import React from 'react'
import { getUserCookie } from '@/utils/cookieServer'
import { HeaderNavigationLinks } from './HeaderNavigationLinks';
import { HeaderIconLinks } from './HeaderIconLinks';

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <HeaderNavigationLinks />
            <HeaderIconLinks />
        </header>
    )
}