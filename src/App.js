import React from 'react'
import Clickers from './Clickers'
import Fetch from './Fetch'
import Counter from './Counter'

function App() {
  return (
    <div>
      <h1>React Testing Library Sandbox</h1>
      <Clickers />
      <hr />
      <Fetch url="https://jsonplaceholder.typicode.com/todos/1" />
      <hr />
      <Counter />
    </div>
  )
}

export default App
