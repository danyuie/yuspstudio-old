import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import IconButton from './ui/IconButton'
import HeroScrollCard from './ui/HeroScrollCard'
import { SERVICES_HERO } from '@/constants'

const Hero = () => {
  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
      <div className='bg-hero-pattern bg-cover bg-center p-4 rounded-3xl flex flex-col gap-10 border-[3px] border-white md:justify-between md:p-8 '>
        <div className='flex justify-between items-start'>
          <div className='text-3xl max-w-[80%] font-bold tracking-tighter text-slate-50 md:text-[80px]/[1.2] md:max-w-[80%]'>We help you make your <span className='rounded-full border-2 px-2 md:px-4 '>Dream</span></div>
          <IconButton iconStyle='w-5 h-5' style='p-3' />
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex md:items-end justify-between'>
          <div className='flex gap-3'>
            <div className=' rounded-full bg-slate-50 w-fit h-fit text-xs px-2 py-1 md:py-2 md:px-4'>+50 Project</div>
            <div className=' rounded-full bg-slate-50 w-fit h-fit text-xs px-2 py-1 md:py-2 md:px-4'>+50 Branding</div>
          </div>
          <div className='hidden max-w-[300px] text-right text-2xl/7 text-slate-50 md:block '>We are your partner in turning your vision into reality. Let us show you the power of imagination.</div>
        </div>
        <div className='p-4 border rounded-2xl bg-slate-50/10 backdrop-blur-2xl border-slate-100/50 md:p-8'>
          <div className='uppercase text-xs tracking-tight py-1 px-2 rounded-full border w-fit h-fit text-slate-50 mb-4 md:mb-8 md:text-sm md:px-4 md:py-2'>Hire now</div>
          <div className='text-2xl font-bold text-slate-950 mb-4 md:text-4xl md:mb-8'>We are ready / <span className='text-4xl text-green-500'>Available Here</span></div>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <div className='rounded-full overflow-hidden w-10 h-10 md:w-14 md:h-14'><Image src='./image/user-0.png' alt='' width={56} height={56} /></div>
              <div className='rounded-full overflow-hidden w-10 h-10 ml-[-18px] md:ml-[-30px] md:w-14 md:h-14'><Image src='./image/user-1.png' alt='' width={56} height={56} /></div>
            </div>
            <div className='bg-white/30 h-10 w-10 rounded-full p-[10px] flex justify-center flex-col items-center md:w-14 md:h-14'><div className='text-[10px]/[1] md:text-xs'>50%</div ><div className='text-sm font-semibold md:text-base'>OFF</div></div>
          </div>
        </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          <div className='flex gap-4 flex-col border-[3px] border-white bg-hero-card rounded-3xl p-4 justify-center md:p-6'>
            <div className='text-sm font-bold tracking-tight '>National 3D Design Studio</div>
            <div className='text-sm md:text-base'>Yusp is a <b>creative studio</b> dedicated to creating immersive digital experiences, from UI/UX design to 3D animation and more. Founded in 2021 by two passionate artists, <b>Dan (UI Designer)</b> and <b>Yuki (3D Artist)</b>, Yusp is dedicated to using technology to enhance creativity and turn visions into reality. </div>
          </div>
          <div className='flex gap-6 flex-col border-[3px] border-white bg-blue-50 rounded-3xl p-4 md:p-6 justify-center'>
              <div className='text-5xl font-bold tracking-tighter'>Join our community.</div>
              <Button link='./comunnity' title='Join Community' style='bg-blue-600 text-slate-50 w-fit' icon='./arrow-right-top-light.svg' />
          </div>
        </div>

        <div className='bg-hero-card bg-cover bg-center p-4 rounded-3xl flex flex-col gap-4 border-[3px] border-white'>
          <div className='flex justify-between items-center'>
            <div className='text-gray-400 text-sm tracking-tight md:text-base'>Scroll to view all</div>
            <div className='flex gap-4'>
              <IconButton icon='./arrow-left-dark.svg'  style='p-1' />
              <IconButton icon='./arrow-right-dark.svg'  style='p-1' />
            </div>
          </div>
          <div className='grid auto-cols-[80%] gap-2 grid-flow-col overflow-x-auto snap-mandatory snap-x md:auto-cols-[30%] no-scrollbar' >
                {SERVICES_HERO.map((item) => (
                    <HeroScrollCard  title={item.title} desc={item.desc} linkImage={item.image} key={item.key} />
                ))}
          </div>
        </div>

        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          <div className='flex gap-10 flex-col border-[3px] border-white bg-hero-card rounded-3xl p-4 md:p-6'>
            <div className=' flex justify-between items-center'>
              <div className='bg-blue-700/10 text-blue-700 text-sm capitalize font-semibold rounded-full w-fit h-fit py-1 px-4 md:py-2 md:px-4'>social</div>
              <IconButton icon='./arrow-right-dark.svg'  style='p-1' />
            </div>
            <div className='flex items-end gap-2'>
              <div className='text-xs tracking-tight text-gray-400 h-fit mb-1 md:text-sm'>Follow us on social networks to see our next projects.</div>
              <div className='text-5xl font-bold tracking-tighter md:text-6xl'>+150K</div>
            </div>
          </div>
          <div className='flex gap-10 flex-col border-[3px] border-white bg-blue-700 rounded-3xl p-4 md:p-6 text-slate-50'>
            <div className=' flex justify-between items-center'>
              <div className='bg-slate-50/10 text-slate-50 text-sm capitalize font-semibold rounded-full w-fit h-fit py-1 px-4 md:py-2 md:px-4'>Team</div>
              <IconButton icon='./arrow-right-dark.svg'  style='p-1' />
            </div>
            <div className='flex items-end gap-2'>
              <div className='text-xs tracking-tight text-gray-300 h-fit mb-1 md:text-sm'>We have 140+ project about 3d and UI/UX Website/App.</div>
              <div className='text-5xl font-bold tracking-tighter md:text-6xl'>+140</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero