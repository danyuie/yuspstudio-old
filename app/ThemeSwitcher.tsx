import Button from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme();
  useEffect(()=>{
    setMounted(true);
  },[])

  if (!mounted) {
    return null;
  }
  return (
    <div className='relative'>
      <div onClick={()=>setTheme(theme == 'dark'? 'light': 'dark')} > <Button link='' type='icon-md' icon={theme === 'light'?'Sun':'Moon'}></Button></div>
    </div>
  )
}

export default ThemeSwitcher