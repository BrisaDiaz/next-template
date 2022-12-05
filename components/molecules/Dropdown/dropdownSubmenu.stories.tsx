import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import {
  Dropdown,
  DropdownItem,
  DropdownSubmenu,
  submenuDefaultValues
} from '.'
import { sizeSchema } from '@components/atoms/Popover'

export default {
  title: 'Atoms/DropdownSubmenu',

  as: DropdownSubmenu,
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
      defaultValue: 'article',
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },
    spacing: {
      defaultValue: submenuDefaultValues.spacing,
      description: 'Distance between submenu and DropdownItem.',
      control: {
        type: 'text'
      }
    },
    placement: {
      defaultValue: submenuDefaultValues.placement,
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'TL',
        'TR',
        'BL',
        'BR',
        'LT',
        'LB',
        'RT',
        'RB'
      ],
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: submenuDefaultValues.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    closeDelay: {
      defaultValue: 200,
      control: {
        type: 'number'
      }
    },
    item: {
      defaultValue: undefined,
      description: 'DropdownItem component.',
      control: {
        type: 'object'
      }
    },
    initialFocusRef: {
      defaultValue: undefined,
      description:
        'Reference of the focusable element inside of DropdownContent to first focus when open.'
    },
    closeOnBlur: {
      defaultValue: submenuDefaultValues.closeOnBlur,
      control: {
        type: 'boolean'
      }
    },
    closeOnEsc: {
      defaultValue: submenuDefaultValues.closeOnEsc,
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
} as ComponentMeta<typeof DropdownSubmenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownSubmenu> = ({ ...args }) => (
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
    <Dropdown>
      <DropdownItem>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownSubmenu {...args}></DropdownSubmenu>
    </Dropdown>
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  item: <DropdownItem>Option 3</DropdownItem>,
  children: (
    <>
      <DropdownItem>Submenu option 4</DropdownItem>
      <DropdownItem>Submenu option 5</DropdownItem>
      <DropdownItem>Submenu option 6</DropdownItem>
    </>
  )
}
