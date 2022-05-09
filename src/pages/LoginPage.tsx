import React, { useState } from 'react'
import Button from '../atoms/Button';
import Form from '../components/Form'
import Modal from '../components/Modal';

const LoginPage = () => {
  const[isShown,setIsShown]=useState(false);

  const handleClick=()=>{
    setIsShown(true);
  }

  return (
    <>
    <div className='flex justify-center bg-gray-100 items-center h-full overflow-x-hidden'>
        <Form/>
    </div>
    <Button title='click here' variant='primary' handleClick={handleClick}/>
    { isShown && <Modal isShown={isShown} setIsShown={setIsShown} />}
    </>
  )
}

export default LoginPage