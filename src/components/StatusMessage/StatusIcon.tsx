import React from 'react'

type StatusIconType = {
    src: string
    height: number
    width: number
}

export const StatusIcon = ({ src, height, width }: StatusIconType) => {
  return (
    <img src={src} height={height} width={width}/>
  )
}
