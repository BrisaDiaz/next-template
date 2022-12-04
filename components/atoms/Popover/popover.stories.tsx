import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeModes } from '@common/utils'
import {
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverTarget,
  defaultValues,
  sizeSchema
} from './index'
import Button from '../Button'
import Text from '../Text'
import Box from '../Box'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Popover',

  as: Popover,
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
    placement: {
      defaultValue: defaultValues.placement,
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'TL',
        'TR',
        'BL',
        'BR',
        'LT',
        'LB',
        'RT',
        'RB'
      ],
      control: {
        type: 'select'
      }
    },
    trigger: {
      defaultValue: defaultValues.trigger,
      options: ['hover', 'click'],
      control: {
        type: 'select'
      }
    },
    role: {
      defaultValue: defaultValues.role,
      options: ['dialog', 'tooltip'],
      control: {
        type: 'select'
      }
    },
    strategy: {
      defaultValue: defaultValues.strategy,
      options: ['fixed', 'absolute'],
      control: {
        type: 'select'
      }
    },
    closeDelay: {
      defaultValue: defaultValues.closeDelay,
      control: {
        type: 'number'
      }
    },
    size: {
      defaultValue: defaultValues.size,
      options: Object.keys(sizeSchema),
      control: {
        type: 'select'
      }
    },
    showArrow: {
      defaultValue: defaultValues.showArrow,
      control: {
        type: 'boolean'
      }
    },
    arrowSize: {
      defaultValue: defaultValues.arrowSize,
      control: {
        type: 'text'
      }
    },
    closeOnEsc: {
      defaultValue: defaultValues.closeOnEsc,
      control: {
        type: 'boolean'
      }
    },
    closeOnBlur: {
      defaultValue: defaultValues.closeOnBlur,
      control: {
        type: 'boolean'
      }
    },
    autoFocus: {
      defaultValue: defaultValues.closeOnBlur,
      control: {
        type: 'boolean'
      }
    },
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
    initialFocusRef: {
      defaultValue: defaultValues.initialFocusRef,
      description:
        'Reference of the focusable element inside of PopoverContent to first focus when open.'
    },
    justifySelf: { defaultValue: undefined, control: { type: 'text' } },
    alignSelf: { defaultValue: undefined, control: { type: 'text' } },
    basis: { defaultValue: undefined, control: { type: 'text' } },
    shrink: { defaultValue: undefined, control: { type: 'text' } },
    grow: { defaultValue: undefined, control: { type: 'text' } },
    className: { defaultValue: undefined, control: { type: 'text' } },
    cs: {
      defaultValue: undefined,
      type: Object,
      control: { type: 'object' },
      description: 'Custom styles object format'
    }
  }
} as ComponentMeta<typeof Popover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh'
    }}
  >
    <Popover {...args}>{children}</Popover>
  </div>
)

export const Complete = Template.bind({})
Complete.args = {
  children: (
    <>
      <PopoverTrigger>
        <Button colorSchema="green" data-testid="popover-trigger">
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent data-testid="popover-content">
        <PopoverHeader>
          <Text fontSize="lg" fontWeight="semibold">
            Popover Title
          </Text>
          <PopoverCloseButton data-testid="popover-close-btn" />
        </PopoverHeader>
        <PopoverBody data-testid="popover-body">
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text fontSize="sm">
            Maecenas a risus laoreet, porta tortor vel, ultrices ante.
          </Text>
          <Text fontSize="sm">
            Duis tempus ex eleifend sem dignissim porta.
          </Text>
        </PopoverBody>
      </PopoverContent>
    </>
  )
}
export const WithTarget = Template.bind({})
WithTarget.args = {
  children: (
    <>
      <PopoverTrigger>
        <Button colorSchema="green" data-testid="popover-trigger">
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bgColor="teal-500"
        color="whiteAlpha"
        data-testid="popover-content"
        cs={{ css: { maxW: 'max-content' } }}
      >
        <PopoverBody data-testid="popover-body">
          <Text fontSize="sm">This is a popover with custom target</Text>
        </PopoverBody>
      </PopoverContent>
      <PopoverTarget data-testid="popover-target">
        <Box
          cs={{ css: { w: '200px', h: '100px', m: '2em', bgColor: 'gray' } }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Target Box
        </Box>
      </PopoverTarget>
    </>
  )
}
