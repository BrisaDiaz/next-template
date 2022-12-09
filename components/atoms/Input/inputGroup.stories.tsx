import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import { btnColorSchema } from '@components/atoms/Button'
import Input, {
  InputGroup,
  InputAddon,
  sizeSchema,
  inputGroupDefaultValues
} from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/InputGroup',

  component: InputGroup,
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
      defaultValue: 'outlined',
      options: ['outlined', 'filled', 'underlined', 'unstyled'],
      control: {
        type: 'select'
      }
    },
    orientation: {
      defaultValue: inputGroupDefaultValues.orientation,
      options: ['horizontal', 'vertical'],
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
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    fullWidth: {
      defaultValue: inputGroupDefaultValues.fullWidth,
      control: {
        type: 'boolean'
      }
    },
    rounded: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    parentOrientation: {
      defaultValue: undefined,
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select'
      }
    },
    isFirstChild: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    isLastChild: {
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
} as ComponentMeta<typeof InputGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const WithAddonTemplate: ComponentStory<typeof InputGroup> = ({ ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InputGroup {...args}>
      <InputAddon>https:\\</InputAddon>
      <Input name="website" placeholder="Website" />
      <InputAddon>.com</InputAddon>
    </InputGroup>
  </div>
)

export const WithAddon = WithAddonTemplate.bind({})
const InputGroupsTemplate: ComponentStory<typeof InputGroup> = ({
  ...args
}) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InputGroup {...args}>
      <Input name="name" placeholder="Name" />
      <Input name="lastName" placeholder="Last Name" />
    </InputGroup>
  </div>
)
export const InputGroups = InputGroupsTemplate.bind({})

const NestedInputGroupsTemplate: ComponentStory<typeof InputGroup> = ({
  orientation,
  ...args
}) => (
  <InputGroup {...args} orientation={orientation}>
    <Input name="cardNumber" placeholder="Card Number" />
    <InputGroup
      parentOrientation={orientation}
      orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}
    >
      <Input name="expiryDate" placeholder="Expiry Date" />
      <Input name="cvc" placeholder="CVC" />
    </InputGroup>
  </InputGroup>
)
export const NestedInputGroups = NestedInputGroupsTemplate.bind({})
NestedInputGroups.args = {
  orientation: 'vertical'
}
