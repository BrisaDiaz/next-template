import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Backdrop from '.'

test('render children and is hidden by default', () => {
  render(
    <Backdrop data-testid="backdrop">
      <p>content</p>
    </Backdrop>
  )
  const backdrop = screen.getByTestId('backdrop')
  expect(backdrop).toHaveStyle('visibility:hidden')
  expect(backdrop).toHaveTextContent('content')
})
test('render children and is visible when isOpen="true"', () => {
  render(
    <Backdrop data-testid="backdrop" isOpen={true}>
      <p>content</p>
    </Backdrop>
  )
  const backdrop = screen.getByTestId('backdrop')
  expect(backdrop).toHaveStyle('visibility:visible')
  expect(backdrop).toHaveTextContent('content')
})
