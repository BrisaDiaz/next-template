import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sun, Moon } from '../SVG'
import { themeModes } from '@common/utils'
import Button, { btnColorSchema, variantSchema, sizeSchema } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',

  component: Button,
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

      options: themeModes,
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
    isLoading: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    loadingText: {
      control: {
        type: 'text'
      }
    },
    spinnerProps: {
      defaultValue: undefined
    },
    startIcon: {
      defaultValue: null
    },
    endIcon: {
      defaultValue: null
    },
    children: {
      defaultValue: '',
      control: {
        type: 'text'
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
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button {...args}>{children ? children : 'Content'}</Button>
  </div>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const Solid = Template.bind({})
Solid.args = { colorSchema: 'teal', variant: 'solid' }

export const Ghost = Template.bind({})
Ghost.args = { colorSchema: 'teal', variant: 'ghost' }

export const Outline = Template.bind({})
Outline.args = { colorSchema: 'teal', variant: 'outline' }

export const Disable = Template.bind({})
Disable.args = {
  colorSchema: 'blue',
  disabled: true
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  colorSchema: 'pink'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  colorSchema: 'pink'
}
export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
  colorSchema: 'pink',
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
  colorSchema: 'yellow',
  variant: 'outline',
  rounded: true
}
export const StartIconButton = Template.bind({})

StartIconButton.args = {
  startIcon: <Sun size="1.25rem" />,
  children: 'Good Morning',
  colorSchema: 'yellow'
}
export const EndIconButton = Template.bind({})

EndIconButton.args = {
  endIcon: <Moon size="1.25rem" />,
  children: 'Good Night',
  colorSchema: 'blue'
}
export const LoadingButton = Template.bind({})

LoadingButton.args = {
  isLoading: true,
  loadingText: 'Submitting',
  colorSchema: 'green'
}
export const WithCustomStylesButton = Template.bind({})

WithCustomStylesButton.args = {
  cs: [
    {
      selector: '.btn',
      css: {
        color: 'white',
        background: 'black',
        width: '100%'
      }
    },
    {
      selector: '.btn:hover',
      css: {
        opacity: '0.8'
      }
    }
  ]
}
