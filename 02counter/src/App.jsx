import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [count, setCount] = useState(0);  
    const addvalue = () => {
        count = count + 1;
        setCount(count);

    }

  return (
    <>
        <h1>Utkarsh Jeet King In The North</h1>
        <h2>Counter : {count}</h2>
        <button
        onClick={addvalue}
        >Increment</button>
        <br />
        <button>Decrement</button>
    </> 
  )
}

export default App
