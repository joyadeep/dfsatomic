import React, { useState } from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'

const Form = () => {
  const[hidden,setHidden]=useState(false);
  return (
    <div className='w-1/3 px-4 bg-slate-50 rounded-lg shadow-lg overflow-hidden py-5'>

        <form className=' flex flex-col   text-center'>
            <div className=' text-center text-4xl font-semibold text-slate-700 my-5'>Login</div>
            <Input type='text' placeholder='enter email' style='w-11/12  mb-0' />
            <span className=" invisible my-0 h-4 text-xs w-11/12 mx-auto text-left  text-red-600">Errors here</span>
            <Input type='password' placeholder='enter password' style='w-11/12 mx-auto' />
            <span className='invisible my-0 text-xs w-11/12 mx-auto text-left text-red-600'>Error here</span>
            <Button title='Login' variant='primary' style='w-fit mx-auto' />
        </form>
        <div className='text-blue-500 text-center underline'>forgot password</div>
        <div className='my-5'>
          Deerhold Food System <span className='font-bold'>DFS</span> 
        </div>
        <div className='text-center'>
          © 2022
        </div>
    </div>

  )
}

export default Form