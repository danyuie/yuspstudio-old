"use client"
import { getProject } from '@/services'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [projectList, setProjectList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const project:any = (await getProject()) || []
    setProjectList(project?.projectsConnection.edges)
    // console.log(project.projectsConnection.edges)
  }
  console.log(projectList)
  return (
    <div>a</div>
  )
}

export default page