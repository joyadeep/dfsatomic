import React from 'react'
import Image from '../atoms/Image'
import logo from '../logo.svg'
import QuantityBtn from './QuantityBtn'

const FoodTable = () => {
  return (
      <>

<table className='mx-auto w-full font-poppins text-white rounded-md overflow-hidden text-center'>
  <thead className='bg-slate-400 h-10'>
    <tr>
      <td className='border'>Item</td>
      <td className='border'>Image</td>
      <td className='border'>Avial. Time</td>
      {/* <td className='border hidden sm:visible'>Init. Qty</td> */}
      <td className='border'>Avail. Qty</td>
      <td className='border'>Rate</td>
      <td className='border'>Quantity</td>
      <td className='border'>Price</td>
    </tr>
  </thead>
  <tbody>
    <tr className='text-sm bg-slate-300'>
      <td className='border'>black tea</td>
      <td className='border'><Image source={logo} alt="food1" style='mx-auto border-none py-2 h-14' /></td>
      <td className='sm:whitespace-nowrap border'>10:00AM - 04:00PM</td>
      {/* <td className='border  hidden sm:visible'>25</td> */}
      <td className='border'>10</td>
      <td className='border'>11.20</td>
      <td className='border'>QuantityBtns</td>
      <td className='border'>0</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default FoodTable