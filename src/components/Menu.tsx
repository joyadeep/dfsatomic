import React from 'react'
import Filterbutton from '../molecules/Filterbutton'
import Searchbar from '../molecules/Searchbar'
import FoodTable from './FoodTable'

const Menu = () => {
  return (
    <div className='w-full h-fit mt-5 bg-green-200 font-poppins'>
        <div className='flex flex-row justify-between items-center'>
            <Searchbar/>
            <Filterbutton/>
        </div>
        <FoodTable/>
    </div>
  )
}

export default Menu