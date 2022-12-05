import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import { Dropdown, DropdownItem, itemDefaultValues } from '.'

export default {
  title: 'Atoms/DropdownItem',

  as: DropdownItem,
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
      defaultValue: 'li',
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },
    closeOnClick: {
      defaultValue: itemDefaultValues.closeOnClick,
      control: {
        type: 'boolean'
      }
    },

    textAlign: {
      defaultValue: itemDefaultValues.textAlign,
      control: {
        type: 'text'
      }
    },
    interactive: {
      defaultValue: itemDefaultValues.interactive,
      description:
        'if true, add background color on focus, focus-visible and focus-within.',
      control: {
        type: 'boolean'
      }
    },
    clickable: {
      defaultValue: itemDefaultValues.clickable,
      description: 'if true,add button attributes.',
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
} as ComponentMeta<typeof DropdownItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownItem> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh'
    }}
  >
    <Dropdown label="Dropdown">
      <DropdownItem {...args}>Option 1</DropdownItem>
      <DropdownItem {...args}>Option 2</DropdownItem>
      <DropdownItem {...args}>Option 3</DropdownItem>
    </Dropdown>
  </div>
)

export const Basic = Template.bind({})
Basic.args = {}
