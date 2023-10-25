"use client"
import ButtonSlider from './ui/ButtonSlider'

const Slider = () => {
  
  return (
    <div>
      <div className='flex gap-4 my-11 items-center tracking-tight font-medium'>
        <div className='whitespace-nowrap'>We bring</div>
        <ButtonSlider linkIcon='./img-sgv/img-01.svg' Color='bg-blue-200' title='brands' />
        <div className='whitespace-nowrap'>to life through immersive </div>
        <ButtonSlider linkIcon='./img-sgv/img-02.svg' Color='bg-red-100' title='3D design' />
        <div className='whitespace-nowrap'>and innovative</div>
        <ButtonSlider linkIcon='./img-sgv/img-03.svg' Color='bg-gray-900 text-slate-50' title='web experiences' />
        <div className='whitespace-nowrap'>We are an award-winning agency with leading</div>
        <ButtonSlider linkIcon='./img-sgv/img-04.svg' Color='bg-green-200' title='3D Artist and Designer' />
        <div className='whitespace-nowrap'>specializing in creating</div>
        <ButtonSlider linkIcon='./img-sgv/img-05.svg' Color='bg-[#FFE7A8]' title='immersive and engaging' />
        <div className='whitespace-nowrap'>experiences for brands online and beyond.</div>
      </div>
    </div>
  )
}

export default Slider