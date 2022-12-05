import '@testing-library/jest-dom'

import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import { defaultValues } from '.'
import * as dropdownStories from './dropdown.stories'
import { composeStories } from '@storybook/testing-react'
const { WithSubmenu } = composeStories(dropdownStories)

test('open and close as expected', async () => {
  render(
    <>
      <p>outer element</p>
      <WithSubmenu closeDelay={undefined} />
    </>
  )

  const mainMenu = screen.getByTestId('main menu')
  const dropdownBtn = screen.getByTestId('dropdown btn')

  expect(dropdownBtn).toHaveAttribute('aria-expanded', 'false')
  expect(dropdownBtn).toHaveTextContent(WithSubmenu.args?.label || '')
  expect(mainMenu).toHaveStyle('visibility:hidden')

  expect(mainMenu).toHaveAttribute('data-placement', defaultValues.placement)

  act(() => {
    fireEvent.click(dropdownBtn)
  })

  await waitFor(() => {
    expect(mainMenu).toHaveStyle('visibility:visible')
    expect(dropdownBtn).toHaveAttribute('aria-expanded', 'true')
  })

  const outerElement = screen.getByText('outer element')
  /// close menu on blur
  act(() => {
    fireEvent.click(outerElement)
  })
  await waitFor(() => {
    expect(mainMenu).toHaveStyle('visibility:hidden')
  })

  act(() => {
    fireEvent.click(dropdownBtn)
  })

  await waitFor(() => {
    expect(mainMenu).toHaveStyle('visibility:visible')
  })

  /// close menu on esc
  act(() => {
    fireEvent.keyDown(mainMenu, { code: 'Esc' })
  })

  await waitFor(() => {
    expect(mainMenu).toHaveStyle('visibility:hidden')
  })

  act(() => {
    fireEvent.click(dropdownBtn)
  })
  await waitFor(() => {
    expect(mainMenu).toHaveStyle('visibility:visible')
  })
  const submenuButton = screen.getByTestId('submenu btn')
  const submenu = screen.getByTestId('submenu')
  const submenuItem = screen.getByTestId('submenu item')

  await waitFor(() => {
    expect(submenu).toHaveStyle('visibility:hidden')
  })

  act(() => {
    fireEvent.click(submenuButton)
  })
  await waitFor(() => {
    expect(submenu).toHaveStyle('visibility:visible')
  })

  act(() => {
    fireEvent.click(submenuButton)
  })
  act(() => {
    fireEvent.click(submenuItem)
  })

  act(() => {
    fireEvent.keyDown(submenu, { code: 'Esc' })
  })

  ///close only the menu with focus
  await waitFor(() => {
    expect(submenu).toHaveStyle('visibility:hidden')
    expect(mainMenu).toHaveStyle('visibility:visible')
  })

  act(() => {
    fireEvent.click(submenuButton)
  })

  const mainMenuItem = screen.getByTestId('menu item')
  act(() => {
    fireEvent.click(mainMenuItem)
  })

  act(() => {
    fireEvent.keyDown(submenu, { code: 'Esc' })
  })

  /// close all submenus when main menu is close
  await waitFor(() => {
    expect(submenu).toHaveStyle('visibility:hidden')
    expect(mainMenu).toHaveStyle('visibility:visible')
  })
})
