import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon, { IconNameType } from '../svgs/Icon'
import { twMerge } from 'tailwind-merge'

type ButtonProps  = {
  style?:string,
  title?: string,
  icon?: IconNameType,
  link: string,
  type: 'xs' | 'md' | 'sm' | 'icon-sm' | 'icon-md',
  iconStyle?: string
  router?: boolean,
  blank?: string,
  handle?: () => void
  
}
const buttonType = {
  xs: 'flex gap-2 py-2 px-4 text-slate-950 w-fit h-fit items-center bg-gray-100 text-base tracking-tighter cursor-pointer dark:bg-neutral-900 dark:text-slate-50',
  md: 'flex gap-8 py-4 px-5 text-slate-950 w-fit h-fit items-center text-base font-semibold tracking-tighter cursor-pointer bg-gray-100 dark:bg-neutral-900 dark:text-slate-50',
  sm: 'flex gap-2 py-[10px] px-4 text-slate-950 w-fit h-fit items-center border border-slate-950 text-base font-medium tracking-tighter cursor-pointer dark:bg-neutral-900 dark:text-slate-50 ',
  iconSm: 'p-1 bg-white text-slate-950 w-fit h-fit block dark:bg-neutral-900 dark:text-slate-50',
  iconMd: 'p-3 md:p-4 bg-white text-slate-950 w-fit h-fit block dark:bg-neutral-900 dark:text-slate-50',
}
const Button = ({handle, title, icon, link, style, type, iconStyle, router ,blank}:ButtonProps) => {
  return (
    <>
    {router ? 
    <Link href={link || './'} className={twMerge(`${type === 'icon-sm'?buttonType.iconSm:''} ${type === 'icon-sm'?buttonType.iconSm:''} ${type === 'icon-md'?buttonType.iconMd:''} ${type === 'xs'?buttonType.xs:''} ${type === 'md'?buttonType.md:''} ${type === 'sm'?buttonType.sm:''} rounded-full`,style)}>
    {type === 'icon-sm' || type === 'icon-md' ? '':<label className='cursor-pointer'>{title}</label>}
    {icon && <Icon name={icon} className={`${iconStyle} w-6 h-6`}/>}
  </Link>
    :
    <a onClick={handle} href={blank} target={blank?'_blank':''} className={twMerge(`${type === 'icon-sm'?buttonType.iconSm:''} ${type === 'icon-sm'?buttonType.iconSm:''} ${type === 'icon-md'?buttonType.iconMd:''} ${type === 'xs'?buttonType.xs:''} ${type === 'md'?buttonType.md:''} ${type === 'sm'?buttonType.sm:''} rounded-full cursor-pointer`,style)}>
      {type === 'icon-sm' || type === 'icon-md' ? '':<label className='cursor-pointer'>{title}</label>}
      {icon && <Icon name={icon} className={`${iconStyle} w-6 h-6`}/>}
    </a>
    }
    </>
  )
}
export default Button