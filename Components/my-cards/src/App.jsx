import './App.css'
import ReactCard from './Components/ReactCard'

function App() {
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-md shadow-indigo-600 bg-white mb-5'>
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

      <div className='max-w-xs rounded-sm overflow-hidden shadow-md shadow-mauve-600 bg-dirtyOrange-100'>
        <img src="/fish.png" alt="" className='w-full' />
        <div className="px-6 py-4">
          <div className="font-bold text-dirtyOrange-900 text-xl mb-2">
            Painting by ceoDemitri
          </div>

          <ul className='text-dirtyOrange-800 text-right'>
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
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-dirtyOrange-800 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-dirtyOrange-800 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-dirtyOrange-800 mr-2">
            #tag3
          </span>
        </div>
      </div>

      {/* Using Percentage and I love the responsove look. Possibly not optimized but working great. */}
      <div className='max-w-[30%] rounded overflow-hidden shadow-md shadow-indigo-600 bg-white mt-5 hover:scale-110 hover:mt-8'>
        <img src="see.webp" alt="Bird Eye View of a Coast" className='w-full' />
        <div className='px-6 py-4'>
          <div className='font-bold text-mauve-700 text-xl mb-2'>
            Photo By Victor Rosario
          </div>

          <ul className='text-mauve-400 text-right'>
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
      </div>

      <ReactCard/>
    </>
  )
}

export default App
