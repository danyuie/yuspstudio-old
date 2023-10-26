import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
type LinkCardProps = {
  title: string,
  bglink?: string,
  style?: string,
  textColor: string,
  link: string,
  handle?: (e:any)=>void,
}
const LinkCard = ({title, bglink, style ,textColor, link,handle = () => {}}: LinkCardProps) => {
  return (
    <Link onClick={handle} href={link?link:'./'} className={`bg-slate-100 ${bglink} bg-cover border-gray-200 border-2 p-6 rounded-3xl w-full h-full flex flex-col justify-between ${style} hover:border-gray-300
    ease-linear duration-200 dark:border-neutral-900 dark:dark:border-neutral-800`}>
      {/* <Image src={bglink?bglink:'./'} width={24} height={24} alt='' className='relative'/> */}
      <div className='flex justify-end'><Button type='icon-md' icon='ArrowTopRight' /></div>
        <div className={`font-bold tracking-tighter max-w-[140px] text-3xl ${textColor} md:text-5xl md:max-w-[200px]`}>{title}</div>
    </Link>
  )
}

export default LinkCard