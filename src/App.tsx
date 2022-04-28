import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import {Route,Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Feedback from './pages/Feedback'
import Button from './atoms/Button';
import Reset from './pages/Reset';

function App() {

  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
     <Routes>
       <Route path='/' element={<LoginPage/>} />
       <Route path='/forgot_password' element={<Reset/>} />
       <Route path='/feedback' element={<Feedback/>}/>

     </Routes>
     
     <Button title='test btn' variant='primary' style='hover:transition-all triansition duration-700 hover:ease-in-out hover:duration-700 hover:translate-x-5'/>
    {/* <Reset/> */}
    </div>
  )
}

export default App
