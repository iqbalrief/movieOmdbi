import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './pages/Detail'
import Cart from './pages/Cart';


function App() {


  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Detail />} path='Detail/:imdbId' />
          <Route element={<Cart />} path='/cart' />

          
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
