import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="add-task">
              <input type="text" class="todo-input" placeholder="        Add task..."/>
              <button class="todo-button" type="submit">+</button>
       </div>
       <section class="todo-container">
        <ul class="todo-list">
        <li>meeting
          <button className="deleteButton">delete<i class="far fa-check" ></i> </button>
          <button className="deleteButton">done<i class="fas fa-trash"></i> </button>
        </li>
        <li>meeting
        <button className="deleteButton">delete<i class="far fa-check" ></i> </button>
          <button className="deleteButton">done<i class="fas fa-trash"></i> </button>
          </li>

        </ul>
    </section>
  
</div>
  
  );
}

export default App
