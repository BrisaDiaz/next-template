import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { themeModes } from '@common/utils'
import Button, {
  ButtonGroup,
  btnColorSchema,
  variantSchema,
  sizeSchema,
  BtnColorSchema,
  buttonGroupDefaultValues
} from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ButtonGroup',

  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    onSubmit: { action: 'submit' },
    colorSchema: {
      defaultValue: 'gray',
      options: Object.keys(btnColorSchema),
      control: {
        type: 'select'
      }
    },
    orientation: {
      defaultValue: buttonGroupDefaultValues.orientation,
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select'
      }
    },
    variant: {
      defaultValue: buttonGroupDefaultValues.variant,
      options: variantSchema,
      control: {
        type: 'radio'
      }
    },
    size: {
      defaultValue: buttonGroupDefaultValues.size,
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
      defaultValue: buttonGroupDefaultValues.rounded,
      control: {
        type: 'boolean'
      }
    },
    children: {
      defaultValue: undefined
    },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof ButtonGroup>
const buttonsData = [
  { text: 'button 1', colorSchema: 'green' },
  { text: 'button 2', colorSchema: 'blue' },
  { text: 'button 3', colorSchema: 'red' },
  { text: 'button 4', colorSchema: 'yellow' }
]
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = ({ ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ButtonGroup {...args}>
      {buttonsData.map((button) => (
        <Button
          key={button.text}
          colorSchema={button.colorSchema as BtnColorSchema}
        >
          {button.text}
        </Button>
      ))}
    </ButtonGroup>
  </div>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
