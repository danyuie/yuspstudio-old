import { SERVICES_HERO } from '@/constants'
import React from 'react'
import HeroScrollCard from './HeroScrollCard'

const HeroListCard = () => {

  return (
    <div className='grid auto-cols-[80%] gap-2 grid-flow-col overflow-x-auto snap-mandatory snap-x md:auto-cols-[30%] no-scrollbar'>
      {SERVICES_HERO.map((item) => (
                        <HeroScrollCard  title={item.title} desc={item.desc} linkImage={item.image} key={item.key} />
                  ))}
    </div>
  )
}

export default HeroListCard
