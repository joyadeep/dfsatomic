import React from 'react'
import Menu from './Menu'
import Orderlist from './Orderlist'

const Menulist = () => {
  return (
    <div className='flex flex-col sm:flex-row pt-32 w-[97%] mx-auto sm:space-x-2'>
        <Menu/>
        <Orderlist/>
    </div>
  )
}

export default Menulist