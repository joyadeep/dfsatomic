import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './modules/Input'
import Button from './modules/Button'

function App() {

  return (
    <div className='bg-slate-100 h-screen flex items-center justify-center'>
      <div className='w-1/3'>
        <Input type="text" placeholder="enter your name"/>
        <Button title="signup" disabled={false} variant="secondary" />
      </div>
    
    </div>
  )
}

export default App
