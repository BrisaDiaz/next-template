import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import Tag, {
  defaultValues,
  tagColorSchema,
  Size,
  ColorSchema,
  Variant
} from '.'
import Avatar from '@components/atoms/Avatar'
import { Moon } from '@components/atoms/SVG'

test('render with default styles', () => {
  render(<Tag label="label" data-testid="tag" />)
  const tag = screen.getByTestId('tag')
  screen.getByText('label')
  const tagClassList = tag.classList
  expect(tagClassList).toContain(`tag-${defaultValues.variant}`)
  expect(tagClassList).toContain(`tag-${defaultValues.size}`)
  if (defaultValues.rounded) {
    expect(tagClassList).toContain(`rounded`)
  }
  const palette = tagColorSchema[defaultValues.colorSchema]
  if (defaultValues.variant !== 'solid') {
    expect(tag).toHaveStyle(`color:${palette.main}`)
  }
  if (defaultValues.variant !== 'outline') {
    expect(tag).toHaveStyle(
      `border-color:${
        defaultValues.colorSchema === 'gray' ? palette.subtle : palette.main
      }`
    )
  }
})
test('render with correct styles when data-theme="dark"', () => {
  render(<Tag label="label" data-testid="tag" data-theme="dark" />)
  const tag = screen.getByTestId('tag')

  const palette = tagColorSchema[defaultValues.colorSchema]
  if (defaultValues.variant !== 'solid') {
    expect(tag).toHaveStyle(`color:${palette.light}`)
  }
  if (defaultValues.variant !== 'outline') {
    expect(tag).toHaveStyle(
      `border-color:${
        defaultValues.colorSchema === 'gray' ? palette.subtle : palette.light
      }`
    )
  }
})
test('render with custom styles styles', () => {
  const customStyles = {
    rounded: false,
    size: 'lg' as Size,
    colorSchema: 'blue' as ColorSchema,
    variant: 'solid' as Variant
  }
  render(<Tag label="label" data-testid="tag" {...customStyles} />)
  const tag = screen.getByTestId('tag')

  const tagClassList = tag.classList
  expect(tagClassList).toContain(`tag-${customStyles.variant}`)
  expect(tagClassList).toContain(`tag-${customStyles.size}`)

  expect(tagClassList).not.toContain(`rounded`)

  const palette = tagColorSchema[customStyles.colorSchema]

  expect(tag).toHaveStyle(
    `color: var(${
      palette.contrast === 'dark'
        ? ' --colors-whiteAlpha-900'
        : '--colors-gray-800'
    })`
  )
})
test('add clickable props when clickable=true and triggers on click', () => {
  const onClick = jest.fn()
  render(
    <Tag label="label" data-testid="tag" clickable={true} onClick={onClick} />
  )

  const tag = screen.getByTestId('tag')
  expect(tag).toHaveAttribute('role', 'button')
  expect(tag).toHaveAttribute('tabIndex', '0')
  fireEvent.click(tag)
  expect(onClick).toHaveBeenCalled()
})
test('add clickable props when clickable=true and triggers on enter', () => {
  const onClick = jest.fn()
  render(
    <Tag label="label" data-testid="tag" clickable={true} onClick={onClick} />
  )

  const tag = screen.getByTestId('tag')
  expect(tag).toHaveAttribute('role', 'button')
  expect(tag).toHaveAttribute('tabIndex', '0')

  fireEvent.keyDown(tag, { code: 'Enter' })
  expect(onClick).toHaveBeenCalled()
})
test('render delete tag button when deletable=true ', () => {
  const onDelete = jest.fn()
  render(
    <Tag label="label" data-testid="tag" deletable={true} onDelete={onDelete} />
  )

  const deleteBtn = screen.getByRole('button')
  expect(deleteBtn).toHaveAttribute('aria-label', 'delete tag')
  fireEvent.click(deleteBtn)
  expect(onDelete).toHaveBeenCalled()
})
test('render custom delete icon ', () => {
  const onDelete = jest.fn()
  render(
    <Tag
      label="label"
      data-testid="tag"
      deletable={true}
      onDelete={onDelete}
      deleteIcon={<Moon data-testid="custom icon" />}
    />
  )
  screen.getByTestId('custom icon')
  const deleteBtn = screen.getByRole('button')
  expect(deleteBtn).toHaveAttribute('aria-label', 'delete tag')

  fireEvent.click(deleteBtn)
  expect(onDelete).toHaveBeenCalled()
})
test('render tag icon ', () => {
  render(
    <Tag
      label="tag with custom icon"
      data-testid="tag"
      icon={<Moon data-testid="custom icon" />}
    />
  )

  screen.getByTestId('custom icon')
  screen.getByText('tag with custom icon')
})
test('render avatar icon ', () => {
  render(
    <Tag
      label="tag with custom icon"
      data-testid="tag"
      avatar={<Avatar name="user name" data-testid="avatar" />}
    />
  )

  const avatar = screen.getByTestId('avatar')
  expect(avatar).toHaveTextContent('UN')
  screen.getByText('tag with custom icon')
})
