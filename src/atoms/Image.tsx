import React from 'react'

// type ImageRadius={
//   radius:"full"|"none"|"md"
// }
interface Iimage{
  source:string;
  alt:string;
  radius:"full"|"none"|"md";
  style?:string;
}

const Image:React.FC<Iimage> = ({source,alt,style,radius}) => {
  return (
    <img src={source} alt={alt} className={` ${style} w-20 h-20 border-2 border-blue-600 rounded-${radius} fit-cover`} />
  )
}

export default Image