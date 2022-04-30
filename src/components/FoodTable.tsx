import React from 'react'
import Image from '../atoms/Image'
import logo from '../logo.svg'
import QuantityBtn from './QuantityBtn'

const FoodTable = () => {
  return (
      <>

<table className='mx-auto w-full font-poppins text-white rounded overflow-hidden text-center'>
  <thead className='bg-slate-400 h-10'>
    <tr>
      <td>Item</td>
      <td>Image</td>
      <td>Avial. Time</td>
      <td>Init. Qty</td>
      <td>Avail. Qty</td>
      <td>Rate</td>
      <td>Quantity</td>
      <td>Price</td>
    </tr>
  </thead>
  <tbody>
    <tr className='text-sm bg-slate-300'>
      <td className=''>black tea</td>
      <td><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></td>
      <td className='whitespace-nowrap'>10:00AM - 04:00PM</td>
      <td>25</td>
      <td>10</td>
      <td>11.20</td>
      <td>QuantityBtns</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

      {/* <div className=' rounded-md overflow-hidden'>
    <div className='flex flex-row font-bold text-center flex-1 h-10 items-center bg-slate-400 text-white text-md justify-between'>
        <div className='flex-1'>Item</div>
        <div className='flex-1'>Image</div>
        <div className='whitespace-nowrap'>Avialable Time</div>
        <div className='flex-1'>Init. Qty</div>
        <div className='flex-1'>Avail. Qty</div>
        <div className='flex-1'>Rate</div>
        <div className='flex-1'>Quantity</div>
        <div className='flex-1'>Price</div>
    </div>
    <div className='flex flex-row text-center min-h-10  text-xs items-center even:bg-slate-300 odd:bg-slate-200 text-white
    '>
        <div className='flex-1'>Black tea</div>
        <div className='flex-1'><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></div>
        <div className='flex-1 whitespace-nowrap'>10:00AM - 14:00PM</div>
        <div className='flex-1 '>25</div>
        <div className='flex-1 '>10</div>
        <div className='flex-1 '>11.20</div>
        <div className='flex-1'><QuantityBtn/></div>
        <div className='flex-1 '>0</div>
    </div>
    <div className='flex flex-row text-center min-h-10  text-xs items-center even:bg-slate-300 odd:bg-slate-200 text-white
    '>
        <div className='flex-1'>Chicken Meatball With Noodles</div>
        <div className='flex-1'><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></div>
        <div className='flex-1 whitespace-nowrap'>10:00AM - 04:00PM</div>
        <div className='flex-1 '>25</div>
        <div className='flex-1 '>10</div>
        <div className='flex-1 '>11.20</div>
        <div className='flex-1'><QuantityBtn/></div>
        <div className='flex-1 '>0</div>
    </div> */}
    {/* </div> */}
    </>
  )
}

export default FoodTable