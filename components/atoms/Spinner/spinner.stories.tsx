import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { borderSchema, paletteColorSchema } from '../../common/utils'
import Spinner, { variantSchema, sizeSchema, defaultProps } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Spinner',

  as: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      defaultValue: defaultProps.color,
      options: Object.keys(paletteColorSchema),
      control: {
        type: 'select'
      }
    },
    bgColor: {
      defaultValue: defaultProps.bgColor,
      options: Object.keys(paletteColorSchema),
      control: {
        type: 'select'
      }
    },
    variant: {
      variant: defaultProps.variant,
      options: variantSchema,
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: defaultProps.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },

    thickness: {
      defaultValue: defaultProps.thickness,
      options: Object.keys(borderSchema),
      control: {
        type: 'select'
      }
    },
    velocity: {
      defaultValue: defaultProps.velocity,
      control: {
        type: 'text'
      }
    },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Spinner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Spinner {...args}>{children}</Spinner>
  </div>
)

export const Solid = Template.bind({})

export const Donut = Template.bind({})
Donut.args = {
  variant: 'donut'
}
export const DonutMulti = Template.bind({})
DonutMulti.args = {
  variant: 'donut-multi'
}

export const Ripple = Template.bind({})
Ripple.args = {
  variant: 'ripple'
}

export const RippleMulti = Template.bind({})
RippleMulti.args = {
  variant: 'ripple-multi'
}
