import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Avatar, {
  sizeSchema,
  defaultValues,
  AvatarGroup,
  avatarGroupDefaultValues
} from '.'
import { Moon } from '@components/atoms/SVG'
test('render user icon when no src ,no name or custom icon is passed', () => {
  render(<Avatar />)

  const avatar = screen.getByTestId('avatar')
  expect(avatar).toBeInTheDocument()
  const useIcon = screen.getByTestId('user-icon')
  expect(useIcon).toBeInTheDocument()
  expect(avatar).toHaveStyle(`width:${sizeSchema[defaultValues.size].size}`)
  expect(avatar).toHaveStyle(`height:${sizeSchema[defaultValues.size].size}`)
})
test('render custom icon when  no src and no name are passed', () => {
  render(<Avatar icon={<Moon data-testid="custom-icon" />} />)

  const customIcon = screen.getByTestId('custom-icon')
  expect(customIcon).toBeInTheDocument()
})
test('render name initials when no src is passed', () => {
  render(<Avatar name="Patricia Lebsack" />)
  const useName = screen.getByText('PL')
  expect(useName).toBeInTheDocument()
})
test('render image when src is passed and is loaded without errors', () => {
  render(
    <Avatar src="/testing/maskable_icon_x512.png" name="Patricia Lebsack" />
  )
  const useName = screen.getByTestId('avatar-img')
  expect(useName).toBeInTheDocument()
  expect(useName).toHaveAttribute('alt', 'Patricia Lebsack')
})
test('render name initials when name is provided, on image error', () => {
  render(<Avatar src="/testing/maskable_icon" name="Patricia Lebsack" />)
  const useName = screen.getByText('PL')
  expect(useName).toBeInTheDocument()
})
test('render user icon when no name is provided and an image error occurs', () => {
  render(<Avatar src="/testing/maskable_icon" />)

  const useIcon = screen.getByTestId('user-icon')
  expect(useIcon).toBeInTheDocument()
})
const users = [
  { name: 'Kurtis Lebsack' },
  {
    name: 'Clementine Bauch',
    src: '/testing/maskable_icon_x512.png'
  },
  { name: 'Patricia Lebsack' },
  { name: 'Robel-Corkery' },
  { name: 'Kurtis Weissnat' }
]
test('render all avatars as a group', () => {
  render(
    <AvatarGroup>
      {users.map((avatar, index) => (
        <Avatar key={index} name={avatar?.name} src={avatar?.src} />
      ))}
    </AvatarGroup>
  )

  const userAvatars = screen.getAllByTestId('avatar')
  expect(userAvatars.length).toBe(users.length)
  userAvatars.forEach((avatar) => {
    expect(avatar).toHaveStyle(`margin-right:${avatarGroupDefaultValues.inset}`)
  })
})
test('render the nro of avatars pass through noItems prop and display count of the hidden ones', () => {
  const noItems = 3
  const hiddenCount = users.length - noItems
  render(
    <AvatarGroup noItems={noItems}>
      {users.map((avatar, index) => (
        <Avatar key={index} name={avatar?.name} src={avatar?.src} />
      ))}
    </AvatarGroup>
  )

  const userAvatars = screen.getAllByTestId('avatar')
  expect(userAvatars.length).toBe(noItems)
  const counter = screen.getByTestId('hidden-avatars-count')
  expect(counter).toHaveTextContent(`+${hiddenCount}`)
})
