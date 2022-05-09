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
import FoodMenu from './pages/FoodMenu';
import Menulist from './components/Menulist';
import Modal from './components/Modal';

function App() {

  return (
    <div className='bg-gray-100 h-screen'>
      <Header/>
     <Routes>
       <Route path='/' element={<LoginPage/>} />
       <Route path='/forgot_password' element={<Reset/>} />
       <Route path='/feedback' element={<Feedback/>}/>
       <Route path='/menu' element={<Menulist/>} />
       <Route path="/modal" element={<Modal/>} />

     </Routes>
     
    </div>
  )
}

export default App
