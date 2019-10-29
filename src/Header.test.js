import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
// import axiosMock from 'axios'
import Header from './Header'

afterEach(cleanup)

it('should render', () => {
  const { asFragment } = render(<Header text='Hello!' />)
  expect(asFragment()).toMatchSnapshot()
})

it('should insert text in h1', () => {
  const { getByTestId, getByText } = render(<Header text='Hello!' />)
  expect(getByTestId('title')).toHaveTextContent('Hello!')
  expect(getByText('Hello!')).toHaveClass('title')
})
