import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { Moon } from '../SVG'
// import Button stories file as a module
import * as stories from './Button.stories'
const { Default, Disable, ExtraSmall } = composeStories(stories)

test('render children', () => {
  render(<Default />)

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent(/Content/)
})

test('onclick handler is called', async () => {
  const onClickSpy = jest.fn()
  render(<Default onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('submit handler is called', async () => {
  const oSubmitSpy = jest.fn()
  render(<Default onSubmit={oSubmitSpy} type="submit" />)
  const buttonElement = screen.getByRole('button')
  fireEvent.submit(buttonElement)
  expect(oSubmitSpy).toHaveBeenCalled()
})

test("don't call onClick callback when disabled", async () => {
  const onClickSpy = jest.fn()
  render(<Disable onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement.attributes.getNamedItem('disabled')).toBeTruthy()

  buttonElement.click()
  expect(onClickSpy).not.toHaveBeenCalled()
})

test('allows to add additional classes', async () => {
  render(<Default className="my-class" />)
  const buttonElement = screen.getByRole('button')

  expect(buttonElement).toHaveClass('my-class')
})

test('allows to add inline styles', () => {
  render(
    <Default
      style={{
        backgroundColor: 'red'
      }}
    />
  )

  const buttonElement = screen.getByRole('button')
  const styles = getComputedStyle(buttonElement)
  expect(styles.backgroundColor).toBe('red')
})

test('contain default classes', () => {
  render(<Default />)

  const buttonElement = screen.getByRole('button')
  const className = buttonElement.className
  expect(className).toContain('solid')
  expect(className).toContain('gray')
  expect(className).toContain('md')
})

test('apply correct classes', () => {
  render(<ExtraSmall />)

  const buttonElement = screen.getByRole('button')
  const className = buttonElement.className
  expect(className).toContain(ExtraSmall.args?.size)
  expect(className).toContain(ExtraSmall.args?.colorSchema)
  expect(className).toContain(ExtraSmall.args?.variant)
})

test('renders start and end icons end text content', () => {
  render(
    <Default
      startIcon={<Moon data-testid="start-icon" />}
      endIcon={<Moon data-testid="end-icon" />}
    />
  )

  const buttonElement = screen.getByRole('button')
  const startIcon = screen.getByTestId('start-icon')
  const endIcon = screen.getByTestId('end-icon')
  expect(buttonElement).toHaveTextContent(/Content/)
  expect(startIcon).toBeInTheDocument()
  expect(endIcon).toBeInTheDocument()
})

test('set  data-theme="light" when prop themeMode is not provided', () => {
  render(<Default />)

  const buttonElement = screen.getByRole('button')

  expect(buttonElement).toHaveAttribute('data-theme', 'light')
})

test('set  data-theme="dark" when  prop themeMode="dark"', () => {
  render(<Default themeMode="dark" />)

  const buttonElement = screen.getByRole('button')

  expect(buttonElement).toHaveAttribute('data-theme', 'dark')
})

test('set  data-theme="light" when  prop themeMode="light"', () => {
  render(<Default themeMode="light" disabled />)

  const buttonElement = screen.getByRole('button')

  expect(buttonElement).toHaveAttribute('data-theme', 'light')
})
