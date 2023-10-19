"use client"
import React, { useState } from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
import LinkCard from './ui/LinkCard';

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);
  const handel = () => {
    setNavbar(!navbar);
  }
  return (
    <nav className='p-7 flex justify-between relative items-center mx-auto max-w-[1864px] px-4'>
      <Link href='./'><Image src='./Logo.svg' width={137} height={45} alt='Yusp Studio'/></Link>
      <div className='flex gap-4'>
        <Button style='hidden md:flex bg-gray-100' title='Contact Us' link='./contact' icon='./arrow-right-top.svg' />
        <button className='p-4 rounded-full bg-gray-100 cursor-pointer' onClick={() => setNavbar(!navbar) }><Image src='./grid-fill.svg' alt='' width={24} height={24} /></button>
      </div>
      {!navbar ? '': (
        <div className='fixed top-0 right-0 bg-white p-4 w-screen h-screen flex flex-col justify-between z-10 pb-7 md:p-7'>
          <div className='flex justify-between items-start h-1/6'>
            <div className='tracking-tighter font-semibold text-3xl text-stone-950 md:text-5xl'>Menu.</div>
            <button className='p-4 rounded-full bg-gray-100 cursor-pointer' onClick={() => setNavbar(!navbar) }><Image src='./asterisk-fill.png' alt='' width={24} height={24} /></button>
          </div>
          <div className='flex flex-col gap-2 h-full md:gap-4'>
            <div className='flex gap-2 h-1/3 md:gap-4'>
              <LinkCard handle={handel} style='hover:drop-shadow-2xl group hover:bg-top bg-center' bglink='bg-menu-about' link='./about' title='About Yups' textColor='text-slate-50'/>
              <LinkCard handle={handel} style='hover:drop-shadow-2xl group hover:bg-top bg-center' bglink='bg-menu-project' link='./work' title='Future Project' textColor='text-slate-50'/> 
            </div>
            <div className='flex gap-2 h-full md:gap-4'>
              <div className=' w-1/2 h-full'>
                <LinkCard handle={handel} style='hover:drop-shadow-2xl group hover:bg-top bg-center' bglink='bg-menu-blog' link='./blog' title='Check Our Blog' textColor='text-slate-50'/>
              </div>
              <div className='flex flex-col gap-2 w-1/2 h-full duration-200 md:gap-4'>
                <LinkCard handle={handel} style='hover:drop-shadow-2xl group hover:bg-blue-700' link='./process-work' title='Process Work' textColor='text-slate-800 group-hover:text-slate-50'/>
                <LinkCard handle={handel} style='hover:drop-shadow-2xl bg-transparent border-slate-200 hover:bg-slate-100 group hover:bg-blue-700' link='./contact' title='Our Contact' textColor='text-slate-800 group-hover:text-slate-50'/>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar