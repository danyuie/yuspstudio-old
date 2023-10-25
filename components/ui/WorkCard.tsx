import Image from 'next/image'
import React from 'react'
import Button from './Button'
type WorkProps = {
  tag: string,
  title: string,
  exprest: string,
  time: string,
  slug: string,
  image: string,
}
const WorkCard = ({tag, title, exprest, time, slug, image}:WorkProps) => {
  return (
    <div className='flex p-6 flex-col gap-14 rounded-3xl' style={{backgroundImage: `url("${image}")`}}>
      <div className='flex flex-col gap-24'>
        <div className='flex justify-between'>
          <div className='text-lg font-semibold text-slate-50 tracking-tight rounded-full bg-white/10 px-6 py-4 backdrop-blur-2xl'>{tag}</div>
          <Button type='icon-md' style='bg-white/10 backdrop-blur-2xl border border-slate-50/20 text-slate-50' icon='ThreeDot'/>
        </div>
        <div className='flex flex-col gap-4' >
          <div className='font-semibold text-2xl text-slate-50 tracking-tight'>{title}</div>
          <div className='text-lg text-slate-200 tracking-tight'>{exprest}</div>
        </div>
      </div>
      <div className='flex justify-between items-end'>
        <div className='uppercase text-md text-slate-50 h-fit'>{time}</div>
        <Button type='icon-md' style='bg-white/10 backdrop-blur-2xl border border-slate-50/20 text-slate-50' icon='ArrowTopRight'/>
      </div>
    </div>
  )
}

export default WorkCard