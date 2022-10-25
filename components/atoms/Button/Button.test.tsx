import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import Button from './Index'

test('loads and displays text', async () => {
  // ARRANGE
  render(<Button>hello word</Button>)

  // ASSERT
  expect(screen.getByRole('button').innerText).equal('hello word')
})
