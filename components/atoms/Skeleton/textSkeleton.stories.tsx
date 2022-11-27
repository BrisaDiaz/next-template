import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, paletteColorSchema, spaceSchema } from '@common/utils'
import { variantSchema } from '@components/atoms/Avatar'
import {
  TextSkeleton,
  textDefaultValues,
  defaultValues,
  textSizeSchema
} from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextSkeleton',
  as: TextSkeleton,
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
    noOfLines: {
      defaultValue: textDefaultValues.noOfLines,
      control: {
        type: 'number'
      }
    },
    spacing: {
      defaultValue: textDefaultValues.spacing,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: textDefaultValues.size,
      options: Object.keys(textSizeSchema),
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
} as ComponentMeta<typeof TextSkeleton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextSkeleton> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <TextSkeleton {...args} />
  </div>
)

export const Default = Template.bind({})
