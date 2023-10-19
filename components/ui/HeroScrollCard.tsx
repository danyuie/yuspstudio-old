import React from 'react'
import Image from 'next/image';

type HeroScrollCardProps = {
  title: string,
  desc: string,
  linkImage: string,
  styleImage?: string,
  style?: string
}
const HeroScrollCard = ({title, desc, linkImage,styleImage,style}:HeroScrollCardProps) => {
  return (
   <div className='mr-2 md:mr-4'>
     <div className={`rounded-xl overflow-hidden bg-white w-full ${style?style:''}`}>
      <div className='w-full h-[113px] overflow-hidden'><Image className={`w-full h-full object-cover ${styleImage?styleImage:''}`} src={linkImage} width={0} height={0} alt=''/></div>
      <div className='h-1/2 p-4 flex flex-col gap-2'>
        <div className='font-bold text-base tracking-tight text-slate-950'>{title}</div>
        <div className='text-xs text-gray-400 line-clamp-2 '>{desc}</div>
      </div>
    </div>
   </div>
  )
}

export default HeroScrollCard