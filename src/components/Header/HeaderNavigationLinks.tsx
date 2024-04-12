import React from 'react'
import HeaderLink from './HeaderLink'

export const HeaderNavigationLinks = () => {
    return (
        <div className="flex items-center">
            <HeaderLink href="/" label='Home' />
            <HeaderLink href="/books" label='Books' />
        </div>
    )
}
