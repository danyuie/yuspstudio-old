import React from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import Button from './ui/Button';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto max-w-[1324px] py-10 px-4'>
      <Link href='./' ><Image  src='./Logo.svg' alt='Yusp Studio' width={137} height={45} /></Link>
      <ul className='hidden space-x-6 lg:flex lg:items-center'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='text-sm text-neutral-950 font-semibold cursor-pointer transition-all hover:text-blue-500'>{link.label}</Link>
        ))}
      <Button type='button' title='Contact'/>
      </ul>
      <Image src='./Menu.svg' alt='' width={24} height={24}
      className='inline-block cursor-pointer lg:hidden' 
      />
    </nav>
  )
}

export default Navbar