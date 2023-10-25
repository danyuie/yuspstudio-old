import Image from 'next/image'
import React from 'react'

type ButtonSliderProps = {
  title: string,
  linkIcon: string,
  Color: string,
}

const ButtonSlider = ({title, linkIcon,  Color}:ButtonSliderProps) => {
  return (
    <div className={`${Color} flex items-center gap-3 rounded-full w-fit h-fit py-2 px-4`}>
      <div className='w-6 h-6'><Image src={linkIcon} alt='' width={24} height={24}/></div>
      <div className='whitespace-nowrap tracking-tight font-medium'>{title}</div>
    </div>
  )
}

export default ButtonSlider