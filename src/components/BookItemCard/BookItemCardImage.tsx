import React from 'react'
import Image from 'next/image'

type BookItemCardImageProps = {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export const BookItemCardImage: React.FC<BookItemCardImageProps> = ({ src, height, width, alt }) => {
  return (
    <div className='flex justify-center'>
      <Image 
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  )
}
