import React from 'react'
import Button from '../atoms/Button'
import Filterbutton from '../molecules/Filterbutton'
import Searchbar from '../molecules/Searchbar'
import FoodTable from './FoodTable'

const Menu = () => {
  return (
    <div className='w-full sm:w-2/3 h-fit font-poppins'>
        <div className='flex flex-row justify-between items-center'>
            {/* <Searchbar/> */}
            {/* <Filterbutton/> */}
        </div>
        <FoodTable/>
        <div className=' my-3 text-right pr-5'>
          <Button title='Place Order' variant='primary'/>
        </div>
    </div>
  )
}

export default Menu