import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Searchbar = () => {
  return (
    <div className=' bg-blue-200 flex '>
        <Input placeholder='Search...' type='text' visibility='hidden' />
        <Button title='Search' variant='primary'  />
    </div>
  )
}

export default Searchbar