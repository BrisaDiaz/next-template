import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { toKebabCase } from '@common/utils'
import {
  Card,
  CardContent,
  sizeSchema,
  variantSchema,
  cardDefaultValues,
  borderSchema
} from '.'

function testVariant(
  component: HTMLElement,
  variant: keyof typeof variantSchema
) {
  const variantStyles = variantSchema[variant]

  for (const prop in variantStyles) {
    expect(component).toHaveStyle(
      `${toKebabCase(prop)}:${
        variantStyles[prop as keyof typeof variantStyles]
      }`
    )
  }
}
describe.only('Card component', () => {
  test('render with correct default styles', () => {
    render(
      <Card data-testid="card">
        <CardContent data-testid="card-content">
          <p>some text content</p>
        </CardContent>
      </Card>
    )
    const card = screen.getByTestId('card')
    const cardContent = screen.getByTestId('card-content')
    expect(card).toBeInTheDocument()
    expect(cardContent).toBeInTheDocument()
    expect(cardContent).toHaveTextContent(/some text content/)
    expect(card).toHaveStyle(
      `border-radius:${sizeSchema[cardDefaultValues.size].borderRadius}`
    )
    expect(cardContent).not.toHaveStyle(
      `border-radius:${sizeSchema[cardDefaultValues.size].borderRadius}`
    )
    expect(cardContent).toHaveStyle(
      `padding:${sizeSchema[cardDefaultValues.size].padding}`
    )

    testVariant(card, cardDefaultValues.variant)
  })
  test('render with styles according to props', () => {
    render(
      <Card data-testid="card" rounded={false} variant="fill" size="lg">
        <CardContent
          data-testid="card-content"
          bordered="horizontal"
          rounded={true}
        >
          <p>some text content</p>
        </CardContent>
      </Card>
    )
    const card = screen.getByTestId('card')
    const cardContent = screen.getByTestId('card-content')
    expect(card).toBeInTheDocument()
    expect(cardContent).toBeInTheDocument()
    expect(cardContent).toHaveTextContent(/some text content/)
    expect(card).not.toHaveStyle(`border-radius:${sizeSchema.lg.borderRadius}`)
    expect(cardContent).toHaveStyle(
      `border-radius:${sizeSchema.lg.borderRadius}`
    )
    expect(cardContent).toHaveStyle(`padding:${sizeSchema.lg.padding}`)
    expect(cardContent).toHaveStyle(
      `border-left:${borderSchema.vertical.borderX}`
    )
    expect(cardContent).toHaveStyle(
      `border-right:${borderSchema.vertical.borderX}`
    )
    testVariant(card, 'fill')
  })
})
