import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Spinner, { defaultProps, variantSchema } from './index'
// import Spinner stories file as a module

test('render width default props', () => {
  render(<Spinner />)

  const buttonElement = screen.getByRole('status')
  expect(buttonElement).toBeInTheDocument()
  const className = buttonElement.className
  expect(className).toContain(defaultProps.variant)
})

variantSchema.forEach((variant) => {
  test(`render with ${variant} class when pass as variant prop`, () => {
    render(<Spinner variant={variant} />)
    const buttonElement = screen.getByRole('status')
    expect(buttonElement).toBeInTheDocument()
    const className = buttonElement.className
    expect(className).toContain(variant)
  })
})
