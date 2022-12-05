import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import { Dropdown, DropdownItem, DropdownSubmenu, defaultValues } from '.'
import { sizeSchema } from '@components/atoms/Popover'

export default {
  title: 'Atoms/Dropdown',

  as: Dropdown,
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
    placement: {
      defaultValue: defaultValues.placement,
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
      defaultValue: defaultValues.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    label: {
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    },
    closeDelay: {
      defaultValue: 200,
      control: {
        type: 'number'
      }
    },
    buttonPops: {
      defaultValue: undefined,
      description: 'Button component prop type',
      control: {
        type: 'object'
      }
    },
    showIcon: {
      defaultValue: defaultValues.showIcon,
      control: {
        type: 'boolean'
      }
    },
    closeOnBlur: {
      defaultValue: defaultValues.closeOnBlur,
      control: {
        type: 'boolean'
      }
    },
    closeOnEsc: {
      defaultValue: defaultValues.closeOnEsc,
      control: {
        type: 'boolean'
      }
    },
    icon: {
      defaultValue: defaultValues.icon,
      control: {
        type: 'object'
      }
    },
    initialFocusRef: {
      defaultValue: undefined,
      description:
        'Reference of the focusable element inside of DropdownContent to first focus when open.'
    },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Dropdown>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = ({ children, ...args }) => (
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
    <Dropdown {...args}>{children}</Dropdown>
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Dropdown',
  children: (
    <>
      <DropdownItem>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem>Option 3</DropdownItem>
    </>
  )
}
export const WithSubmenu = Template.bind({})
WithSubmenu.args = {
  label: 'Multi Dropdown',
  children: (
    <>
      <DropdownItem data-testid="menu item">Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownSubmenu
        item={<DropdownItem data-testid="submenu btn">Option 3</DropdownItem>}
      >
        <DropdownItem data-testid="submenu item">Submenu option 4</DropdownItem>
        <DropdownItem>Submenu option 5</DropdownItem>
        <DropdownItem>Submenu option 6</DropdownItem>
      </DropdownSubmenu>
    </>
  )
}
