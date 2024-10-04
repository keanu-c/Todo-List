import { useState } from 'react'

function App() {
  const [inputTodo, setInputTodo] = useState("")

  return (
    <div className="flex flex-col items-center gap-8 pt-8 pb-32 bg-blue-50">
      <div className="text-2xl">Todo List</div>

      <div className="flex gap-2">
        <input 
         className='border text-x1 rounded-lg shadow-md'
         type="text"
         placeholder='Enter Todo'
         value={inputTodo}
         onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className='text-lg bg-red-500 hover:bg-red-400 text-white rounded-xl py-1 px-2'>Add</button>
        <button className='text-lg bg-gray-500 hover:bg-gray-400 text-white rounded-xl py-1 px-2'>Clear</button>
      </div>

      <div className="flex flex-col gap-4 bg-blue-200 p-3 w-5/6 rounded-xl">
        <div className="flex justify-between items-center bg-blue-400 text-white p-3 rounded-lg">

          <div className="flex gap-2 pl-1">
            <input type="checkbox" />
            <div className="">Read Code</div>
          </div>

          <div className="flex gap-2">
            <button className='text-lg bg-green-600 hover:bg-green-500 text-white rounded-xl py-1 px-2'>Edit</button>
            <button className='text-lg bg-red-600 hover:bg-red-500 text-white rounded-xl py-1 px-2'>Delete</button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-blue-400 text-white p-3 rounded-lg">

          <div className="flex gap-2 pl-1">
            <input type="checkbox" />
            <div className="">Read Code</div>
          </div>

          <div className="flex gap-2">
            <button className='text-lg bg-green-600 hover:bg-green-500 text-white rounded-xl py-1 px-2'>Edit</button>
            <button className='text-lg bg-red-600 hover:bg-red-500 text-white rounded-xl py-1 px-2'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
