import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { theme } from '@common/utils'
import Divider from '.'

test('render with correct default styles', () => {
  render(<Divider data-testid="divider" />)
  const divider = screen.getByTestId('divider')

  expect(divider).toBeInTheDocument()
  expect(divider).toHaveStyle(`border:${theme.border['1']}`)
  expect(divider).toHaveStyle(`border-color:var(--colors-border-color)`)
  expect(divider).toHaveStyle(`flex-direction:row`)
})
test('render with children', () => {
  render(<Divider data-testid="divider">some text content</Divider>)
  const divider = screen.getByTestId('divider')
  expect(divider).toHaveTextContent(/some text content/)
})
test('render with content when  orientation="vertical"', () => {
  render(<Divider data-testid="divider" orientation="vertical" />)
  const divider = screen.getByTestId('divider')
  expect(divider).toBeInTheDocument()
  expect(divider).toHaveStyle(`border:${theme.border['1']}`)
  expect(divider).toHaveStyle(`border-color:var(--colors-border-color)`)
  expect(divider).toHaveStyle(`flex-direction:column`)
})
test('render with children  when  orientation="vertical" ', () => {
  render(
    <Divider data-testid="divider" orientation="vertical">
      some text content
    </Divider>
  )
  const divider = screen.getByTestId('divider')
  expect(divider).toHaveTextContent(/some text content/)
})
