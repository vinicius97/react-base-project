import React from 'react'
import { render } from '@testing-library/react'
import NotFound from './'

test('renders NotFound screen', () => {
  const { getByText } = render(<NotFound />)
  const linkElement = getByText(/Not found/i)
  expect(linkElement).toBeInTheDocument()
})
