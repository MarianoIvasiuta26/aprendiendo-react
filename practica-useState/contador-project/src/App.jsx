import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [cant, setCant] = useState(0)
  const [incrementcount, setIncrementCount] = useState(0)
  const [decrementcount, setDecrementCount] = useState(0)
  const [incrementCustomCount, setIncrementCustomCount] = useState(0)
  const [decrementCustomCount, setDecrementCustomCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
    setIncrementCount(incrementcount + 1)
  }

  const handleIncrementCustom = () => {
    setCount(count + cant)
    setIncrementCustomCount(incrementCustomCount + 1)
  }

  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1)
      setDecrementCount(decrementcount + 1)
    }
  }

  const handleDecrementCustom = () => {
    if(count > 0){
      setCount(count - cant)
      setDecrementCustomCount(decrementCustomCount + 1)
    }
  }

  const handleReset = () => {
    setCount(0)
    setCant(0)
    setIncrementCount(0)
    setDecrementCount(0)
    setIncrementCustomCount(0)
    setDecrementCustomCount(0)
  }

  return (
    <main className='main-container'>
      <section className='app-title'>
        <h1> Counter App </h1>      
      </section>

      <section className='buttons'>
          {
            count > 0 && cant <= count &&
            <button 
              className='btn-decrement'
              onClick={handleDecrementCustom} 
            >-{cant}</button>
          }
          
          {
            count > 0 &&
            <button 
              className='btn-decrement'
              onClick={handleDecrement} 
            >-1</button>
          }
          
          <div className='screen'>
            <p>{count}</p>
          </div>

          <button 
            className='btn-increment' 
            onClick={handleIncrement}
          >+1</button>
          <button 
            className='btn-increment' 
            onClick={handleIncrementCustom}
          >+{cant}</button>
      </section>

      <section className='screen-count'>
        <p>Increment: {incrementcount}</p>
        <p>Decrement: {decrementcount}</p>
      </section>

      <section className='buttons'>
        <button className='btn-reset' onClick={handleReset}>
          Resetear
        </button>
      </section>

      <section className='cant-custom'>
        <p>Ingrese la cantidad a incrementar o decrementar:</p>
        <input type="number" value={cant} onChange={(e) => setCant(parseInt(e.target.value, 10))}/>
      </section>

      <section className='screen-count'>
        <p>Increment custom: {incrementCustomCount}</p>
        <p>Decrement custom: {decrementCustomCount}</p>
      </section>
    </main>
  )
}

export default App
