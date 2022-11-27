import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, paletteColorSchema } from '@common/utils'
import Avatar, {
  AvatarBadge,
  variantSchema,
  defaultValues,
  sizeSchema
} from '.'
import { Sun } from '../SVG'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Avatar',
  as: Avatar,
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
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    bgColor: {
      defaultValue: defaultValues.bgColor,
      options: Object.keys(paletteColorSchema),
      control: { type: 'select' }
    },
    icon: {
      defaultValue: undefined,
      description: 'custom icon',
      type: Object,
      control: { type: 'object' }
    },
    color: {
      defaultValue: defaultValues.color,
      options: Object.keys(paletteColorSchema),
      control: { type: 'select' }
    },
    size: {
      defaultValue: defaultValues.size,
      options: Object.keys(sizeSchema),
      control: { type: 'select' }
    },
    src: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    name: {
      defaultValue: undefined,
      description: 'user name used to show initials and image alt',
      control: {
        type: 'text'
      }
    },
    badge: {
      defaultValue: undefined,
      description: 'badge component'
    },
    imageProps: {
      defaultValue: undefined,
      description: 'Next/Image props'
    },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Avatar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Avatar {...args} />
  </div>
)

export const Image = Template.bind({})
Image.args = {
  name: 'Patricia Lebsack',
  src: '/testing/maskable_icon_x512.png',
  imageProps: {
    unoptimized: true
  }
}

export const Fallback = Template.bind({})
Fallback.args = {
  name: 'Patricia Lebsack'
}

export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  icon: <Sun />
}
export const WithBadge = Template.bind({})
WithBadge.args = {
  badge: <AvatarBadge />
}
