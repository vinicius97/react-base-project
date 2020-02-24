import React from 'react'
import { render } from '@testing-library/react'
import { SomeComponent } from './SomeComponent'

const renderComponent = (props = {}) => {
  return render(<SomeComponent {...props} />)
}

describe('SomeComponent component', () => {
  it('should render default properties', () => {
    const { getByText } = renderComponent()
    const linkElement = getByText(/title/i)
    expect(linkElement).toBeInTheDocument()
  })
  it('should render someProperty correctly', () => {
    const { getByText } = renderComponent({ someProperty: 'Good property' })
    const linkElement = getByText(/title/i)
    expect(linkElement).toBeInTheDocument()
  })
})
