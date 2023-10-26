import Button from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const {theme, setTheme } = useTheme();
  useEffect(()=>{
    setMounted(true);
  },[])
  const handleSwitch = (props:any) => {
    setOpen(!open)
    setTheme(props)
  }
  // solution
  
  if (!mounted) {
    return null;
  }
  return (
    <div className='relative'>
      {/* the current theme is: {theme}
      <button onClick={() => setTheme("light") }>Light</button>
      <button onClick={() => setTheme("dark") }>Dark</button> */}
      <div onClick={()=>setOpen(!open)} > <Button type='icon-md' icon={theme === 'light'?'Sun':'Moon'}></Button></div>
      {open && (
        <div className='w-20 bg-slate-50 rounded-lg border border-gray-200 absolute top-16 right-0 z-10 p-1 dark:bg-neutral-900 dark:border-neutral-700'>
        <button  onClick={() => handleSwitch("light") } className='px-2 py-1 hover:bg-slate-100 rounded-[4px] w-full text-sm dark:hover:bg-neutral-800'>Light</button>
        <button onClick={() => handleSwitch("dark")} className='px-2 py-1 hover:bg-slate-100 rounded-[4px] w-full text-sm dark:hover:bg-neutral-800'>Dark</button>
      </div>
      )}
    </div>
  )
}

export default ThemeSwitcher