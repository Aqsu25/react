import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)

  const addvalue = () => {
    console.log("Value Added Successfully", counter);
    counter = counter + 1
    setcounter(counter)
  }

  const removevalue = () => {
    console.log("Value Remove Successfully", counter);
    counter = counter - 1
    setcounter(counter)
  }
  // let counter = 15
  return (
    <>
      <h1>Lets start React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>Add Value{counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
