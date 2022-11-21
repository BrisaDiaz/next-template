import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  themeModes,
  fontSizeSchema,
  fontWeightSchema,
  colorSchema
} from '@common/utils'

import Link from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Link',

  as: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      defaultValue: 'Hello Word 🖐',
      control: {
        type: 'text'
      }
    },
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
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
    fontSize: {
      defaultValue: 'md',
      options: Object.keys(fontSizeSchema),
      control: {
        type: 'select'
      }
    },
    fontWeight: {
      defaultValue: 'normal',
      options: Object.keys(fontWeightSchema),
      control: {
        type: 'select'
      }
    },
    isExternal: {
      defaultValue: false,
      control: {
        type: 'boolean'
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
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Link {...args}>{children}</Link>
  </div>
)

export const Default = Template.bind({})
