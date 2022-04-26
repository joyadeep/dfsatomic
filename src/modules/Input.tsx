import React from 'react'

interface Iinput{
    type: "text" | "email" | "password" | "Date" | "file";
    placeholder:string;
    name?:string;
    value?:string;
    style?:string;
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input:React.FC<Iinput> = ({type,placeholder,name,value,handleChange,style}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} name={name} className={`w-full h-12 outline-none pl-3 text-xl rounded border-2 border-slate-300 ${style}`} value={value} onChange={handleChange}  />
   
    </>
  )
}

export default Input