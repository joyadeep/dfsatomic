import React from 'react'

interface Itextarea{
    placeholder:string;
}
const Textarea:React.FC<Itextarea> = ({placeholder}) => {
  return (
    <textarea placeholder={placeholder} className='h-48 text-justify w-full  outline-none resize-none p-3 text-xl font-poppins rounded-md border-2'  />
  )
}

export default Textarea