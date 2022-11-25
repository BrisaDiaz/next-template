import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes, spaceSchema, theme } from '@common/utils'
import Box from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Box',

  as: Box,
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
      defaultValue: 'div',
      description: 'HTML Tag',
      control: {
        type: 'text'
      }
    },
    display: {
      defaultValue: 'block',
      options: ['grid', 'flex', 'grid-item', 'block'],
      control: {
        type: 'select'
      }
    },
    gap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    rowGap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    gridGap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    columnGap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    gridColumnGap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    gridRowGap: {
      defaultValue: undefined,
      options: Object.keys(spaceSchema),
      control: {
        type: 'select'
      }
    },
    flexDirection: { defaultValue: undefined, control: { type: 'text' } },
    alignItems: { defaultValue: undefined, control: { type: 'text' } },
    alignSelf: { defaultValue: undefined, control: { type: 'text' } },
    alignContent: { defaultValue: undefined, control: { type: 'text' } },
    justifyItems: { defaultValue: undefined, control: { type: 'text' } },
    justifyContent: { defaultValue: undefined, control: { type: 'text' } },
    justifySelf: { defaultValue: undefined, control: { type: 'text' } },
    templateColumns: { defaultValue: undefined, control: { type: 'text' } },
    templateRows: { defaultValue: undefined, control: { type: 'text' } },
    templateAreas: { defaultValue: undefined, control: { type: 'text' } },
    basis: { defaultValue: undefined, control: { type: 'text' } },
    wrap: { defaultValue: undefined, control: { type: 'text' } },
    shrink: { defaultValue: undefined, control: { type: 'text' } },
    grow: { defaultValue: undefined, control: { type: 'text' } },
    autoColumns: { defaultValue: undefined, control: { type: 'text' } },
    autoRows: { defaultValue: undefined, control: { type: 'text' } },
    column: { defaultValue: undefined, control: { type: 'text' } },
    row: { defaultValue: undefined, control: { type: 'text' } },
    area: { defaultValue: undefined, control: { type: 'text' } },
    columnStart: { defaultValue: undefined, control: { type: 'text' } },
    columnEnd: { defaultValue: undefined, control: { type: 'text' } },
    rowStart: { defaultValue: undefined, control: { type: 'text' } },
    rowEnd: { defaultValue: undefined, control: { type: 'text' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Box {...args}>{children}</Box>
  </div>
)

export const GridBox = Template.bind({})
GridBox.args = {
  display: 'grid',
  templateAreas: `"header header"
                   "nav main"
                   "nav footer"`,
  templateRows: '50px 1fr 30px',
  templateColumns: '150px 1fr',
  gap: '2',
  cs: {
    selector: '.box',
    css: {
      mt: theme.space['4'],
      maxW: theme.size['container-md'],
      w: theme.size.full,
      minH: theme.size['72'],
      fontWeight: theme.fontWeight.bold,
      bgColor: theme.paletteColor['gray-100'],
      p: theme.space['3'],
      fontSize: '0.8rem'
    }
  },
  children: (
    <>
      <Box
        style={{
          backgroundColor: theme.paletteColor['orange-300'],
          padding: theme.space['2'],
          gridArea: 'header'
        }}
        display="grid-item"
      >
        Header
      </Box>
      <Box
        display="grid-item"
        style={{
          backgroundColor: theme.paletteColor['pink-300'],
          padding: theme.space['2'],
          gridArea: 'nav'
        }}
      >
        Nav
      </Box>
      <Box
        display="grid-item"
        style={{
          backgroundColor: theme.paletteColor['green-300'],
          padding: theme.space['2'],
          gridArea: 'main'
        }}
      >
        Main
      </Box>
      <Box
        style={{
          backgroundColor: theme.paletteColor['blue-300'],
          padding: theme.space['2'],
          gridArea: 'footer'
        }}
        display="grid-item"
      >
        Footer
      </Box>
    </>
  )
}
