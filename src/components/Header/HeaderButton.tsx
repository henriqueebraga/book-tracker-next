import React from 'react'
import Link from 'next/link';

interface HeaderButtonProps {
    href: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeaderButton = ({ href, label, onClick}: HeaderButtonProps) => {
  return (
    <Link className='w-20' href={href} onClick={onClick}>
        <span className='flex items-center justify-center h-8 bg-[#1e293b] overflow-hidden rounded'>{label}</span>
    </Link>
  )
}
