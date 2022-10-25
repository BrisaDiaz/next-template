import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

// import Button stories file as a module
import * as stories from './Button.stories'
const { Default, Disable, ExtraSmall } = composeStories(stories)

test('render children', () => {
  render(<Default />)

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).not.toBeNull()
  expect(buttonElement.textContent).toEqual('Content')
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

  expect(buttonElement.classList).toContain('my-class')
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
  expect(className).toContain(ExtraSmall.args?.color)
  expect(className).toContain(ExtraSmall.args?.variant)
})
