import React from 'react'

const Orders = () => {
  return (
    <div className='relative border border-slate-400 rounded-md py-2 px-1 h-fit'>
        <div className='absolute -top-4 left-3 bg-iris-400 p-1 rounded-sm text-white font-poppins font-semibold '>Today's Order</div>
        <table className='w-full mt-4 rounded-md px-3 text-center text-white font-poppins overflow-hidden'>
            <thead className='bg-slate-400 h-10'>
                <tr>
                    <td className='border'>Opt</td>
                    <td className='border'>Item</td>
                    <td className='border'>Time</td>
                    <td className='border'>Qty</td>
                    <td className='border'>Rate</td>
                    <td className='border'>Price</td>
                </tr>
            </thead>
            <tbody>
                <tr className='odd:bg-slate-200 even:bg-slate-300 text-xs '>
                    <td className='py-1 border'>x</td>
                    <td className='border'>Black tea</td>
                    <td className='border'>10:30 AM</td>
                    <td className='border'>10</td>
                    <td className='border'>11.20</td>
                    <td className='border'>22.40</td>
                </tr>
                <tr className='odd:bg-slate-200 even:bg-slate-300 text-xs '>
                    <td className='py-1 border'>x</td>
                    <td className='border'>Grilled sandwitch (veg)</td>
                    <td className='border'>02:30 PM</td>
                    <td className='border'>2</td>
                    <td className='border'>11.20</td>
                    <td className='border'>22.40</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Orders