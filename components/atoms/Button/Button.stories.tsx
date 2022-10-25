import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',

  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    onSubmit: { action: 'submit' }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Content</Button>
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
