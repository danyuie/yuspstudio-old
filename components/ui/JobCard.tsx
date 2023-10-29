import Link from 'next/link'
import React from 'react'
import Image from 'next/image';


type JobCardProps = {
  title: string,
  desc: string,
  image: string,
  href: string
}

const JobCard = ({title, desc, image, href}:JobCardProps) => {
  return (
    <Link href={href} className='group hover:bg-neutral-800 bg-[#F8F8FC] rounded-[20px]  p-10 flex items-center justify-between' >
      <div className=''>
        <div className='group-hover:text-neutral-50 text-[26px] font-bold leading-10 text-neutral-950 mb-px'>{title}</div>
        <div className='text-base font-normal mb-4 text text-gray-400'>{desc}</div>
        <div><Image src='./arrow-down-dark.svg' alt='' width={10} height={14} /></div>
      </div>
      <div className='hidden sm:block'><Image src={image} alt='' width={150} height={150} className='rounded-[28px] opacity-0 group-hover:opacity-100'/></div>
    </Link>
  )
}

export default JobCard