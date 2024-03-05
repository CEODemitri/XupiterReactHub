import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-md shadow-indigo-600 bg-white'>
        <img src="beach.webp" alt="Bird Eye View of a Coast" className='w-full' />
        <div className='px-6 py-4'>
          <div className='font-bold text-mauve-600 text-xl mb-2'>
            Photo By Victor Rosario
          </div>

          <ul className='text-mauve-500 text-right'>
            <li>
              <strong>Views: </strong>
              52
            </li>
            <li>
              <strong>Likes: </strong>
              12
            </li>
            <li>
              <strong>Downloads: </strong>
              2
            </li>
          </ul>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </>
  )
}

export default App
