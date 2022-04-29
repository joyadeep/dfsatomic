import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const PasswordReset = () => {
  return (
    <div className='text-center space-y-3 bg-white  w-10/12 sm:w-1/3 mx-auto border-2 rounded-md px-3 py-2'>
      <h2 className='text-slate-400'>Reset</h2>
        <Input placeholder='Enter email' type='email' visibility='hidden' />
        <Button title='Reset' variant='primary' style='text-xl'/>
    </div>
  )
}

export default PasswordReset