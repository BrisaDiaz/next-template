import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'
import * as textAreaStories from './textArea.stories'
import { defaultValues, sizeSchema } from '.'

const { Basic } = composeStories(textAreaStories)
test('render with default props', async () => {
  render(<Basic />)

  const textArea = screen.getByRole('textbox')
  expect(textArea).toHaveAttribute('name', Basic.args?.name)
  expect(textArea).toHaveAttribute('placeholder', Basic.args?.placeholder)

  expect(textArea).toHaveClass(defaultValues.variant)

  expect(textArea).toHaveStyle(
    `font-size:${sizeSchema[defaultValues.size].fontSize}`
  )
  expect(textArea).toHaveStyle(
    `padding-inline-start:${sizeSchema[defaultValues.size].px}`
  )
  expect(textArea).toHaveStyle(
    `padding-inline-end:${sizeSchema[defaultValues.size].px}`
  )

  expect(textArea).toHaveStyle(
    `border-radius:${sizeSchema[defaultValues.size].borderRadius}`
  )
  const user = userEvent.setup()

  await user.type(textArea, 'this is a message')

  /// border color on focus
  await waitFor(() => {
    expect(textArea).toHaveFocus()
    expect(textArea).toHaveValue('this is a message')
  })
})
test('render with custom props', async () => {
  const customProps = {
    size: 'lg' as const,
    variant: 'filled' as const,
    type: 'number',
    colorSchema: 'green' as const,
    themeMode: 'dark' as const
  }
  render(<Basic {...customProps} />)

  const textArea = screen.getByRole('textbox')

  expect(textArea).toHaveClass(customProps.variant)

  expect(textArea).toHaveStyle(
    `font-size:${sizeSchema[customProps.size].fontSize}`
  )
  expect(textArea).toHaveStyle(
    `padding-inline-end:${sizeSchema[customProps.size].px}`
  )

  expect(textArea).toHaveStyle(
    `padding-inline-start:${sizeSchema[customProps.size].px}`
  )

  expect(textArea).toHaveStyle(
    `border-radius:${sizeSchema[customProps.size].borderRadius}`
  )

  const user = userEvent.setup()
  await user.type(textArea, 'this is a message')

  /// border color on focus
  await waitFor(() => {
    expect(textArea).toHaveFocus()
    expect(textArea).toHaveValue('this is a message')
  })
})
