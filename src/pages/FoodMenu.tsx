import React from 'react'
import Menu from '../components/Menu'
import Orderlist from '../components/Orderlist'

const FoodMenu = () => {
  return (
    <div className='flex w-11/12 mx-auto pt-[80px] px-5 h-screen'>
      <Orderlist/>
    </div>
  )
}

export default FoodMenu