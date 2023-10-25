import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='mx-auto max-w-[1864px] px-4 w-full md:flex md:items-center md:mt-60'>
      <div className='flex flex-col gap-10 items-center md:items-start'>
        <div className='text-blue-700 font-black text-9xl tracking-tighter mt-8 md:text-[300px]/[1]'>404</div>
        <div className='text-slate-950 text-xl tracking-tighter text-center md:text-start md:text-8xl'>Somethings went <b>wrong.</b></div>
        <Link className='text-xl font-bold tracking-tighter underline md:text-5xl md:mt-24' href='./' >Go back Home</Link>   
      </div>
      <div className='hidden md:block w-1/2 rounded-3xl overflow-hidden '><Image className='w-full h-full' src='./image/404.png' width={10} height={10} alt='' /></div>
    </div>
  )
}

export default NotFound