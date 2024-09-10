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
      <div className="container">
      {
        todos.map((todo, index) => {
          return (
            <div className="todo" key={index}>
            <p>{todo}</p>
            <div className="actions">
              <input type="checkbox" />
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
          );
        })
      }
      </div>
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

function todoContainer({}) {
  return (
    <div className="container">
    {
      todos.map((todo, index) => {
        return (
          <div className="todo" key={index}>
          <p>{todo}</p>
          <div className="actions">
            <input type="checkbox" />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        </div>
        );
      })
    }
    </div>
  );
}
export default App
