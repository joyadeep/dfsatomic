import React from 'react'

interface Ibutton{
    title:string;
    disabled?:true | false;
    handleClick?:()=>void;
    variant?:"primary" | "secondary";
    style?:string;
}

const Button:React.FC<Ibutton> = ({title,disabled,variant,handleClick,style}) => {
  return (
    <button disabled={disabled} onClick={handleClick} className={` ${variant==="primary"?"bg-blue-600 border-2 border-blue-600 ":"border-2 border-blue-600 text-black"} disabled:bg-slate-500 disabled:border-slate-500   text-white px-2 py-1 text-xl rounded ${style} `} >{title}</button>
    
  )
}

export default Button