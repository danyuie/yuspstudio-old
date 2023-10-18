"use client"
import React, { useState } from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import Button from './ui/Button';
import LinkCard from './ui/LinkCard';

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);
  console.log(navbar)
  return (
    <nav className='p-7 flex justify-between relative items-center'>
      <Link href='./'><Image src='./Logo.svg' width={137} height={45} alt='Yusp Studio'/></Link>
      <div className='flex gap-4'>
        <Button style='hidden md:flex' title='Contact Us' link='./contact' icon='./arrow-right-top.svg' />
        <button className='p-4 rounded-full bg-gray-100 cursor-pointer' onClick={() => setNavbar(!navbar) }><Image src='./grid-fill.svg' alt='' width={24} height={24} /></button>
      </div>
      {!navbar ? '': (
        <div className='fixed top-0 right-0 bg-white p-4 w-screen h-screen flex flex-col justify-between z-10'>
          <div className='flex justify-between items-start h-1/6'>
            <div className='tracking-tighter font-semibold text-3xl text-stone-950'>Menu.</div>
            <button className='p-4 rounded-full bg-gray-100 cursor-pointer' onClick={() => setNavbar(!navbar) }><Image src='./asterisk-fill.png' alt='' width={24} height={24} /></button>
          </div>
          <div className='flex flex-col gap-2 h-full'>
            <div className='flex gap-2 h-1/3'>
              <LinkCard link='./about' title='About Yups' textColor='text-slate-800'/>
              <LinkCard link='./work' title='Future Project' textColor='text-slate-800'/> 
            </div>
            <div className='flex gap-2 h-full'>
              <div className=' w-1/2 h-full'>
                <LinkCard link='./blog' title='Check Our Blog' textColor='text-slate-800'/>
              </div>
              <div className='flex flex-col gap-2 w-1/2 h-full'>
                <LinkCard link='./process-work' title='Process Work' textColor='text-slate-800'/>
                <LinkCard link='./contact' title='Our Contact' textColor='text-slate-800'/>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar