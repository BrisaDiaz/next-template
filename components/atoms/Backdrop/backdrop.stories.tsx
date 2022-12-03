import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, spaceSchema } from '@common/utils'
import Backdrop from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Backdrop',
  as: Backdrop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    as: {
      defaultValue: 'div',
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },
    isOpen: { defaultValue: undefined, control: { type: 'boolean' } },
    gap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    flexDirection: { defaultValue: undefined, control: { type: 'text' } },
    alignItems: { defaultValue: undefined, control: { type: 'text' } },
    alignSelf: { defaultValue: undefined, control: { type: 'text' } },
    alignContent: { defaultValue: undefined, control: { type: 'text' } },
    justifyItems: { defaultValue: undefined, control: { type: 'text' } },
    justifyContent: { defaultValue: undefined, control: { type: 'text' } },
    justifySelf: { defaultValue: undefined, control: { type: 'text' } },
    basis: { defaultValue: undefined, control: { type: 'text' } },
    wrap: { defaultValue: undefined, control: { type: 'text' } },
    shrink: { defaultValue: undefined, control: { type: 'text' } },
    grow: { defaultValue: undefined, control: { type: 'text' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Backdrop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Backdrop> = ({ children, ...args }) => (
  <Backdrop {...args}>{children}</Backdrop>
)

export const Basic = Template.bind({})
Basic.args = {
  isOpen: true,
  children: (
    <div style={{ backgroundColor: 'white', padding: '2rem' }}>
      <p>Backdrop</p>
    </div>
  )
}
