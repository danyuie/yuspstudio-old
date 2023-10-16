import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center pt-20 md:pt-[128px] px-4 mx-auto max-w-[1324px]'>
      <div className=' flex flex-col items-center max-w-[487px]'>
        <Link href='./' ><Image  src='./Logo.svg' alt='Yusp Studio' width={137} height={45} /></Link>
        <div className='font-normal text-[14px]/[22px] md:text-lg mt-8 mb-10 md:mb-[60px] text-center text-neutral-500'>We are your partner in turning your vision into reality. Let us show you the power of imagination.</div>
        <div className='flex gap-4 md:gap-10 items-center mb-5 md:mb-10'>
          {FOOTER_LINKS.map((link) => (
            <Link className='text-[12px]/[20px] md:text-base font-medium text-neutral-400 tracking-tight' href={link.href} key={link.key}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between py-5 border-t border-gray-100'>
        <div className='text-[12px]/[20px] md:text-base font-normal text-neutral-400'>© 2023 All rights reserved</div>
        <div className='flex items-center gap-4'>
          <div className='text-[12px]/[20px] md:text-base text-blue-500 font-bold tracking-tighter'>Follows Us</div>
          {SOCIAL_LINKS.map((link) =>
          (
            <a className='hidden md:block' href={link.href} key={link.key} target="_blank" > <Image src={link.src} alt='' width={24} height={24} /></a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer