import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Text, { defaultValue, TextProps } from './index'

test('contain Text classes', () => {
  render(<Text>Hello</Text>)

  const textElement = screen.getByText('Hello')
  const className = textElement.className
  expect(className).toContain(defaultValue.fontWeight)
  expect(className).toContain(defaultValue.color)
  expect(className).toContain(defaultValue.fontSize)
})

test('apply correct classes and as', () => {
  const props = {
    as: 'h2',
    color: 'blue',
    fontSize: 'xl',
    textAlign: 'center',
    fontWeight: 'extrabold'
  } as TextProps

  render(<Text {...props}>Hello</Text>)

  const textElement = screen.getByText('Hello')
  const className = textElement.className
  expect(className).toContain(props.fontWeight)
  expect(className).toContain(props.color)
  expect(className).toContain(props.fontSize)
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
