"use client"
import React, { useEffect, useState } from 'react'
import Icon from './svgs/Icon';

const Loading = () => {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    // document.body.classList.add("overflow-y-hidden")
    }, [loading]);
  
  return (
    <div className='w-screen h-screen bg-neutral-950 absolute top-0 right-0 z-20 flex justify-center items-center'>
      <div className='w-[140px] text-slate-50 '><Icon className='dark:text-slate-50' name="Logo" /></div>
    </div>
  )
}

export default Loading