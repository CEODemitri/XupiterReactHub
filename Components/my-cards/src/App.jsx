import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
        <img src="beach.webp" alt="" className='w-full' />
        <div className='px-6 py-4'>
          <div className='font-bold text-mauve-600 text-xl mb-2'>
            Photo By Victor Rosario
          </div>
        </div>
      </div>
    </>
  )
}

export default App
