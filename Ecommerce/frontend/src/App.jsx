import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import Shop from "./components/Shop"
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import Contact from './components/Contact';
import Login from './components/Admin/Login';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/fontawesome.min.css" integrity="sha512-M5Kq4YVQrjg5c2wsZSn27Dkfm/2ALfxmun0vUE3mPiJyK53hQBHYCVAtvMYEC7ZXmYLg8DVG4tF8gD27WmDbsg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/Admin/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

          <Route path='/admin/login' element={<Login />}></Route>
          <Route path='/admin/dashboard' element={<Dashboard />}></Route>


        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
