import React from 'react'
import Button from './Button'
import moment from 'moment'
import Link from 'next/link'
type WorkProps = {
  tag: string,
  title: string,
  excerpt: string,
  time: string,
  slug: string,
  image: string,
}
const WorkCard = ({tag, title, excerpt, time, slug, image}:WorkProps) => {
  return (
    <Link href={'./work/'+slug} className='flex md:p-6 p-4 flex-col gap-12 rounded-3xl cursor-pointer mx-2 bg-no-repeat bg-cover' style={{backgroundImage: `url("${image}")`}}>
      <div className='text-base text-slate-50 tracking-tight rounded-full bg-white/10 px-4 py-2 backdrop-blur-2xl w-fit h-fit'>{tag}</div>
      <div className='flex flex-col gap-4' >
        <div className='font-semibold text-2xl text-slate-50 tracking-tight line-clamp-1'>{title}</div>
        <div className='text-base text-slate-200 tracking-tight line-clamp-2'>{excerpt}</div>
      </div>
      <div className='flex justify-between items-end'>
        <div className='uppercase text-base text-slate-50 h-fit'>{moment(time).format('DD/YYYY')}</div>
        <Button router link={slug} type='icon-sm' style='bg-white/10 backdrop-blur-2xl border border-slate-50/20 text-slate-50' icon='ArrowRightShort'/>
      </div>
    </Link>
  )
}

export default WorkCard