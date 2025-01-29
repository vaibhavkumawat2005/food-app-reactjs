import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/loginPop/LoginPopUp'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin = {setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<Placeorder/>}></Route>
      <Route></Route>
      
      </Routes>
     
     

    </div>
    <Footer/>
    </>
  )
}

export default App
