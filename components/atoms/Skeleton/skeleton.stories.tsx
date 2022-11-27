import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, paletteColorSchema } from '@common/utils'
import Skeleton, { defaultValues } from './index'
import { variantSchema } from '@components/atoms/Avatar'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Skeleton',
  as: Skeleton,
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
    height: {
      defaultValue: defaultValues.height,
      control: {
        type: 'text'
      }
    },
    width: {
      defaultValue: defaultValues.width,
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
} as ComponentMeta<typeof Skeleton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skeleton> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Skeleton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  height: '40px'
}
