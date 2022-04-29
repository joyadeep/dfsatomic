import React from 'react'
import Image from '../atoms/Image'
import logo from '../assets/images/logo.png'
import QuantityBtn from './QuantityBtn'

const FoodTable = () => {
  return (
      <>
      <div className=' rounded-md overflow-hidden'>
    <div className='flex flex-row font-bold text-center flex-1 bg-red-300 h-10 items-center bg-slate-400 text-white text-xl justify-between'>
        <div className='flex-1'>Item</div>
        <div className='flex-1'>Image</div>
        <div className='flex-1'>Avial Time</div>
        <div className='flex-1'>Init. Qty</div>
        <div className='flex-1'>Avail. Qty</div>
        <div className='flex-1'>Rate</div>
        <div className='flex-1'>Quantity</div>
        <div className='flex-1'>Price</div>
    </div>
    <div className='flex flex-row text-center min-h-10  text-md items-center even:bg-slate-300 odd:bg-slate-200 text-white
    '>
        <div className='flex-1'>Black tea</div>
        <div className='flex-1'><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></div>
        <div className='flex-1'>10:00 AM - 04:00 PM</div>
        <div className='flex-1 '>25</div>
        <div className='flex-1 '>10</div>
        <div className='flex-1 '>11.20</div>
        <div className='flex-1'><QuantityBtn/></div>
        <div className='flex-1 '>0</div>
    </div>
    <div className='flex flex-row text-center min-h-10  text-md items-center even:bg-slate-300 odd:bg-slate-200 text-white
    '>
        <div className='flex-1'>Chicken Meatball With Noodles</div>
        <div className='flex-1'><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></div>
        <div className='flex-1'>10:00 AM - 04:00 PM</div>
        <div className='flex-1 '>25</div>
        <div className='flex-1 '>10</div>
        <div className='flex-1 '>11.20</div>
        <div className='flex-1'><QuantityBtn/></div>
        <div className='flex-1 '>0</div>
    </div>
    </div>
    </>
  )
}

export default FoodTable