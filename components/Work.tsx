import React from 'react'
import WorkCard from './ui/WorkCard'
import Button from './ui/Button'

const Work = () => {
  return (
    <div className=' max-w-[1864px] m-auto px-4 mt-16'>
      <div className='flex justify-between items-center mb-10'>
        <div className='text-6xl font-bold tracking-tighter'>Recent advances</div>
        <Button router link='./work' type='sm' title='Read More' icon='ArrowRight'/>
      </div>
      <div className='md:grid md:grid-cols-3 gap-4'>
        <WorkCard tag='3D Product' title='Table 3D Morden' exprest='Table 3D Modern is a modern 3D table that is made from high-quality materials and is available in three sizes.' time='08/2020' slug='./' image='./image/404.png'/>
        <WorkCard tag='3D Product' title='Table 3D Morden' exprest='Table 3D Modern is a modern 3D table that is made from high-quality materials and is available in three sizes.' time='08/2020' slug='./' image='./image/404.png'/>
        <WorkCard tag='3D Product' title='Table 3D Morden' exprest='Table 3D Modern is a modern 3D table that is made from high-quality materials and is available in three sizes.' time='08/2020' slug='./' image='./image/404.png'/>
    </div>
    </div>
  )
}

export default Work