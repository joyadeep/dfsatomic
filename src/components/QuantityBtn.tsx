import React, { useState } from 'react'
import Button from '../atoms/Button';

const QuantityBtn = () => {
    const[qty,setQty]=useState(0);

    const handlePlus=()=>{
        setQty(qty+1)
    }
    const handleMinus=()=>{
        qty>0 && setQty(qty-1)
    }
  return (
    <div className='flex items-center justify-center space-x-2'>
        <Button title='-' variant='primary' handleClick={handleMinus}/>
        <div className='w-4'>{qty}</div>
        <Button title='+' variant='primary' handleClick={handlePlus}/>
    </div>
  )
}

export default QuantityBtn