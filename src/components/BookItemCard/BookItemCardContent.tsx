import React from 'react'

export const BookItemCardContent = ({ children }: { children: React.ReactNode}) => {
	return (
		<div className="flex flex-col">
			{children}
		</div>

	)
}
