import Image from 'next/image'
import React from 'react'

const WorkItem = () => {
  return (
    <div className=''>
      <div className="w-full overflow-hidden h-[300px]">
        <Image src='/image/menu-img-03.png' width={2000} height={2000} alt='' />
        </div>
        <div className='text-lg font-medium tracking-tight text-slate-950 dark:text-slate-50'>Title WorkItem Page</div>
        <div className="text-base tracking-tight text-slate-950 dark:text-slate-50 line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ullam numquam repudiandae magnam nulla quam corporis similique molestiae, possimus, harum sunt beatae deserunt fugiat iusto autem modi consequuntur! Tempora, in!</div>
    </div>
  )
}

export default WorkItem