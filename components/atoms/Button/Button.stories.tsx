import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sun, Moon } from '../../common/SVG'
import Button, {
  colorSchema,
  variantSchema,
  sizeSchema,
  themedModes
} from './Index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',

  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    onSubmit: { action: 'submit' },
    color: {
      defaultValue: 'gray',
      options: Object.keys(colorSchema),
      control: {
        type: 'select'
      }
    },
    variant: {
      defaultValue: 'solid',
      options: variantSchema,
      control: {
        type: 'radio'
      }
    },
    size: {
      defaultValue: 'md',
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    themeMode: {
      defaultValue: 'light',

      options: themedModes,
      control: {
        type: 'radio'
      }
    },
    rounded: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    isIconButton: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    startIcon: {
      defaultValue: null
    },
    endIcon: {
      defaultValue: null
    },
    children: {
      defaultValue: null
    }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children ?? 'Content'}</Button>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const Solid = Template.bind({})
Solid.args = { color: 'teal', variant: 'solid' }

export const Ghost = Template.bind({})
Ghost.args = { color: 'teal', variant: 'ghost' }

export const Outline = Template.bind({})
Outline.args = { color: 'teal', variant: 'outline' }

export const Disable = Template.bind({})
Disable.args = {
  color: 'blue',
  disabled: true
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  color: 'pink'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  color: 'pink'
}
export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
  color: 'pink',
  variant: 'outline'
}
export const Themed = Template.bind({})

Themed.args = {
  themeMode: 'dark'
}

Themed.parameters = {
  backgrounds: { default: 'dark' }
}

export const IconButton = Template.bind({})

IconButton.args = {
  isIconButton: true,
  children: <Sun size="1.25rem" />,
  color: 'yellow',
  variant: 'outline',
  rounded: true
}
export const StartIconButton = Template.bind({})

StartIconButton.args = {
  startIcon: <Sun size="1.25rem" />,
  children: 'Good Morning',
  color: 'yellow'
}
export const EndIconButton = Template.bind({})

EndIconButton.args = {
  endIcon: <Moon size="1.25rem" />,
  children: 'Good Night',
  color: 'blue'
}
