import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 w-full text-center h-screen bg-gray-100 '>
      <div className='w-5/12 border-2 rounded-md bg-white shadow-md px-3 py-2'>
      <h2 className='text-slate-400'>Feedback</h2>
        <div className=' w-full'>
          <Textarea placeholder='Enter your feedback here.'/>
            <Button title='Submit' variant='primary' style='text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Feedback