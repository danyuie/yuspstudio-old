import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  style?: string,
  title?: string,
  icon?: string,
  link: string

}

const Button = ({ title, icon, link, style}:ButtonProps) => {
  return (
    <Link href={link} className={`flex items-center py-4 px-5 rounded-full cursor-pointer gap-8 ${style}`}>
      <label className='text-base font-semibold tracking-tighter cursor-pointer' >{title}</label>
      {icon && <Image src={icon} alt='' width={24} height={24} />}
    </Link>
  )
}
export default Button