import React from 'react'
import { createStore } from 'redux'
import { fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from './helpers'
import Counter from './Counter'

afterEach(cleanup)

it('should render with redux with defaults', () => {
  // see ./helpers
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

it('should render with redux with custom store that can never be changed', () => {
  const store = createStore(() => ({ count: 1000 }))
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    store,
  })
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')
  fireEvent.click(getByText('-'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')
})

//  O       o O       o O       o
//  | O   o | | O   o | | O   o |
//  | | O | | | | O | | | | O | |
//  | o   O | | o   O | | o   O |
//  o       O o       O o       O
