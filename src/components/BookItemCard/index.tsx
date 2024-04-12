import React from 'react'
import { BookItemCardImage } from './BookItemCardImage'
import { BookItemCardContent } from './BookItemCardContent'
import { BookItemCardProgressBar } from './BookItemCardProgressBar'

export const BookItemCard = ({ children }: { children: React.ReactNode}) => {
	return (
		<div className='w-full xs:w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/5 px-6 mb-8 h-250'>
			{children}
		</div>
	)
}

BookItemCard.Image = BookItemCardImage
BookItemCard.Content = BookItemCardContent
BookItemCard.Progress = BookItemCardProgressBar