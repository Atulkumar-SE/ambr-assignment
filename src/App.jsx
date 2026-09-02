import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import EthnicWear from './pages/EthnicWear';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import MainHeader from './component/common/header/MainHeader';
import Footer from './component/common/footer/Footer';

function App() {

  return (
   <>
   <MainHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/ethnic-wear' element={<EthnicWear/>}/>
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/contact-us' element={<Contactus/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App
