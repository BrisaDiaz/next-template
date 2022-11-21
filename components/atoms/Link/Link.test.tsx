import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Link from '.'

test('display component correctly', () => {
  render(<Link isExternal={true}>Go to the official documentation</Link>)
  const textElement = screen.getByText('Go to the official documentation')
  expect(textElement).toBeInTheDocument()
})
test('set external link attributes and display external link icons whe prop isExternal="true"', () => {
  render(<Link isExternal={true}>Go to the official documentation</Link>)

  const textElement = screen.getByText('Go to the official documentation')
  const icon = screen.getByTestId('external-link-icon')

  expect(textElement).toHaveAttribute('rel', 'noopener')
  expect(textElement).toHaveAttribute('target', '_blank')
  expect(icon).toBeInTheDocument()
})
