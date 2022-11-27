import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, PaletteColor } from '@common/utils'
import Avatar, {
  AvatarGroup,
  variantSchema,
  defaultValues,
  sizeSchema,
  avatarGroupDefaultValues
} from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AvatarGroup',
  as: AvatarGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    variant: {
      defaultValue: defaultValues.variant,
      options: Object.keys(variantSchema),
      control: {
        type: 'select'
      }
    },
    children: {
      defaultValue: undefined
    },
    noItems: {
      defaultValue: Infinity,
      control: { type: 'number' }
    },
    size: {
      defaultValue: defaultValues.size,
      options: Object.keys(sizeSchema),
      control: { type: 'select' }
    },
    inset: {
      defaultValue: avatarGroupDefaultValues.inset,
      description: 'avatars negative margin',
      control: {
        type: 'text'
      }
    },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof AvatarGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AvatarGroup> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <AvatarGroup {...args}>
      {[
        { bg: 'blue-500' },
        { name: 'Clementine Bauch', bg: 'green-500' },
        { name: 'Patricia Lebsack', bg: 'red-500' },
        { name: 'Robel-Corkery', bg: 'purple-500' },
        { name: 'Kurtis Weissnat', bg: 'pink-500' }
      ].map((avatar, index) => (
        <Avatar
          key={index}
          bgColor={avatar.bg as PaletteColor}
          color="whiteAlpha-900"
          name={avatar?.name}
        />
      ))}
    </AvatarGroup>
  </div>
)

export const Default = Template.bind({})
