import React, { useState } from 'react'
import {CheckIcon} from '@heroicons/react/outline'

interface Icheckbox{
  isChecked:boolean,
  setChecked:React.Dispatch<React.SetStateAction<boolean>>,
  title:string,
  color?:string
}

const Checkbox:React.FC<Icheckbox> = ({isChecked,setChecked,title,color}) => {
  // const [isSelected,setIsSelected]=useState(false);
  return (
<div className='w-fit flex items-center gap-x-2' >
<div className={` ${isChecked?"bg-fuschia-400 border-0":"border-2 border-fuschia-400"}  flex items-center justify-center w-5 h-5 rounded-[4px] cursor-pointer `} onClick={()=>{setChecked(!isChecked)}}>
{/* <CheckIcon className=' text-white'/> */}
{isChecked && <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg> }
 
</div>
{title}
</div>
  )
}

export default Checkbox