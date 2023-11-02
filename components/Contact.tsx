import React from 'react'
import Button from './ui/Button'

const Contact = () => {
  return (
    <div className='p-4 bg-neutral-900 rounded-3xl mt-10'>
      <div className='uppercase text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 mb-6'>How about we do thing or two, together ?</div>
      <Button link='./Contact.tsx' type='sm' icon='ArrowRightShort' router title='Contact' style='border-none dark:bg-blue-700'/>
    </div>
  )
}

export default Contact