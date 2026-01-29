
import React, { useEffect } from 'react'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import Home from './Home'
import Contact from './components/Contact'
import Layout from './components/Layout'


function App() {
  useEffect(() => {
    alert("Welcome :)")

  })
  return (
   
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    
  )
}

export default App
