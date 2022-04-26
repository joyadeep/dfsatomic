import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './modules/Input'
import Button from './modules/Button'
import Form from './components/Form'
import {Route,Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
     <Routes>
       <Route path='/' element={<LoginPage/>} />
       <Route path='/forgot_password' element={<Form/>} />

     </Routes>
     
    
    </div>
  )
}

export default App
