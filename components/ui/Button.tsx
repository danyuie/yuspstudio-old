import Image from 'next/image'
import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit',
  title: string,
  icon?: string,
  variant?: string
}

const Button = ({type, title, icon, variant}:ButtonProps) => {
  return (
    <button type={type} className='py-2.5 px-5 rounded-full bg-gray-100 '>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='cursor-pointer text-sm text-neutral-950 font-semibold' >{title}</label>

    </button>
  )
}

export default Button