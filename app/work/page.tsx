import WorkItem from '@/components/ui/WorkItem'
import Image from 'next/image'
import React from 'react'

const WorkListPage = () => {
  return (
    <div className='max-w-[1864px] m-auto px-4'>
      <div className='text-5xl font-bold tracking-tight text-slate-950 dark:text-slate-50 mb-10'>Our Work</div>
      <div className='grid grid-cols-4 gap-4'>
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      </div>
    </div>
  )
}

export default WorkListPage