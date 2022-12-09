import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Moon } from '../SVG'
import { themeModes } from '@common/utils'
import { btnColorSchema } from '@components/atoms/Button'
import Input, { sizeSchema, defaultValues } from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',

  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colorSchema: {
      defaultValue: defaultValues.colorSchema,
      options: Object.keys(btnColorSchema),
      control: {
        type: 'select'
      }
    },
    variant: {
      defaultValue: defaultValues.variant,
      options: ['outlined', 'filled', 'underlined', 'unstyled'],
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: defaultValues.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    rounded: {
      defaultValue: defaultValues.rounded,
      control: {
        type: 'boolean'
      }
    },
    isInvalid: {
      defaultValue: defaultValues.isInvalid,
      control: {
        type: 'boolean'
      }
    },
    isRequired: {
      defaultValue: defaultValues.isRequired,
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      defaultValue: defaultValues.disabled,
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
      defaultValue: defaultValues.fullWidth,
      control: {
        type: 'boolean'
      }
    },
    leftElement: { defaultValue: undefined, control: { type: 'object' } },
    rightElement: { defaultValue: undefined, control: { type: 'object' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Input {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'name',
  placeholder: 'Name*'
}
export const WithElement = Template.bind({})
WithElement.args = {
  ...Basic.args,
  leftElement: <Moon data-testid="left element" />
}
