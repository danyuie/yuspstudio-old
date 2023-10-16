import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  variant: 'dark'|'light',
  title?: string,
  icon?: string,
  link: string,
  style?: string
}

const Button = ({variant, title, icon, link,style}:ButtonProps) => {
  return (
    <Link href={link} className={`rounded-2xl py-5 px-[26px] inline-flex gap-5 items-center w-auto h-full ${style} ${variant=='dark'?'bg-white':'bg-neutral-950'}`}>
      <label className={`text-lg tracking-tight font-semibold cursor-pointer ${variant=='dark'?'text-neutral-950':'text-neutral-50'}`} >{title}</label>
      {icon && <Image src={icon} alt='' width={24} height={24} />}
    </Link>
  )
}
// py-2.5 px-5 rounded-full bg-gray-100 cursor-pointer
export default Button