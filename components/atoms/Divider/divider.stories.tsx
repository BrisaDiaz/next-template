import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, spaceSchema, theme } from '@common/utils'
import Divider, { defaultValues } from './index'
import Box from '../Box'
import Text from '../Text'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Divider',

  as: Divider,
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
      defaultValue: defaultValues.as,
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },
    gap: {
      defaultValue: defaultValues.gap,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    spacing: {
      defaultValue: defaultValues.gap,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    dashed: {
      defaultValue: defaultValues.dashed,
      control: {
        type: 'boolean'
      }
    },
    orientation: {
      defaultValue: defaultValues.orientation,
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select'
      }
    },
    textAlign: {
      defaultValue: defaultValues.textAlign,
      options: ['start', 'end', 'center'],
      control: {
        type: 'select'
      }
    },
    variant: {
      defaultValue: defaultValues.variant,
      options: ['fullWidth', 'middle', 'inset'],
      control: {
        type: 'select'
      }
    },
    children: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    alignContent: { defaultValue: undefined, control: { type: 'text' } },
    justifyItems: { defaultValue: undefined, control: { type: 'text' } },
    justifyContent: { defaultValue: undefined, control: { type: 'text' } },
    justifySelf: { defaultValue: undefined, control: { type: 'text' } },
    basis: { defaultValue: undefined, control: { type: 'text' } },
    shrink: { defaultValue: undefined, control: { type: 'text' } },
    grow: { defaultValue: undefined, control: { type: 'text' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    wrap: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Divider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = ({
  children,
  themeMode,
  ...args
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Box
      display="flex"
      cs={{
        css: { maxW: theme.size['container-lg'], my: theme.space['2'] }
      }}
      flexDirection={args.orientation === 'vertical' ? 'row' : 'column'}
    >
      <Text themeMode={themeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu enim a
        eros eleifend dignissim in pretium leo. Etiam quis lorem ante. Maecenas
        a risus laoreet, porta tortor vel, ultrices ante. Duis suscipit sit amet
        diam eget mattis. Aenean lobortis lacinia mi, sagittis pulvinar felis
        ornare ut. Duis tempus ex eleifend sem dignissim porta.
      </Text>
      <Divider {...args} themeMode={themeMode}>
        {children || ''}
      </Divider>
      <Text themeMode={themeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu enim a
        eros eleifend dignissim in pretium leo. Etiam quis lorem ante. Maecenas
        a risus laoreet, porta tortor vel, ultrices ante. Duis suscipit sit amet
        diam eget mattis. Aenean lobortis lacinia mi, sagittis pulvinar felis
        ornare ut. Duis tempus ex eleifend sem dignissim porta.
      </Text>
    </Box>
  </div>
)

export const Horizontal = Template.bind({})

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical'
}
