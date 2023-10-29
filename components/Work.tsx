"use client"
import React, { useEffect, useState } from 'react'
import WorkCard from './ui/WorkCard'
import Button from './ui/Button'
import { getProject } from '@/services'

const Work = () => {
  const [workList, setWorkList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const project:any = (await getProject()) || []
    setWorkList(project?.projectsConnection.edges)
  }
  const featuredProjects = workList.filter((workList:any) => workList.node.featuredProject);
  
  return (
    <div className=' max-w-[1864px] m-auto px-4 mt-16'>
      <div className='flex justify-between items-center mb-10'>
        <div className='text-6xl font-bold tracking-tighter'>Recent advances</div>
        <Button router link='./work' type='sm' title='Read More' icon='ArrowRight'/>
      </div>
      <div className='md:grid md:grid-cols-4 gap-4'>
        {featuredProjects.map((item:any, index:number) => (
          index == 4 ? <WorkCard tag={item.node.projectTypes?.[0].name} image={item.node.image?.url} title={item.node?.name} excerpt={item.node?.excerpt} time={item.node?.createdAt} slug={item.node?.slug} /> : ''
        ))}
    </div>
    </div>
  )
}

export default Work