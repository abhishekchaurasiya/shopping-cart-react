import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className=''>
      <div className='bg-slate-900'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={"This page is not found!"} />
        <Route />
      </Routes>
    </div>
  )
}

export default App

