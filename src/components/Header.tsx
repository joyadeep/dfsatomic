import React from 'react'
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div className='px-5 w-screen flex flex-row items-center h-20 bg-slate-50 absolute'>
        <div className='h-full w-fit flex items-center'>
            <img src={logo} className="fit-cover "  />
        </div>
    </div>
  )
}

export default Header