import { SOCIAL_LINKS,FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
    <div className='mx-auto max-w-[1864px] mt-4 p-4 text-slate-950 text-xs md:text-base tracking-tight'>
      <div className='flex justify-between mb-4 lg:mb-6'>
        <div className="flex gap-2 items-center">
          {SOCIAL_LINKS.map((link) => (
            <a className='h-fit rounded-full border border-slate-300 md:p-2' href={link.href} key={link.key}><Image alt='' src={link.src} width={0} height={0} className='w-6 h-6'/></a>
            ))}
        </div>
        <div className="hidden lg:flex gap-6 mr-20 items-center">
          {FOOTER_LINKS.map((item)=>(
            <Link key={item.key} href={item.href} >{item.label}</Link>
          ))}
        </div>
        <div className="h-fit py-2 px-4 bg-gray-100 rounded-full">Our resume</div>
      </div>
      <div className='flex justify-between items-center'>
        <Link href='./privacy-and-policy'>Privacy and Policy</Link>
        <div>All right are reserved © <b>Yusp Studio</b></div>
      </div>
    </div>
  )
}

export default Footer