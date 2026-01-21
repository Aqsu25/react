import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'


function App() {

  return (
    <div>
      <Navbar />
      <main className="p-8 mt-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to ShopEase</h1>
        <p className="mt-4 text-gray-600">
          Your one-stop shop for all your needs!
        </p>
      </main>
    </div>
  )
}

export default App
