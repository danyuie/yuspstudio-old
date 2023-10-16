"use client"
import React, { useState } from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);
  return (
    <nav className='sticky top-0 z-10 py-10  bg-white/10 backdrop-blur-3xl'>
      <div className='mx-auto max-w-[1324px] px-4 flex items-center justify-between '>
      <Link href='./' ><Image  src='./Logo.svg' alt='Yusp Studio' width={137} height={45} /></Link>
      <ul className='hidden space-x-6 lg:flex lg:items-center'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='text-sm text-neutral-950 font-semibold tracking-tight cursor-pointer transition-all hover:text-blue-500'>{link.label}</Link>
        ))}
      <Link href='./contact' className='py-2.5 px-5 rounded-full bg-gray-100 cursor-pointer text-sm font-semibold tracking-tight'>Contact</Link>
      </ul>
      
      <button className='inline-block cursor-pointer lg:hidden' onClick={() => setNavbar(!navbar)}>
        {navbar? <Image src='./close.svg' alt='' width={24} height={24} /> : <Image src='./Menu.svg' alt='' width={24} height={24}/>}
      </button>
      {!navbar? '':(
        <div className='absolute w-screen h-screen bg-white top-0 right-0 z-20 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6'>
          {NAV_LINKS.map((link) => (
          <Link onClick={() => setNavbar(!navbar)} href={link.href} key={link.key} className='text-[26px]/[40px] font-bold'>{link.label}</Link>
        ))}
          <Link href='./contact' className='w-fit py-2.5 px-6 rounded-full bg-gray-100 cursor-pointer text-[18px]/[30px] font-bold tracking-tight'>Contact</Link>
          <button className='inline-block cursor-pointer lg:hidden' onClick={() => setNavbar(!navbar)}>
          <Image src='./close.svg' alt='' width={24} height={24} />
          </button>
        </div>
      </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar