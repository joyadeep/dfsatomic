import React from 'react'

interface Iimage{
  source:string;
  alt:string;

}

const Image:React.FC<Iimage> = ({source,alt}) => {
  return (
    <img src={source} alt={alt} className="w-20 h-20 border-2 border-blue-600 rounded-full sm:rounded-sm fit-contain" />
  )
}

export default Image