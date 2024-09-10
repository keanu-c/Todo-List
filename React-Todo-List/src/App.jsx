import { useState } from 'react'
import './App.css'

function App() {
  return (
    <main>
      <h1>To-Do List</h1>
      <div className="input-container">
          <input type="text" placeholder="Enter todo" id="input-todo"></input>
          <button id="add-todo">+</button>
      </div>
      <div className="container">
        <div className="todo">
          <p>write python</p>
          <div className="actions">
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App
