import React from 'react'
import logo from '../logo.svg'
const User = () => {
  return (
    <div className='bg-red-50 font-poppins text-sm flex flex-row items-center '>
        <img src={logo} className="w-20 h-20 border-2 border-blue-600 rounded-full fit-contain"/>
        <div>
          <div>Joyadeep Limbu</div>
          <div>2022/04/21</div>
          <div>DFSID:4152</div>
        </div>
    </div>
  )
}

export default User