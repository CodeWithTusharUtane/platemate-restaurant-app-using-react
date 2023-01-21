import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import LogIn from './Pages/LogIn'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Offers from './Pages/Offers'
import SignUp from './Pages/SignUp'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Menu" element={<Menu/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Offers" element={<Offers/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
     <Route path="/login" element={<LogIn/>}/>
     <Route path="/Cart" element={<Cart/>}/>
     <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
