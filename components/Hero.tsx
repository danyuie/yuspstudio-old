"use client"
import Image from 'next/image'
import Button from './ui/Button'
import IconButton from './ui/IconButton'
import { SERVICES_HERO } from '@/constants'
import HeroScrollCard from './ui/HeroScrollCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react'

const Hero = () => {
  const slider:any = useRef(null)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 max-w-[1864px] m-auto px-4'>
      <div className='bg-hero-pattern bg-cover bg-center p-4 rounded-3xl flex flex-col gap-10 border-[3px] border-white md:justify-between md:p-8 dark:border-neutral-800'>
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
              <Button type='icon-md' icon='ArrowTopRight'/>
              <div className='rounded-full overflow-hidden w-10 h-10 ml-[-18px] md:ml-[-30px] md:w-14 md:h-14'><Image src='./image/user-1.png' alt='' width={56} height={56} /></div>
            </div>
            <div className='bg-white/30 h-10 w-10 rounded-full p-[10px] flex justify-center flex-col items-center md:w-14 md:h-14'><div className='text-[10px]/[1] md:text-xs'>50%</div ><div className='text-sm font-semibold md:text-base'>OFF</div></div>
          </div>
        </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          <div className='flex gap-4 flex-col border-[3px] border-white bg-hero-card rounded-3xl p-4 justify-center md:p-6 dark:bg-neutral-900 dark:border-neutral-800'>
            <div className='text-sm font-bold tracking-tight '>National 3D Design Studio</div>
            <div className='text-sm md:text-base dark:text-neutral-300'>Yusp is a <b>creative studio</b> dedicated to creating immersive digital experiences, from UI/UX design to 3D animation and more. Founded in 2021 by two passionate artists, <b>Dan (UI Designer)</b> and <b>Yuki (3D Artist)</b>, Yusp is dedicated to using technology to enhance creativity and turn visions into reality. </div>
          </div>
          <div className='flex gap-6 flex-col border-[3px] border-white bg-blue-50 rounded-3xl p-4 md:p-6 justify-center dark:bg-neutral-900 dark:border-neutral-800'>
              <div className='text-5xl font-bold tracking-tighter'>Join our community.</div>
              <Button blank='https://www.facebook.com/' type='md' title='Join community' iconStyle="dark:text-blue-700" style='bg-blue-600 text-slate-50 dark:bg-blue-800/30 dark:text-blue-700' icon='ArrowTopRight' link='./community' />
          </div>
        </div>

        <div className='bg-hero-card bg-cover bg-center p-4 rounded-3xl flex flex-col gap-4 border-[3px] border-white dark:bg-neutral-900 dark:border-neutral-800'>
          <div className='flex justify-between items-center'>
            <div className='text-gray-400 text-sm tracking-tight md:text-base dark:text-neutral-400'>Scroll to view all</div>
            <div className='flex gap-4'>
              <div onClick={() => slider?.current?.slickPrev()} ><Button style="dark:bg-neutral-800" type='icon-sm' icon='ArrowLeftShort'/></div>
              <div onClick={() => slider?.current?.slickNext()}><Button style="dark:bg-neutral-800" type='icon-sm' icon='ArrowRightShort'/></div>
            </div>
          </div>
          <div className=''>
            <Slider ref={slider} {...settings}  >
                  {SERVICES_HERO.map((item ) => (
                      <HeroScrollCard title={item.title} desc={item.desc} linkImage={item.image} key={item.key} />
                  ))}
            </Slider>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          <div className='flex gap-10 flex-col border-[3px] border-white bg-hero-card rounded-3xl p-4 md:p-6 dark:bg-neutral-900 dark:border-neutral-800'>
            <div className=' flex justify-between items-center'>
              <div className='bg-blue-700/10 text-blue-700 text-sm capitalize font-semibold rounded-full w-fit h-fit py-1 px-4 md:py-2 md:px-4'>social</div>
              <Button style='dark:bg-neutral-800' type='icon-sm' icon='ArrowRightShort'/>
            </div>
            <div className='flex items-end gap-2'>
              <div className='text-xs tracking-tight text-gray-400 h-fit mb-1 md:text-sm'>Follow us on social networks to see our next projects.</div>
              <div className='text-5xl font-bold tracking-tighter md:text-6xl'>+150K</div>
            </div>
          </div>
          <div className='flex gap-10 flex-col border-[3px] border-white bg-blue-700 rounded-3xl p-4 md:p-6 text-slate-50 dark:bg-blue-700/20 dark:border-neutral-800'>
            <div className=' flex justify-between items-center'>
              <div className='bg-slate-50/10 text-slate-50 text-sm capitalize font-semibold rounded-full w-fit h-fit py-1 px-4 md:py-2 md:px-4'>Team</div>
              <Button style="dark:bg-neutral-700/50" type='icon-sm' icon='ArrowRightShort'/>
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