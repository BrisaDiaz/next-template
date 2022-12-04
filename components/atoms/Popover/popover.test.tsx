import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { defaultValues } from '.'
import * as popoverStories from './popover.stories'
import { composeStories } from '@storybook/testing-react'
const { Complete } = composeStories(popoverStories)
jest.useFakeTimers()

test('render with default props', async () => {
  const onClose = jest.fn()
  const onOpen = jest.fn()
  const props = {
    onClose,
    onOpen,
    closeDelay: undefined
  }
  render(
    <>
      <p>outer element</p>
      <Complete {...props} />
    </>
  )

  const popoverContent = screen.getByTestId('popover-content')
  const triggerElement = screen.getByTestId('popover-trigger')
  expect(popoverContent).toHaveStyle('visibility:hidden')
  expect(popoverContent).toHaveStyle(`position:${defaultValues.strategy}`)
  expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  expect(popoverContent).toHaveAttribute('role', defaultValues.role)
  expect(popoverContent).toHaveAttribute(
    'data-placement',
    defaultValues.placement
  )
  fireEvent.click(triggerElement)

  expect(popoverContent).toHaveStyle('visibility:visible')
  expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  const popoverCloseButton = screen.getByTestId('popover-close-btn')

  await fireEvent.click(popoverCloseButton)

  await fireEvent.click(triggerElement)

  const outerElement = screen.getByText('outer element')

  await fireEvent.click(outerElement)

  await fireEvent.click(triggerElement)

  await fireEvent.keyDown(popoverContent, { code: 'Esc' })

  jest.runAllTimers()
  expect(onOpen).toHaveBeenCalled()
  expect(onClose).toHaveBeenCalledTimes(4)
})

test('render with custom props', async () => {
  const onClose = jest.fn()
  const onOpen = jest.fn()
  const props = {
    onClose,
    onOpen,
    closeDelay: undefined,
    role: 'tooltip' as const,
    placement: 'BL' as const,
    strategy: 'fixed' as const,
    closeOnEsc: false,
    closeOnBlur: false
  }
  render(
    <>
      <p>outer element</p>
      <Complete {...props} />
    </>
  )

  const popoverContent = screen.getByTestId('popover-content')
  const triggerElement = screen.getByTestId('popover-trigger')
  expect(popoverContent).toHaveStyle('visibility:hidden')
  expect(popoverContent).toHaveStyle(`position:${props.strategy}`)
  expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  expect(popoverContent).toHaveAttribute('role', props.role)
  expect(popoverContent).toHaveAttribute('data-placement', props.placement)
  fireEvent.click(triggerElement)

  expect(popoverContent).toHaveStyle('visibility:visible')
  expect(triggerElement).toHaveAttribute('aria-expanded', 'true')

  const outerElement = screen.getByText('outer element')

  await fireEvent.click(outerElement)

  await fireEvent.keyDown(popoverContent, { code: 'Esc' })

  jest.runAllTimers()
  expect(onClose).not.toHaveBeenCalled()
})
test('opens on hover', async () => {
  const onClose = jest.fn()
  const onOpen = jest.fn()
  const props = {
    onClose,
    onOpen,
    closeDelay: undefined,
    trigger: 'hover' as const
  }
  render(
    <>
      <p>outer element</p>
      <Complete {...props} />
    </>
  )

  const popoverContent = screen.getByTestId('popover-content')
  const triggerElement = screen.getByTestId('popover-trigger')
  expect(popoverContent).toHaveStyle('visibility:hidden')

  await fireEvent.mouseOver(triggerElement)

  expect(popoverContent).toHaveStyle('visibility:visible')
  expect(triggerElement).toHaveAttribute('aria-expanded', 'true')

  await fireEvent.mouseOut(triggerElement)

  jest.runAllTimers()
  expect(onOpen).toHaveBeenCalled()
  expect(onClose).toHaveBeenCalled()
})
