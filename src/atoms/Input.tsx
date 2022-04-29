import React from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {InputSchema} from '../schema/InputSchema'
import { string } from 'yup';

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
    visibility?:"invisible" | "hidden" | "visible";
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input:React.FC<Iinput> = ({type,placeholder,name,value,handleChange,style,visibility}) => {
  return (
    <>
    <input type={type} placeholder={placeholder}   className={`w-full font-poppins h-11 outline-none pl-3 text-lg sm:text-md  rounded border-2 border-gray-200 ${style}`}   />
    <span className={` ${visibility} py-1 text-xs w-full pl-3 mx-auto text-left  text-red-600`}>⚠ Error detected </span>
   
    </>
  )
}

export default Input