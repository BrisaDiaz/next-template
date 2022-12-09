import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'
import * as inputStories from './input.stories'
import { defaultValues, sizeSchema } from '.'
import { theme } from '@common/utils'
const { Basic, WithElement } = composeStories(inputStories)
test('render with default props', async () => {
  render(<Basic />)

  const input = screen.getByRole('textbox')
  expect(input).toHaveAttribute('name', Basic.args?.name)
  expect(input).toHaveAttribute('placeholder', Basic.args?.placeholder)
  const inputWrapper = screen.getByTestId('input wrapper')
  expect(inputWrapper).toHaveClass(defaultValues.variant)
  expect(inputWrapper).toHaveStyle(`height:${sizeSchema[defaultValues.size].h}`)
  expect(inputWrapper).toHaveStyle(
    `font-size:${sizeSchema[defaultValues.size].fontSize}`
  )
  expect(inputWrapper).toHaveStyle(
    `padding-inline-start:${sizeSchema[defaultValues.size].px}`
  )
  expect(inputWrapper).toHaveStyle(
    `padding-inline-end:${sizeSchema[defaultValues.size].px}`
  )

  expect(inputWrapper).toHaveStyle(
    `border-radius:${sizeSchema[defaultValues.size].borderRadius}`
  )
  const user = userEvent.setup()
  await user.type(input, 'input value')

  /// border color on focus
  await waitFor(() => {
    expect(input).toHaveFocus()
    expect(input).toHaveValue('input value')
  })
})
test('render with custom props', async () => {
  const customProps = {
    size: 'lg' as const,
    name: 'age',
    placeholder: 'Age',
    rounded: true,
    variant: 'filled' as const,
    type: 'number',
    colorSchema: 'green' as const,
    themeMode: 'dark' as const
  }
  render(<WithElement {...customProps} />)

  const input = screen.getByRole('spinbutton')
  screen.getByTestId('left element')
  expect(input).toHaveAttribute('name', customProps.name)
  expect(input).toHaveAttribute('placeholder', customProps.placeholder)
  const inputWrapper = screen.getByTestId('input wrapper')
  expect(inputWrapper).toHaveClass(customProps.variant)
  expect(inputWrapper).toHaveStyle(`height:${sizeSchema[defaultValues.size].h}`)
  expect(inputWrapper).toHaveStyle(
    `font-size:${sizeSchema[customProps.size].fontSize}`
  )
  expect(inputWrapper).toHaveStyle(
    `padding-left:${sizeSchema[customProps.size].px}`
  )

  expect(inputWrapper).toHaveStyle(
    `padding-right:${sizeSchema[customProps.size].px}`
  )

  expect(inputWrapper).toHaveStyle(`border-radius:${theme.borderRadius.full}`)
  const user = userEvent.setup()
  await user.type(input, '30')

  /// border color on focus
  await waitFor(() => {
    expect(input).toHaveFocus()
    expect(input).toHaveValue(30)
  })
})
