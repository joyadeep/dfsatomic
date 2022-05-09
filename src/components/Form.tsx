import React, { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {InputSchema} from '../schema/InputSchema'
import {Link} from 'react-router-dom'
import {PlusIcon} from '@heroicons/react/outline'
import Filterbutton from '../molecules/Filterbutton';
import Searchbar from '../molecules/Searchbar';
import Modal from './Modal';
import Checkbox from '../atoms/Checkbox';

const Form = () => {
 const [isSelected,setIsSelected]=useState(false)
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
    <>
    <div className='w-10/12 font-poppins border  sm:w-1/3 px-4 bg-slate-50 rounded-lg shadow-md overflow-hidden py-2'>

        <form className=' flex flex-col text-center'  >
            <h2 className='text-center text-gray-700 my-5'>Login</h2>
            {/* <Filterbutton/> */}
            <Input type='text' placeholder='Enter email' name="email" visibility='invisible' style='mx-auto' />
            <Input type='password' placeholder='Enter password' name='password' visibility='invisible' style=' mx-auto' />
            <Button title='Login' variant='primary' style=' mx-auto h-11 text-xl'/>
        </form>
        
        
        <Link to="/forgot_password" className='text-blue-500 flex justify-center my-2 underline' >forgot password</Link>
        <div className='my-5'>
          Deerhold Food System <span className='font-bold'>DFS</span> 
        </div>
        <div className='text-center'>
          © 2022 Deerhold Nepal Ltd.
          </div>
    </div>

   
</>
  )
}

export default Form