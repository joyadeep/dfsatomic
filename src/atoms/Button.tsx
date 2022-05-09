import React from 'react'

interface Ibutton{
    title:string;
    disabled?:true | false;
    handleClick?:()=>void;
    variant?:"primary" | "secondary"|"danger";
    style?:string;
}

const Button:React.FC<Ibutton> = ({title,disabled,variant,handleClick,style}) => {
  return (
    <button disabled={disabled} onClick={handleClick} className={` ${variant==="primary"?" text-white bg-blue-600 border-2 border-blue-600 hover:bg-blue-500 hover:border-blue-500 ":variant==="danger"?"bg-red-600 text-white hover:bg-red-500":" text-onyx hover:bg-blue-100 border-2 border-blue-600"} disabled:bg-slate-500 disabled:border-slate-500  font-poppins px-3 py-1   rounded-md  ${style} `} >{title}</button>

  )
}

export default Button