import { useState, useEffect } from 'react'
import axios from "axios"; // Library for HTTP requests

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTodoDesc, setEditTodoDesc] = useState("");
  const [editTodoID, setEditTodoID] = useState(0);
  const [editTodoChecked, setEditTodoChecked] = useState(false);

  useEffect(() => {
      const resp = axios.get("/todos").then(resp => {
        setTodos(resp.data);
      })
  }, []);

  // Add todo
  async function addTodo(e) {
    const data = {
      desc: inputTodo,
      completed: false,
    };
    const resp = await axios.post("/todos", data);
    if (resp.data.success) {
      setTodos(prevTodos => [...prevTodos, resp.data.newTodo.rows[0]]);
    }
    setInputTodo("");
  }
  // Edit Todo
  async function editTodo(e, todo) {

  }
  // Delete Todo
  async function deleteTodo(e, todo) {
    const resp = await axios.delete(`/todos/${todo.todo_id}`);
    if (resp.data.success) {
      setTodos(prevTodos => prevTodos.filter(t => t.todo_id != todo.todo_id));
    }
  }
  // Clear all todos
  async function clearTodos(e) {
    const resp = await axios.delete(`/todos`);
    setTodos([]);
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-8 pb-32 font-mono bg-blue-50">
      <div className="text-2xl">Todo List</div>

      <div className="flex gap-2">
        <input 
         className='border text-x1 rounded-lg shadow-md'
         type="text"
         placeholder='Enter Todo'
         value={inputTodo}
         onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={addTodo} className='text-lg bg-red-500 hover:bg-red-400 text-white rounded-xl py-1 px-2'>Add</button>
        <button onClick={clearTodos} className='text-lg bg-gray-500 hover:bg-gray-400 text-white rounded-xl py-1 px-2'>Clear</button>
      </div>

      {todos.length >= 1 && ( // Show only if there is at least one todo
        <div className="flex flex-col gap-4 bg-blue-200 p-3 w-5/6 rounded-xl">
          {todos.map((todo, index) => {
            return (
              <div key={todo.todo_id} className="flex justify-between items-center bg-blue-400 text-white p-3 rounded-lg">

                <div className="flex gap-2 pl-1">
                  <input type="checkbox" />
                  <div className="">{todo.todo_desc}</div>
                </div>
      
                <div className="flex gap-2">
                  <button onClick={(e) => editTodo(e, todo)} className='text-lg bg-green-600 hover:bg-green-500 text-white rounded-xl py-1 px-2'>Edit</button>
                  <button onClick={(e) => deleteTodo(e, todo)} className='text-lg bg-red-600 hover:bg-red-500 text-white rounded-xl py-1 px-2'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
