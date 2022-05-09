import React, { useState } from 'react'

interface Iradiobox{
    isSelected:string;
    setSelected:React.Dispatch<React.SetStateAction<string>>;
    value:string;
}
const Radio:React.FC<Iradiobox> = ({isSelected,setSelected,value}) => {
  return (
      <div className='w-5 h-5 rounded-full border border-slate-200 hover:border-orange-500 flex items-center justify-center' onClick={()=>{setSelected(value)}}  >
          <div className={`${isSelected===value && "bg-orange-500"} w-2 h-2 rounded-full `} />

      </div>
  )
}

export default Radio