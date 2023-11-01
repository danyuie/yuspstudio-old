"use client"
import React, { useEffect, useState } from 'react'
import WorkCard from './ui/WorkCard'
import Button from './ui/Button'
import { getProject } from '@/services'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react'

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

  const slider:any = useRef(null)
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className=' max-w-[1864px] m-auto px-4 md:mt-16 mt-10'>
      <div className='flex justify-between items-center md:mb-10 mb-5'>
        <div className='text-4xl font-bold tracking-tighter '>Recent advances</div>
        <Button router link='./work' type='sm' title='Read More' icon='ArrowRight' style='hidden md:flex'/>
        {/* <Button router link='./work' type='icon-sm' icon='ArrowRight' style='md:hidden bg-transparent border-slate-950 border'/> */}
      </div>
      <div className='md:grid md:grid-cols-4 gap-4 hidden'>
        {featuredProjects.map((item:any, index:number) => (
          index < 4 ? <WorkCard key={index} tag={item.node.projectTypes?.[0].name} image={item.node.image?.url} title={item.node?.name} excerpt={item.node?.excerpt} time={item.node?.createdAt} slug={item.node?.slug} /> : ''
        ))}
      </div>
      <div className='md:hidden'>
        <Slider ref={slider} {...settings}>
          {featuredProjects.map((item:any, index:number) => (
              index < 4 ? <WorkCard key={index} tag={item.node.projectTypes?.[0].name} image={item.node.image?.url} title={item.node?.name} excerpt={item.node?.excerpt} time={item.node?.createdAt} slug={item.node?.slug} /> : ''
            ))}
        </Slider>
      </div>
        
    </div>
  )
}

export default Work