import React, { useState } from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
import logo from "../assets/images/logo.png"
import {Link} from "react-router-dom";

const Header = () => {
  const[ispressed,setIspressed]=useState(false);
  return (
    <div className=' shadow-md px-0 w-screen flex flex-row items-center justify-between h-20 bg-slate-50 absolute'>
        <div className='h-full w-fit flex items-center pl-5'>
            <img src={logo} className="fit-cover sm:w-fit w-1/2"  />
        </div>
        <div className="sm:hidden pr-5">
          {
            !ispressed?<MenuIcon onClick={()=>{setIspressed(!ispressed)}} className='w-10 cursor-pointer h-10 text-slate-700'/>:<XIcon onClick={()=>{setIspressed(!ispressed)}} className='w-10 h-10 text-slate-700 cursor-pointer'/>
          }
        </div>
          <div className={`${ispressed?"bg-onyx text-white translate-x-0 ":"translate-x-full hidden  "}  flex flex-col justify-evenly items-center absolute top-20 w-screen h-[calc(100vh-80px)] overflow-hidden sm:h-fit sm:bg-transparent sm:flex sm:flex-row sm:visible sm:w-fit sm:space-x-5 sm:right-0 sm:translate-x-0 sm:pr-5 sm:relative sm:top-0  font-poppins text-xl `}>

             {/* TODO : should have done translate instead of -right-32 . kya kar raha heh tu bahi. ye doglapan hain.. */}
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Login</div>
          <Link to="/forgot_password" onClick={()=>{setIspressed(false)}}>go somewhere</Link>
          {/* TODO : add route and onclick navigate to page + change ispressed state to false */}
        </div>
    </div>
  )
}

export default Header