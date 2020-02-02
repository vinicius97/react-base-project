import React from 'react';
import { render } from '@testing-library/react';
import Home from './';

test('renders Home screen', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
