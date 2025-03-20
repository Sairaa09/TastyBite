import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import Payment from './pages/Payment'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
