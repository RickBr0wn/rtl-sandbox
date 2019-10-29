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
      <button onClick={increase}>Up</button>
      <span data-testid='count'>{count}</span>
      <button onClick={decrease}>Down</button>
    </div>
  )
}
