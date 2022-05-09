import React from 'react'
import Image from '../atoms/Image'
import Time from '../atoms/Time'
import logo from '../logo.svg'
const User = () => {
  return (
    <div className='bg-red-50 font-poppins text-sm text-black flex flex-row items-center space-x-2 w-fit px-3 '>
        {/* <img src={logo} alt="logo" className="w-20 h-20 border-2 border-blue-600 rounded-full fit-contain" /> */}
        <Image source={logo} alt="logo" radius="full" />
        <div className='sm:w-40 w-fit text-xl sm:text-sm'>
          <div className='font-bold'>Joyadeep Limbu</div>
          {/* <div className=''>2022/04/21 10:45:05</div> */}
          <Time/>
          <div className='font-bold'>DFSID:4152</div>
        </div>
    </div>
  )
}

export default User