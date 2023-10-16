import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div>
      <div className='relative'>
        <Image src='./hero.svg' height={807}  width={1292} alt=''/>
        <div className='flex flex-col absolute bottom-10 left-[60px] max-w-[678px]'>
          <div className='text-[80px] leading-none mb-8 font-extrabold text-neutral-50 tracking-[-4px]'>We help you make your <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC2] from-[0%] to-[#03BED8] to-[90%]'>Dream</span></div>
          <div className='text-[20px] tracking-tight text-gray-300 mb-10'>We are your partner in turning your vision into reality. Let us show you the power of imagination.</div>
          <Button style='w-fit' variant='dark' title='Lets work together' icon='./arrow-right-dark.svg' link='./'/>
          <div className='flex gap-4 mt-[78px] items-center'>
            <Button style='w-fit bg-slate-900 gap-0 py-3 px-3 rounded-full ' variant='dark' icon='./arrown-down-fill.svg' link='./'/>
            <div className='text-sm tracking-tight font-semibold text-slate-500'>Scroll down</div>
          </div>
        </div>
        <div className='bg-blue-600 py-[29px] px-[24px] rounded-[20px] absolute right-0 bottom-0 max-w-[410px]'>
          <div className='text-sm text-neutral-50 mb-6 leading-[22px]'>National 3D Design Studio</div>
          <div className='leading-[24px] text-[15px] mb-[31px] text-neutral-50'>Yusp is a <span className='font-bold'>creative studio</span> dedicated to creating immersive digital experiences, from UI/UX design to 3D animation and more. Founded in 2021 by two passionate artists, <span className='font-bold'>Dan (UI Designer)</span> and <span className='font-bold'>Yuki (3D Artist)</span> , Yusp is dedicated to using technology to enhance creativity and turn visions into reality.</div>
          <div className='flex gap-2'>
            <a className='text-[16px] leading-[26px] border-b text-neutral-50 tracking-tight' href="./">Behance</a>
            <span className='text-neutral-50'>/</span>
            <a className='text-[16px] leading-[26px] border-b text-neutral-50 tracking-tight' href="./">Linkedin</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero