import React from 'react'
import {XIcon} from '@heroicons/react/outline'
import Button from '../atoms/Button'

interface Imodal{
  isShown:boolean,
  setIsShown:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:React.FC<Imodal> = ({isShown,setIsShown}) => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-200 relative top-0 z-10'>
        <div className='w-1/3 h-fit bg-white text-poppins text-xl p-3 rounded text-justify shadow-lg '>
         <div className='w-full h-10 flex items-center'>
           <XIcon className='w-8 h-8 ml-auto text-red-500 rounded cursor-pointer transition duration-500 ease-in-out hover:text-white hover:bg-red-500 hover:transition hover:duration-500' onClick={()=>{setIsShown(false)}}/>
         </div>
            Are you sure you want to delete this item ? 
            Deleting this item will remove this data from database too and cannot be reverted.

            <div className='justify-around flex w-full w-10/12 mx-auto my-3'>
                <Button title='Cancel' variant='primary' handleClick={()=>{setIsShown(false)}}/>
                <Button title='Delete' variant='danger' handleClick={()=>{setIsShown(false)}} />
            </div>

        </div>

    </div>
  )
}

export default Modal