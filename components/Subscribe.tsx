import React from 'react'
import Button from './ui/Button'

const Subscribe = () => {
  return (
    <div className='bg-blue-500 rounded-[20px] p-10 mt-[120px]'>
      <div className='text-5xl text-neutral-50 mb-3 font-bold tracking-tight leading-[135%]'>Interested in working with us on your next project? Write us an email or schedule a meeting.</div>
      <div className='text-[20px] text-gray-300 tracking-tight mb-10'>If you are interested in working with us on your next project, please contact us today.</div>
      <Button variant='dark' title='Lets work together' icon='./arrow-right-dark.svg' link='./'/>
    </div>
  )
}

export default Subscribe