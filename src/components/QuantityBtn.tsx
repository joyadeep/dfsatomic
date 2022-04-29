import React, { useState } from 'react'
import Button from '../atoms/Button';

const QuantityBtn = () => {
    const[qty,setQty]=useState(0);

    const handlePlus=()=>{
        setQty(qty+1)
    }
    const handleMinus=()=>{
        setQty(qty-1)
    }
  return (
    <div className='flex items-center justify-center space-x-2'>
        <Button title='+' variant='primary' handleClick={handlePlus}/>
        <div className='w-4'>{qty}</div>
        <Button title='-' variant='primary' handleClick={handleMinus}/>
    </div>
  )
}

export default QuantityBtn