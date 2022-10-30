import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Text, { defaultValue, ExtraProps } from './Index'
test('contain Text classes', () => {
  render(<Text>Hello</Text>)

  const textElement = screen.getByText('Hello')
  const className = textElement.className
  expect(className).toContain(defaultValue.weight)
  expect(className).toContain(defaultValue.align)
  expect(className).toContain(defaultValue.color)
  expect(className).toContain(defaultValue.size)
  expect(className).toContain(defaultValue.align)
})

test('apply correct classes and component', () => {
  const props = {
    component: 'h2',
    color: 'blue',
    size: 'xl',
    align: 'center',
    weight: 'extrabold'
  } as ExtraProps

  render(<Text {...props}>Hello</Text>)

  const textElement = screen.getByText('Hello')
  const className = textElement.className
  expect(className).toContain(props.weight)
  expect(className).toContain(props.align)
  expect(className).toContain(props.color)
  expect(className).toContain(props.size)
  expect(className).toContain(props.align)
  expect(textElement.tagName).toBe('H2')
})
test('set  data-theme="light" when prop themeMode is not provided', () => {
  render(<Text>Hello</Text>)

  const textElement = screen.getByText('Hello')

  expect(textElement).toHaveAttribute('data-theme', 'light')
})

test('set  data-theme="dark" when  prop themeMode="dark"', () => {
  render(<Text themeMode="dark">Hello</Text>)

  const textElement = screen.getByText('Hello')

  expect(textElement).toHaveAttribute('data-theme', 'dark')
})

test('set  data-theme="light" when  prop themeMode="light"', () => {
  render(<Text themeMode="light">Hello</Text>)

  const textElement = screen.getByText('Hello')

  expect(textElement).toHaveAttribute('data-theme', 'light')
})
