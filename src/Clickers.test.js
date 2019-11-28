import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
<<<<<<< HEAD
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Clickers from './Clickers'
=======
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clickers from './Clickers';
>>>>>>> f0588adf2f7fdce5544f91e3a1776f156fbd9ddf

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
<<<<<<< HEAD
  const { getByText } = render(<Clickers />)
  fireEvent.click(getByText('Down'))
  const counterSpan = await waitForElement(() => getByText('-1'))
  expect(counterSpan).toHaveTextContent('-1')
})
=======
  const { getByText } = render(<Clickers />);
  fireEvent.click(getByText('Down'));
  const counterSpan = await waitForElement(() => getByText('-1'));
  expect(counterSpan).toHaveTextContent('-1');
});
>>>>>>> f0588adf2f7fdce5544f91e3a1776f156fbd9ddf
