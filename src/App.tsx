import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './atoms/Input'
import Button from './atoms/Button'
import Form from './components/Form'
import {Route,Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Filterbutton from './molecules/Filterbutton'
import Searchbar from './molecules/Searchbar'
import Feedback from './pages/Feedback'

function App() {

  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      {/* <Filterbutton/> */}
      {/* <Searchbar/> */}
     <Routes>
       <Route path='/' element={<LoginPage/>} />
       <Route path='/forgot_password' element={<Form/>} />
       <Route path='/feedback' element={<Feedback/>}/>

     </Routes>
     
    
    </div>
  )
}

export default App
