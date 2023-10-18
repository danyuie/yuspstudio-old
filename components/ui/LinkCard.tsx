import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type LinkCardProps = {
  title: string,
  bglink?: string,
  style?: string,
  textColor: string,
  link: string
}
const LinkCard = ({title, bglink, style ,textColor, link}: LinkCardProps) => {
  return (
    <Link href={link?link:'./'} className={`bg-slate-100 ${bglink} border-transparent border-2 p-6 rounded-3xl w-full h-full flex flex-col justify-between ${bglink} ${style} hover:border-2 hover:border-gray-200 `}>
      {/* <Image src={bglink?bglink:'./'} width={24} height={24} alt='' className='relative'/> */}
      <div className='flex justify-end'><button className='cursor-pointer p-4 rounded-full bg-white '><Image alt='' width={24} height={24} src='./arrow-right-top.svg' /></button></div>
        <div className={`font-bold tracking-tighter max-w-[140px] text-3xl ${textColor}`}>{title}</div>
    </Link>
  )
}

export default LinkCard