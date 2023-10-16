import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './Navbar'
import Training from './pages/Training'
import Contact from './pages/Contact'
import About from './pages/About'
import Shop from './pages/Shop'
import Beginner from './pages/Beginner'
import Advanced from './pages/Advanced'
import Register from './pages/Register'
import {UserContext } from './cartContext/UserContext'



export default function App() {

  const {users} = React.useContext(UserContext)
  return (
    <div>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/training" element={<Training />}/>
      <Route path="training/beginner" element={<Beginner />}  />
      <Route path="training/advanced"  element={<Advanced />}  />

      
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutUs" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/register" element={!users ? <Register />: <Navigate to="/"/>} />

      
    </Routes>
    </BrowserRouter>
    </div>
  );
}


