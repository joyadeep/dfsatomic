import React from 'react'

interface Iimage{
  source:string;
  alt:string;
  style?:string;
}

const Image:React.FC<Iimage> = ({source,alt,style}) => {
  return (
    <img src={source} alt={alt} className={` ${style} w-20 h-20 border-2 border-blue-600 rounded-full sm:rounded-sm fit-cover`} />
  )
}

export default Image