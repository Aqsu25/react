import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Todo />
    // </>
  )
}

export default App
