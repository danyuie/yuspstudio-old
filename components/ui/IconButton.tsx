import Image from 'next/image'
import React from 'react'

const IconButton = ({style,iconStyle,icon}:any) => {
  return (
    <button className={`cursor-pointer rounded-full bg-white w-fit h-fit ${style}`}><Image className={iconStyle} alt='' width={24} height={24} src={icon?icon:'./arrow-right-top.svg'} /></button>
  )
}

export default IconButton