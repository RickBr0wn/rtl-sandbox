import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { reducer } from './reducers'
import Counter from './Counter'

afterEach(cleanup)

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

it('should render with redux with defaults', () => {
  const { getByTestId } = renderWithRedux(<Counter />)
  expect(getByTestId('count-value')).toHaveTextContent('0')
})

it('should render with redux with custom initial state', () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initialState: { count: 3 },
  })
  expect(getByTestId('count-value')).toHaveTextContent('3')
})

it('should decrement the state by one, when the minus button is clicked', () => {
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    initialState: { count: 3 },
  })
  fireEvent.click(getByText('-'))
  expect(getByTestId('count-value')).toHaveTextContent('2')
})

it('should increment the state by one, when the plus button is clicked', () => {
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    initialState: { count: 3 },
  })
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('4')
})

it('can render with redux with custom store that can never be changed', () => {
  const store = createStore(() => ({ count: 1000 }))
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    store,
  })
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')
  fireEvent.click(getByText('-'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')
})
