import React from 'react'
import Button from './ui/Button'

const Subscribe = () => {
  return (
    <div className='flex flex-col gap-10 bg-blue-500 rounded-[20px] p-5 py-10 mt-[120px] md:p-10 md:py-10'>
      <div className='flex flex-col gap-3'>
        <div className='text-[30px]/[38px] md:text-5xl text-neutral-50  font-bold tracking-tight leading-[135%]'>Interested in working with us on your next project? <span className='hidden xl:block'>Write us an email or schedule a meeting.</span></div>
        <div className='hidden md:block text-[20px] text-gray-300 tracking-tight '>If you are interested in working with us on your next project, please contact us today.</div>
      </div>
      <Button style='w-fit' title='Lets work together' icon='./arrow-right-dark.svg' link='./'/>
    </div>
  )
}

export default Subscribe