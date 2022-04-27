import React from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {InputSchema} from '../schema/InputSchema'

// const {
//   register,
//   formState:{errors}
// }=useForm({
//   resolver:yupResolver(InputSchema),
//   mode:'all'
// })

interface Iinput{
    type: "text" | "email" | "password" | "Date" | "file";
    placeholder:string;
    name?:string;
    value?:string;
    style?:string;
    register?:string;
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input:React.FC<Iinput> = ({type,placeholder,name,value,handleChange,style}) => {
  return (
    <>
    <input type={type} placeholder={placeholder}   className={`w-full font-poppins h-12 outline-none pl-3 text-xl rounded border-2 border-slate-300 ${style}`}   />
    <span className=" pb-1 text-xs w-11/12 mx-auto text-left  text-red-600">⚠ Error detected </span>
   
    </>
  )
}

export default Input