import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Skeleton, {
  defaultValues,
  Animation,
  animationSchema,
  textDefaultValues,
  textSizeSchema,
  TextSkeleton,
  TextSize,
  ImageSkeleton,
  imageDefaultValues,
  AvatarSkeleton,
  avatarDefaultValues
} from '.'
import {
  sizeSchema as avatarSizeSchema,
  Size as AvatarSize,
  variantSchema,
  Variant
} from '@components/atoms/Avatar'
import { PaletteColor, Space, theme } from '@common/utils'
import { Moon } from '@components/atoms/SVG'

test('renders with default styles', () => {
  render(<Skeleton data-testid="skeleton" />)

  const skeleton = screen.getByTestId('skeleton')
  expect(skeleton).toHaveStyle(`width:${defaultValues.width}`)

  expect(skeleton).toHaveStyle(`height:${defaultValues.height}`)
  expect(skeleton).toHaveStyle(
    `border-radius:${variantSchema[defaultValues.variant].borderRadius}`
  )
  /// animation is applied to ::after
  expect(skeleton).toHaveClass(`skeleton-${defaultValues.animation}`)
})
test('renders with custom styles', () => {
  const customProps = {
    animation: 'pulse' as Animation,
    width: '45rem',
    height: '20rem',
    variant: 'circular' as Variant,
    speed: 1.2
  }
  render(<Skeleton data-testid="skeleton" {...customProps} />)

  const skeleton = screen.getByTestId('skeleton')

  expect(skeleton).toHaveStyle(`width:${customProps.width}`)
  expect(skeleton).toHaveStyle(`height:${customProps.height}`)
  expect(skeleton).toHaveStyle(
    `border-radius:${variantSchema[customProps.variant].borderRadius}`
  )
  expect(skeleton).toHaveStyle(`animation-duration:${customProps.speed}s`)
  expect(skeleton).toHaveStyle(
    `animation:${animationSchema[customProps.animation]}`
  )
})
test('shows none animation when isLoading="false"', () => {
  render(
    <Skeleton data-testid="skeleton" animation="pulse" isLoading={false} />
  )

  const skeleton = screen.getByTestId('skeleton')

  expect(skeleton).toHaveStyle(`animation:${animationSchema['none']}`)
  expect(skeleton).toHaveStyle(
    `animation-duration:${defaultValues.fadeDuration}s`
  )
})
describe('TextSkeleton', () => {
  test('renders with default styles', () => {
    render(<TextSkeleton data-testid="skeleton" />)

    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveStyle(`width:${defaultValues.width}`)
    expect(skeleton).toHaveStyle(
      `height:${textSizeSchema[textDefaultValues.size].height}`
    )
    expect(skeleton).toHaveStyle(
      `border-radius:${variantSchema[defaultValues.variant].borderRadius}`
    )
  })
  test('renders with custom styles', () => {
    const customProps = {
      noOfLines: 4,
      spacing: '4' as Space,
      size: 'lg' as TextSize
    }
    render(<TextSkeleton data-testid="skeleton" {...customProps} />)

    const skeletons = screen.getAllByTestId('skeleton')
    expect(skeletons.length).toBe(customProps.noOfLines)
    skeletons.forEach((skeleton, index) => {
      expect(skeleton).toHaveStyle(
        `height:${textSizeSchema[customProps.size].height}`
      )
      expect(skeleton).toHaveStyle(
        `margin-top:${index === 0 ? 0 : theme.space[customProps.spacing]}`
      )
    })
  })
})
describe('ImageSkeleton', () => {
  test('renders with default styles', () => {
    render(<ImageSkeleton data-testid="skeleton" />)

    const skeleton = screen.getByTestId('skeleton')
    const imageIcon = screen.getByTestId('image-icon')
    expect(skeleton).toHaveStyle(`width:${imageDefaultValues.size}`)
    expect(skeleton).toHaveStyle(`height:${imageDefaultValues.size}`)
    expect(skeleton).toHaveStyle(`background-color:${defaultValues.endColor}`)
    expect(skeleton).toHaveStyle(
      `border-radius:${variantSchema[imageDefaultValues.variant].borderRadius}`
    )
    expect(imageIcon).toHaveStyle(`color:${imageDefaultValues.color}`)
  })
  test('renders with custom styles', () => {
    const customStyles = {
      variant: 'rounded' as Variant,
      endColor: 'blue-500' as PaletteColor,
      color: 'gray-100' as PaletteColor,
      icon: <Moon data-testid="custom-icon" />,
      width: '500px',
      height: '300px'
    }
    render(<ImageSkeleton data-testid="skeleton" {...customStyles} />)

    const skeleton = screen.getByTestId('skeleton')
    const imageIcon = screen.getByTestId('custom-icon')
    expect(skeleton).toHaveStyle(`width:${customStyles.width}`)
    expect(skeleton).toHaveStyle(`height:${customStyles.height}`)
    expect(skeleton).toHaveStyle(
      `border-radius:${variantSchema[customStyles.variant].borderRadius}`
    )
    expect(skeleton).toHaveStyle(`background-color:${customStyles.endColor}`)
    expect(imageIcon).toHaveStyle(`color:${customStyles.color}`)
  })
})
describe('AvatarSkeleton', () => {
  test('renders with default styles', () => {
    render(<AvatarSkeleton data-testid="skeleton" />)

    const skeleton = screen.getByTestId('skeleton')
    screen.getByTestId('user-icon')
    expect(skeleton).toHaveStyle(
      `width:${avatarSizeSchema[avatarDefaultValues.size]}`
    )
    expect(skeleton).toHaveStyle(
      `height:${avatarSizeSchema[avatarDefaultValues.size]}`
    )
  })
  test('renders with custom styles', () => {
    const customStyles = {
      variant: 'rounded' as Variant,
      endColor: 'blue-500' as PaletteColor,
      color: 'gray-100' as PaletteColor,
      icon: <Moon data-testid="custom-icon" />,
      size: 'xl' as AvatarSize
    }
    render(<ImageSkeleton data-testid="skeleton" {...customStyles} />)

    const skeleton = screen.getByTestId('skeleton')
    const userIcon = screen.getByTestId('custom-icon')
    expect(skeleton).toHaveStyle(`width:${avatarSizeSchema[customStyles.size]}`)
    expect(skeleton).toHaveStyle(
      `height:${avatarSizeSchema[customStyles.size]}`
    )
    expect(skeleton).toHaveStyle(
      `border-radius:${variantSchema[customStyles.variant].borderRadius}`
    )
    expect(skeleton).toHaveStyle(`background-color:${customStyles.endColor}`)
    expect(userIcon).toHaveStyle(`color:${customStyles.color}`)
  })
  test('renders name initial when pass a string as children', () => {
    render(
      <AvatarSkeleton data-testid="skeleton">Patricia Lebsack</AvatarSkeleton>
    )

    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveTextContent('PL')
  })
})
