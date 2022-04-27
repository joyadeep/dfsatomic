import React, { useState } from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
import logo from "../assets/images/logo.png"

const Header = () => {
  const[ispressed,setIspressed]=useState(false);
  return (
    <div className=' bg-blue-100  px-5 w-screen flex flex-row items-center justify-between h-20 bg-slate-50 absolute'>
        <div className='h-full w-fit flex items-center'>
            <img src={logo} className="fit-cover"  />
        </div>
        {
          !ispressed?<MenuIcon onClick={()=>{setIspressed(!ispressed)}} className='w-12 cursor-pointer h-12 text-slate-700'/>:<XIcon onClick={()=>{setIspressed(!ispressed)}} className='w-12 h-12 text-slate-700 cursor-pointer'/>
        }
        <div className={`${ispressed?"bg-red-400 ":"bg-green-400 -right-32 hidden    "}  absolute right-0 top-20 bg-green-100 w-32 pl-3 py-5`}>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Login</div>
        </div>
    </div>
  )
}

export default Header