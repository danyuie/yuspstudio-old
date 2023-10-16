import React from 'react'
import HeadingSection from './HeadingSection';
import JobCard from './ui/JobCard';
import { JOB_LIST } from '@/constants';

const Whatwedo = () => {
  return (
    <div>
      <HeadingSection title='Yusp Studio:' titleSub=' Your digital needs, our expertise, our passion' tag='What We Do'/>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {JOB_LIST.map((job) => (
          <JobCard key={job.key} title={job.title} desc={job.desc} image={job.image} href={job.href}/>
        ))}
      </div>
    </div>
  )
}

export default Whatwedo