import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { theme } from '@common/utils'
import Stack from '.'
import Divider from '@components/atoms/Divider'
test('render with correct default styles', () => {
  render(
    <Stack data-testid="stack">
      <p>stack item 1</p>
      <p>stack item 2</p>
      <p>stack item 3</p>
      <p>stack item 4 </p>
    </Stack>
  )
  const stack = screen.getByTestId('stack')

  expect(stack).toBeInTheDocument()
  expect(stack).toHaveTextContent(
    'stack item 1stack item 2stack item 3stack item 4'
  )
  expect(stack).toHaveStyle(`flex-direction:column`)
})
test('render with correct styles when orientation="horizontal"', () => {
  render(
    <Stack data-testid="stack" orientation="horizontal">
      <p>stack item 1</p>
      <p>stack item 2</p>
      <p>stack item 3</p>
      <p>stack item 4 </p>
    </Stack>
  )
  const stack = screen.getByTestId('stack')
  expect(stack).toHaveStyle(`flex-direction:row;`)

  expect(stack).toBeInTheDocument()
  expect(stack).toHaveTextContent(
    'stack item 1stack item 2stack item 3stack item 4'
  )
})
test('adds spacing between dividers when orientation="vertical"', () => {
  const spacing = '4'
  render(
    <Stack data-testid="stack" divider="------" spacing={spacing}>
      <p>stack item 1</p>
      <p>stack item 2</p>
      <p>stack item 3</p>
      <p>stack item 4 </p>
    </Stack>
  )
  const dividers = screen.getAllByText('------')
  expect(dividers.length).toBe(3)
  const spacingWrappers = screen.getAllByTestId('spacing-wrapper')
  expect(spacingWrappers.length).toBe(3)
  expect(spacingWrappers[0]).toHaveStyle(`padding-top:${theme.border[spacing]}`)
  expect(spacingWrappers[0]).toHaveStyle(
    `padding-bottom:${theme.border[spacing]}`
  )
})
test('adds spacing between dividers when orientation="horizontal"', () => {
  const spacing = '4'
  render(
    <Stack
      data-testid="stack"
      divider={<Divider data-testid="divider" />}
      spacing={spacing}
      orientation="horizontal"
    >
      <p>stack item 1</p>
      <p>stack item 2</p>
      <p>stack item 3</p>
      <p>stack item 4 </p>
    </Stack>
  )

  const dividers = screen.getAllByTestId('divider')
  expect(dividers.length).toBe(3)
  const spacingWrappers = screen.getAllByTestId('spacing-wrapper')
  expect(spacingWrappers.length).toBe(3)
  expect(spacingWrappers[0]).toHaveStyle(
    `padding-left:${theme.border[spacing]}`
  )
  expect(spacingWrappers[0]).toHaveStyle(
    `padding-right:${theme.border[spacing]}`
  )
})
