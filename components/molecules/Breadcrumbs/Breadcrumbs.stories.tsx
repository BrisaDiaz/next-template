import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from '@components/atoms/Link'
import { themeModes } from '@common/utils'
import Breadcrumbs from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Breadcrumbs',

  as: Breadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    separator: {
      defaultValue: '/',
      control: {
        type: 'text'
      },
      spacing: {
        defaultValue: '0.5rem',
        control: {
          type: 'text'
        }
      },
      maxItems: {
        defaultValue: Infinity,
        control: {
          type: 'number'
        }
      }
    },
    children: {
      defaultValue: undefined
    },
    collapseBtnProps: {
      defaultValue: undefined,
      description: 'Button component prop types'
    },
    themeMode: {
      defaultValue: 'light',

      options: themeModes,
      control: {
        type: 'radio'
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
} as ComponentMeta<typeof Breadcrumbs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const breadcrumbsLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Woman', href: '#woman' },
  { label: 'Shoes', href: '#shoes' },
  { label: 'Nike', href: '#nike' },
  { label: 'Urban', href: '#urban' }
]
const Template: ComponentStory<typeof Breadcrumbs> = ({ ...args }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
    <Breadcrumbs {...args}>
      {breadcrumbsLinks.map((link, index) => (
        <Link href={link.href} color="gray" key={index}>
          {link.label}
        </Link>
      ))}
    </Breadcrumbs>
  </div>
)

export const Default = Template.bind({})
export const Collapsible = Template.bind({})
Collapsible.args = {
  maxItems: 3
}
