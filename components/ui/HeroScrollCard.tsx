import React from 'react'
import Image from 'next/image';

type HeroScrollCardProps = {
  title: string,
  desc: string,
  linkImage: string,
  styleImage?: string,
}
const HeroScrollCard = ({title, desc, linkImage,styleImage}:HeroScrollCardProps) => {
  return (
    <div className='rounded-xl overflow-hidden bg-white w-full'>
      <div className='w-full h-[113px] overflow-hidden'><Image className={`w-full object-cover ${styleImage}`} src={linkImage} width={0} height={113} alt=''/></div>
      <div className='h-1/2 p-4 flex flex-col gap-2'>
        <div className='font-bold text-base tracking-tight text-slate-950'>{title}</div>
        <div className='text-xs text-gray-400'>{desc}</div>
      </div>
    </div>
  )
}

export default HeroScrollCard