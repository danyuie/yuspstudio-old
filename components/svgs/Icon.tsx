import React from 'react'
import { iconLibrary } from './IconLibrary'

export type IconNameType = 'ArrowTopRight' | 'ThreeDot' | 'ArrowRight' | 'ArrowRightShort' | 'Layout' | 'ArrowLeftShort' | 'Logo' | 'Sun' | 'Moon'

type Props = {
  name: IconNameType,
  style?: React.CSSProperties,
  className?: string,
}


const Icon = ({name,style,className}:Props) => {
  const renderPath = iconLibrary[name]?.paths.map((path:string, index:number) =><path key={index} d={path}></path>)
  const viewBox = iconLibrary[name]?.viewBox
  return (
    <svg className={className + ' dark:text-slate-50'} fill="currentColor"  style={style} viewBox={viewBox}>{renderPath}</svg>
    )
  }
  
  export default Icon