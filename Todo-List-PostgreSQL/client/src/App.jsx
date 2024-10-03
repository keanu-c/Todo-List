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
    </div>
  )
}

export default App
