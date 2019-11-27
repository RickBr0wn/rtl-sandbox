import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clickers from './Clickers';

afterEach(cleanup);

it('should display the count', () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId('count')).toHaveTextContent('0');
});

it('should increment the counter when the `UP` button is clicked', () => {
  const { getByText, getByTestId } = render(<Clickers />);
  fireEvent.click(getByText('Up'));
  expect(getByTestId('count')).toHaveTextContent('1');
});

it('should asynchronously decrement the counter when the `DOWN` button is clicked', async () => {
  const { getByText } = render(<Clickers />);
  fireEvent.click(getByText('Down'));
  const counterSpan = await waitForElement(() => getByText('-1'));
  expect(counterSpan).toHaveTextContent('-1');
});
