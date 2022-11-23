import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, spaceSchema, theme } from '@common/utils'
import {
  Card,
  CardContent,
  variantSchema,
  sizeSchema,
  cardDefaultValues
} from './index'
import Text from '../Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Card/Card',
  as: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: {
      defaultValue: 'light',
      options: themeModes,
      control: {
        type: 'radio'
      }
    },
    variant: {
      defaultValue: cardDefaultValues.variant,
      options: Object.keys(variantSchema),
      control: {
        type: 'select'
      }
    },
    size: {
      defaultValue: cardDefaultValues.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    rounded: {
      defaultValue: cardDefaultValues.rounded,
      control: {
        type: 'boolean'
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
    flexDirection: {
      defaultValue: cardDefaultValues.flexDirection,
      control: { type: 'text' }
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
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Card
      cs={{
        css: {
          my: theme.space['8'],
          maxW: {
            xs: theme.size['container-sm'],
            md: theme.size['container-lg']
          }
        }
      }}
      {...args}
    >
      <CardContent flexDirection="column" gap="4">
        <Text fontWeight="semibold" as="h2" fontSize="xl">
          Duis suscipit
        </Text>
        <Text
          fontSize="md"
          cs={{
            css: {
              h: 'auto'
            }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu enim a
          eros eleifend dignissim in pretium leo. Etiam quis lorem ante.
          Maecenas a risus laoreet, porta tortor vel, ultrices ante. Duis
          suscipit sit amet diam eget mattis. Aenean lobortis lacinia mi,
          sagittis pulvinar felis ornare ut. Duis tempus ex eleifend sem
          dignissim porta. Aliquam id ornare justo. Nulla posuere ante at quam
          aliquet, in faucibus leo pretium. Vivamus eget maximus purus, non
          finibus erat. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Cras lectus tellus, scelerisque at quam vitae, vestibulum
          eleifend metus. Donec at facilisis ligula, non gravida odio. Proin nec
          orci urna. Suspendisse fermentum, ligula a venenatis vestibulum, massa
          lacus iaculis enim, eget consectetur tellus augue vitae arcu. Proin
          eros libero, pharetra vitae metus et, convallis pharetra lacus.
          Vivamus facilisis sed ipsum vel egestas. Aenean aliquet justo vel dui
          malesuada commodo. Donec volutpat leo ex, porttitor fermentum ex
          rutrum ac. Mauris eu eros ut urna pharetra vehicula sed eu elit.
          Vivamus varius tempor dignissim.
        </Text>
      </CardContent>
    </Card>
  </div>
)

export const Default = Template.bind({})
