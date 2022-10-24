import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import Button from './Button'

test('loads and displays text', async () => {
  // ARRANGE
  render(<Button>hello word</Button>)

  // ASSERT
  expect(screen.getByRole('button')).toHaveTextContent('hello word')
})
