import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, spaceSchema } from '@common/utils'
import Stack, { defaultValues } from './index'
import Text from '@components/atoms//Text'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Stack',

  as: Stack,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    orientation: {
      defaultValue: defaultValues.orientation,
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select'
      }
    },
    spacing: {
      defaultValue: defaultValues.spacing,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    divider: {
      defaultValue: undefined,
      description: 'string or Element to insert an element between each child.',
      control: {
        type: 'text'
      }
    },
    as: {
      defaultValue: 'div',
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },

    gap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },

    alignItems: { defaultValue: undefined, control: { type: 'text' } },
    alignSelf: { defaultValue: undefined, control: { type: 'text' } },
    alignContent: { defaultValue: undefined, control: { type: 'text' } },
    justifyItems: { defaultValue: undefined, control: { type: 'text' } },
    justifyContent: { defaultValue: undefined, control: { type: 'text' } },
    justifySelf: { defaultValue: undefined, control: { type: 'text' } },
    basis: { defaultValue: undefined, control: { type: 'text' } },
    shrink: { defaultValue: undefined, control: { type: 'text' } },
    grow: { defaultValue: undefined, control: { type: 'text' } },
    wrap: { defaultValue: undefined, control: { type: 'text' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Stack>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = ({ themeMode, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Stack {...args} themeMode={themeMode}>
      <Text themeMode={themeMode}>Item 1</Text>
      <Text themeMode={themeMode}>Item 2</Text>
      <Text themeMode={themeMode}>Item 3</Text>
    </Stack>
  </div>
)

export const Default = Template.bind({})
export const WithDivider = Template.bind({})
WithDivider.args = {
  divider: '-------'
}
