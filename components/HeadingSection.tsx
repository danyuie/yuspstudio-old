import React from 'react'
import Button from './ui/Button'

type HeadingSectionProp = {
  title: string,
  titleSub: string,
  tag: string
}

const HeadingSection = ({title, titleSub, tag }:HeadingSectionProp) => {
  return (
    <div className='mt-[120px] mb-[80px]'>
      <div className='text-xl text-sky-500 font-bold '>{tag}</div>
      <div className='flex justify-between items-center'>
        <div className='max-w-[880px] font-bold text-5xl tracking-tighter text-gray-400 mt-3'><span className='text-neutral-950'>{title}</span>{titleSub}</div> 
        <Button variant='light' title='Lets work together' link='./' icon='./arrow-right-white.svg'/>
      </div>
    </div>
  )
}

export default HeadingSection