import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gallery</h1>
      <div className='carousel'>
        <button>Left</button>
        <section className='images' id='images'></section>
        <button>Right</button>
      </div>
    </>
  )
}

export default App
