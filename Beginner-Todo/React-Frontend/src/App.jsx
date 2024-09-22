import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

function writeTodo(e) {
  setInputVal(e.target.value);
  console.log(inputVal);
}

function addTodo() {
  if (inputVal != "") {
    setTodos((prevTodos) => [...prevTodos, inputVal]);
    setInputVal("");
  }
}

function deleteTodo(index) {
  setTodos(prevTodos => prevTodos.filter((prevTodo, prevTodoIndex) => {
    return prevTodoIndex != index;
  }))
}

  return (
    <main>
      <h1>To-Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo} 
        addTodo={addTodo}>
      </InputContainer>
      <TodoContainer 
        todos={todos} 
        deleteTodo={deleteTodo}>
      </TodoContainer>
    </main>
  );
}

function InputContainer({inputVal, addTodo, writeTodo}) {
  return (
      <div className="input-container">
          <input 
          type="text" 
          placeholder="Enter todo" 
          value = {inputVal} 
          onChange={writeTodo}>
          </input>
          <button onClick={addTodo}>+</button>
      </div>
  );
}
// Pass in {todos, deleteTodo} since todos is accessing the map, creating todo and index
function TodoContainer({todos, deleteTodo}) {
  return (
    <div className="container">
    {
      todos.map((todo, index) => {
        return (
          <Todo todo={todo}
           index={index}
           deleteTodo={deleteTodo}>
          </Todo>
        );
      })
    }
    </div>
  );
}

function Todo ({todo, index, deleteTodo}) {
  <div className="todo" key={index}>
    <p>{todo}</p>
    <div className="actions">
      <input type="checkbox" />
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  </div>
}
export default App
