import React, { useState } from 'react'
import Button from '../modules/Button'
import Input from '../modules/Input'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {InputSchema} from '../schema/InputSchema'

const Form = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  }=useForm({
    resolver:yupResolver(InputSchema),
    mode:'all'
  })

  const[user,setUser]=useState({
    email:'',
    password:''
  })
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setUser({...user,[event.target.name]:event.target.value});
  }

  // const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>
  // {
  //   e.preventDefault();
  //   console.log(user);
    
  // }

  return (
    <div className='w-10/12 font-poppins border bg-white   md:w-1/3 px-4 bg-slate-50 rounded-lg shadow-md overflow-hidden py-2'>

        <form className=' flex flex-col text-center'  >
            <div className=' text-center text-4xl font-semibold text-slate-700 my-5'>Login</div>
            <Input type='text' placeholder='enter email' name="email"  style='w-11/12' />
            <Input type='password' placeholder='enter password' name='password' style='w-11/12' />
            <Button title='Login' variant='primary' style=' mx-auto' />
        </form>
        
        
        <div className='text-blue-500 text-center underline'>forgot password</div>
        <div className='my-5'>
          Deerhold Food System <span className='font-bold'>DFS</span> 
        </div>
        <div className='text-center'>
          © 2022 Deerhold Nepal Ltd.
        </div>
       
    </div>

  )
}

export default Form