import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { Moon } from '../SVG'
// import Button stories file as a module
import * as buttonStories from './Button.stories'
import * as buttonGroupStories from './ButtonGroup.stories'
const { Default, Disable, ExtraSmall } = composeStories(buttonStories)
const { Default: DefaultButtonGroup } = composeStories(buttonGroupStories)
import { buttonGroupDefaultValues, Size, Variant, BtnColorSchema } from '.'
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
export const buttonsData = [
  { text: 'button 1', colorSchema: 'green' },
  { text: 'button 2', colorSchema: 'blue' },
  { text: 'button 3', colorSchema: 'red' },
  { text: 'button 4', colorSchema: 'yellow' }
]
describe('ButtonGroup', () => {
  test('render with default styles', () => {
    render(<DefaultButtonGroup data-testid="button-group" />)
    const flexDirection =
      buttonGroupDefaultValues.orientation === 'horizontal' ? 'row' : 'column'
    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveStyle(`flex-direction:${flexDirection}`)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(buttonsData.length)
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(buttonsData[index].text)
      expect(button.classList).toContain(
        `btn-${buttonsData[index].colorSchema}-${buttonGroupDefaultValues.variant}`
      )
      expect(button.classList).toContain(`btn-${buttonGroupDefaultValues.size}`)
      if (buttonGroupDefaultValues.rounded) {
        expect(button.classList).toContain(`btn-rounded`)
      } else {
        expect(button.classList).not.toContain(`btn-rounded`)
      }
    })
  })
  test('render with custom styles', () => {
    const customProps = {
      rounded: true,
      size: 'lg' as Size,
      variant: 'outline' as Variant,
      colorSchema: 'teal' as BtnColorSchema,
      orientation: 'vertical' as const
    }
    render(<DefaultButtonGroup data-testid="button-group" {...customProps} />)
    const flexDirection = 'column'
    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toHaveStyle(`flex-direction:${flexDirection}`)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(buttonsData.length)
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(buttonsData[index].text)
      expect(button.classList).toContain(
        `btn-${customProps.colorSchema}-${customProps.variant}`
      )
      expect(button.classList).toContain(`btn-${customProps.size}`)

      expect(button.classList).toContain(`btn-rounded`)
    })
  })
})
