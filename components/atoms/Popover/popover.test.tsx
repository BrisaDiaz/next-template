import '@testing-library/jest-dom'

import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import { defaultValues } from '.'
import * as popoverStories from './popover.stories'
import { composeStories } from '@storybook/testing-react'
const { Complete } = composeStories(popoverStories)

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
  act(() => {
    fireEvent.click(triggerElement)
  })

  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })

  const popoverCloseButton = screen.getByTestId('popover-close-btn')

  act(() => {
    fireEvent.click(popoverCloseButton)
  })

  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:hidden')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  })

  act(() => {
    fireEvent.click(triggerElement)
  })

  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })

  const outerElement = screen.getByText('outer element')

  act(() => {
    fireEvent.click(outerElement)
  })

  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:hidden')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  })

  act(() => {
    fireEvent.click(triggerElement)
  })

  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })

  act(() => {
    fireEvent.keyDown(popoverContent, { code: 'Esc' })
  })
  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:hidden')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  })

  expect(onOpen).toHaveBeenCalled()
  expect(onClose).toHaveBeenCalled()
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

  act(() => {
    fireEvent.click(triggerElement)
  })
  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })

  const outerElement = screen.getByText('outer element')

  act(() => {
    fireEvent.click(outerElement)
  })
  act(() => {
    fireEvent.keyDown(popoverContent, { code: 'Esc' })
  })
  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })
  expect(onOpen).toHaveBeenCalled()
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

  act(() => {
    fireEvent.mouseOver(triggerElement)
  })
  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:visible')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'true')
  })

  act(() => {
    fireEvent.mouseLeave(triggerElement)
  })
  await waitFor(() => {
    expect(popoverContent).toHaveStyle('visibility:hidden')
    expect(triggerElement).toHaveAttribute('aria-expanded', 'false')
  })

  expect(onOpen).toHaveBeenCalled()
  expect(onClose).toHaveBeenCalled()
})
