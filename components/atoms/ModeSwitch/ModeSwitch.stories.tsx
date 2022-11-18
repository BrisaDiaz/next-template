import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import { btnColorSchema, variantSchema, sizeSchema } from '../Button'
import ModeSwitch from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ModeSwitch',

  component: ModeSwitch,
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
    darkColorSchema: {
      options: Object.keys(btnColorSchema),
      control: {
        type: 'select'
      }
    },
    lightColorSchema: {
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

    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof ModeSwitch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModeSwitch> = ({ ...args }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ModeSwitch {...args}></ModeSwitch>
  </div>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const DarkMode = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { themeMode: 'dark' }
