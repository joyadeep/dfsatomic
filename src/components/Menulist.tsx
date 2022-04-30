import React from 'react'
import Menu from './Menu'
import Orderlist from './Orderlist'

const Menulist = () => {
  return (
    <div className='flex flex-row pt-32 w-[96%] mx-auto space-x-4'>
        <Menu/>
        <Orderlist/>
    </div>
  )
}

export default Menulist