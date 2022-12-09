import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { themeModes } from '@common/utils'
import { btnColorSchema } from '@components/atoms/Button'
import TextArea, { sizeSchema, defaultValues } from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextArea',

  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colorSchema: {
      defaultValue: defaultValues.colorSchema,
      options: Object.keys(btnColorSchema),
      control: {
        type: 'select'
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
} as ComponentMeta<typeof TextArea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = ({ ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <TextArea {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'message',
  placeholder: 'Message*'
}
