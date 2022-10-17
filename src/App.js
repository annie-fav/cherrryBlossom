import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Main/Home'
import Canada from './Components/Cards/Canada'
import Germany from './Components/Cards/Germany'
import NewZeland from './Components/Cards/NewZeland';
import Brazil from './Components/Cards/Brazil';
import India from './Components/Cards/India';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/canada" element={<Canada/>}/>
        <Route path="/germany" element={<Germany/>}/> 
        <Route path="/newzeland" element={<NewZeland/>}/> 
        <Route path="/brazil" element={<Brazil/>}/> 
        <Route path="/india" element={<India/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
