import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import ModeSwitch from '.'

test('render  width light mode attributes as default', () => {
  render(<ModeSwitch />)

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveAttribute('data-theme', 'light')
  expect(buttonElement).toHaveAttribute('aria-label', 'switch to dark mode')
})

test('render width dark mode attributes when prop themeMode="dark"', () => {
  render(<ModeSwitch themeMode="dark" />)

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveAttribute('data-theme', 'dark')
  expect(buttonElement).toHaveAttribute('aria-label', 'switch to light mode')
})

const toggleThemeMode = jest.fn()

test('triggers onClick function when clicked', () => {
  render(<ModeSwitch onClick={toggleThemeMode} />)

  const buttonElement = screen.getByRole('button')

  fireEvent.click(buttonElement)
  expect(toggleThemeMode).toHaveBeenCalledTimes(1)
  fireEvent.click(buttonElement)
  expect(toggleThemeMode).toHaveBeenCalledTimes(2)
})
