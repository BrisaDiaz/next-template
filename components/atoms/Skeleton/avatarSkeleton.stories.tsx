import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, paletteColorSchema } from '@common/utils'
import { variantSchema, sizeSchema } from '@components/atoms/Avatar'
import { Moon } from '../SVG'
import { AvatarSkeleton, avatarDefaultValues, defaultValues } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/AvatarSkeleton',
  as: AvatarSkeleton,
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
      defaultValue: avatarDefaultValues.variant,
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
    startColor: {
      defaultValue: defaultValues.startColor,
      options: Object.keys(paletteColorSchema),
      control: { type: 'select' }
    },
    endColor: {
      defaultValue: defaultValues.endColor,
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
      defaultValue: avatarDefaultValues.color,
      options: Object.keys(paletteColorSchema),
      control: { type: 'select' }
    },
    iconSize: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    size: {
      defaultValue: avatarDefaultValues.size,
      options: Object.keys(sizeSchema),
      control: { type: 'select' }
    },
    height: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    width: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    animation: {
      defaultValue: defaultValues.animation,
      options: ['pulse', 'wave', 'none'],
      control: { type: 'select' }
    },
    speed: {
      defaultValue: defaultValues.speed,
      control: {
        type: 'number'
      }
    },
    fadeDuration: {
      defaultValue: defaultValues.fadeDuration,
      control: {
        type: 'number'
      }
    },
    isLoading: {
      defaultValue: defaultValues.isLoading,
      control: {
        type: 'boolean'
      }
    },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof AvatarSkeleton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AvatarSkeleton> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <AvatarSkeleton {...args} />
  </div>
)

export const Default = Template.bind({})
export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  icon: <Moon />
}
