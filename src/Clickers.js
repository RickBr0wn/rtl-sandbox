import React from 'react'

export default function Clickers() {
  const [count, setCount] = React.useState(0)

  const increase = () => setCount(count + 1)

  const decrease = () =>
    setTimeout(() => {
      setCount(count - 1)
    }, 1000)

  return (
    <div>
      <h2>Testing async actions</h2>
      <button onClick={increase}>Up</button>
      <span test-id="count">{count}</span>
      <button onClick={decrease}>Down</button>
    </div>
  )
}
