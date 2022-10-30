import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text, {
  colorSchema,
  sizeSchema,
  weightSchema,
  componentSchema,
  alignSchema,
  themedModes
} from './Index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',

  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',

      options: themedModes,
      control: {
        type: 'radio'
      }
    },
    color: {
      defaultValue: 'gray',
      options: Object.keys(colorSchema),
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: 'md',
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    component: {
      defaultValue: 'p',
      options: componentSchema,
      control: {
        type: 'select'
      }
    },
    weight: {
      defaultValue: 'normal',
      options: Object.keys(weightSchema),
      control: {
        type: 'select'
      }
    },
    align: {
      defaultValue: 'inherit',
      options: alignSchema,
      control: {
        type: 'select'
      }
    },
    extraStyles: { defaultValue: null, description: 'JSX styles' },
    children: {
      defaultValue: 'Hello Word 🖐',
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Text {...args}>{children}</Text>
  </div>
)

export const Default = Template.bind({})
