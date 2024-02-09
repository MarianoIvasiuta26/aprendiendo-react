import { useState } from 'react'
import './App.css'

//Definimos los componentes funcionales necesarios

const AddTodoForm = () => {
  return (
    <form>
      <input type='text' />
      <button onClick={addTaskToList}>Add Todo</button>
    </form>
  )
}

const addTaskToList = () => {
  
}

const TodoItem = () => {
  return (
    <div className='todo-item'>
      <input type='checkbox' />
      <p>Placeholder text here</p>
    </div>
  )
}

const TodoList = () => {
  return (
    <div className='todo-list'>
      <h2>Todo List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

function App() {
 

  return (

    <main className='tasks'>
      <h1>Tasks</h1>
      <AddTodoForm />
      <TodoList />
    </main>

  )
}

export default App
