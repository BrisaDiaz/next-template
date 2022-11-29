import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import Tag, { defaultValues, tagColorSchema } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    colorSchema: {
      defaultValue: defaultValues.colorSchema,
      options: Object.keys(tagColorSchema),
      control: {
        type: 'select'
      }
    },
    variant: {
      defaultValue: defaultValues.variant,
      options: ['solid', 'subtle', 'outline'],
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: defaultValues.size,
      options: ['inherit', 'xs', 'sm', 'md', 'lg', 'xl'],
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
    transform: {
      defaultValue: 'none',
      options: [
        'none',
        'capitalize',
        'full-size-kana',
        'full-width',
        'lowercase',
        'uppercase',
        'inherit'
      ],
      control: {
        type: 'select'
      }
    },
    rounded: {
      defaultValue: defaultValues.deletable,
      control: {
        type: 'boolean'
      }
    },
    deletable: {
      defaultValue: defaultValues.deletable,
      control: {
        type: 'boolean'
      }
    },
    clickable: {
      defaultValue: defaultValues.deletable,
      description: 'add button click props',
      control: {
        type: 'boolean'
      }
    },
    avatar: {
      defaultValue: undefined,
      description: 'left-side avatar component'
    },
    icon: {
      defaultValue: undefined,
      description: 'left-side tag icon'
    },
    onClick: { action: 'clicked' },
    onDelete: { action: 'delete' },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Tag {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'label'
}
export const Deletable = Template.bind({})
Deletable.args = {
  label: 'Deletable',
  deletable: true,
  rounded: true,
  size: 'md'
}
export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'silence notification',
  size: 'md',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  )
}
