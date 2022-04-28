import React from 'react'
import Button from '../atoms/Button'

const Filterbutton = () => {
  return (
    <div className='flex flex-row items-center justify-between gap-x-3  '>
        <Button title='All items' variant='primary'/>
        <Button title='Breakfast' variant='primary'/>
        <Button title='Lunch' variant='primary' />
        <Button title='Dinner' variant='primary' />
        <Button title='Snack' variant='primary' />
        <Button title='Drinks' variant='primary'/>
    </div>
  )
}

export default Filterbutton