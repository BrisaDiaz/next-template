import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Breadcrumbs.stories'
const { Default, Collapsible } = composeStories(stories)
const breadcrumbsLinks = ['Products', 'Woman', 'Shoes', 'Nike', 'Urban']
test('render children', () => {
  render(<Default />)

  const BreadcrumbsNav = screen.getByTestId('breadcrumbs')
  expect(BreadcrumbsNav).toBeInTheDocument()
  breadcrumbsLinks.forEach((link) => {
    expect(BreadcrumbsNav).toHaveTextContent(link)
  })
})

test('collapses breadcrumb items to show the number pass through maxItems prop', () => {
  render(<Collapsible />)
  const hiddenLinks = breadcrumbsLinks.slice(2, -1)
  const BreadcrumbsNav = screen.getByTestId('breadcrumbs')
  const CollapseBtn = screen.getByRole('button')
  expect(CollapseBtn).toBeInTheDocument()

  hiddenLinks.forEach((link) => {
    expect(BreadcrumbsNav).not.toHaveTextContent(link)
  })
  fireEvent.click(CollapseBtn)

  breadcrumbsLinks.forEach((link) => {
    expect(BreadcrumbsNav).toHaveTextContent(link)
  })
})
