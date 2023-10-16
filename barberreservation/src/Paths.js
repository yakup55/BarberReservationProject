import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

export default function Paths() {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

    </Routes>
  )
}
