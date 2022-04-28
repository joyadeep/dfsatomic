import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 w-full text-center h-screen bg-gray-100 '>
      <h2 className='text-gray-700'>Feedback</h2>
        <div className=' w-2/5'>
          <Textarea placeholder='Enter your feedback here.'/>
            <Button title='Submit' variant='primary' style='text-2xl'/>
        </div>
    </div>
  )
}

export default Feedback