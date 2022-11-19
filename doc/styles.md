# Styles  
   
## Global css variables

All css variables declared inside global.css can be access from inside css modules or styles-jsx tags using the var() keyword, or through the theme object.

```tsx 
import { theme } from '@common/utils'
// or import { theme } from '@common/utils/themeSchemas'
import Text from '@components/atoms/Text'

export default function Page(){
  return (
    <>
   <div className="container">
     <Text
          cs={{
            selector: '.text',
            css: {
              maxW: theme.size['container-lg'],
              my: theme.space['8']
            }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu enim a
          eros eleifend dignissim in pretium leo. Etiam quis lorem ante.
          Maecenas a risus laoreet, porta tortor vel, ultrices ante. Duis
          suscipit sit amet diam eget mattis. Aenean lobortis lacinia mi,
          sagittis pulvinar felis ornare ut. Duis tempus ex eleifend sem
          dignissim porta. Aliquam id ornare justo. Nulla posuere ante at quam
          aliquet, in faucibus leo pretium. 
        </Text>
   </div>
    <style jsx>{`
        .container {
          min-height: var(--sizes-screen-h);
          width: var(--sizes-full);
          max-width: var(--sizes-container-lg);
          padding: var(--space-2);
        }
      `}</style>
    </>
  )
}
```

## `useCustomStyles`
   
This hooks allows you to inject jsx styles from the component's props without causing classNames conflicts, in a similar way to the component's style prop but width support to pseudo-classes, pseudo-elements, combinator, breakpoints and custom css props names.

*Arguments*   
   
The hook  an object or an array of objects with the following props:
   
>`selector`: A string similar to css selectors (required).   
>`css`: An object containing the css properties (in camelCased) and values. In addition it accepts the following custom properties names:  
<style>
    table {
        width: 100%;
    }
</style>
| Prop      | CSS Property	 |
| ---------------------- | ---------------------- |
| w               | width       |
| minW               | min-width       |
| maxW                | max-width        |
| h                | height        |
| minH               | min-height       |
| maxH                | max-height        |
| boxSize                |  width + height   |
| m                | margin        |
| mt                | margin-top        |
| mb                | margin-bottom        |
| ml                | margin-left        |
| mr                | margin-right        |
| my                | margin-top + margin-left      |
| mx                | margin-inline-start + margin-inline-end        |
| p                | padding        |
| pt                | padding-top        |
| pb                | padding-bottom        |
| pl                | padding-left        |
| pr                | padding-right        |
| py                | padding-top + padding-left      |
| px                | padding-inline-start + padding-inline-end        |
| bg               | background       |
| bgColor               | background-color       |
| bgGradient               | background-image       |
| bgClip               | background-clip       |
| borderX               | 'border-left + border-right       |
| borderY               | border-top + border-bottom       |
   
>`breakpoint`: A breakpoint key ( "xs" | "sm" | "md" |"lg" | "xl" | "2xl").

*Return*   
   
The hook returns an object with the following props:
   
> `className`: Is a unique string generated to avoid style conflicts with similar components with the same given selector.  
>`styles`: Is a jsx styles string that combines the given selectors,css props, and breakpoints.  

### useCustomStyles usage example
  
In the next example whe are going to create a Card component that uses the hook.
  
```ts
///   ./components/atoms/Card

import { ReactNode, forwardRef, LegacyRef } from 'react'
import { CommonProps, useCustomStyles } from '@common/utils'
import clsx from 'clsx'

export type CardProps = {
  children?: ReactNode
} & CommonProps

function Card(props: CardProps, ref?: LegacyRef<HTMLDivElement>) {
  const { children, className, cs, ...other } = props
  const extraStyles = useCustomStyles(cs)

  /// extraStyles.className must be place before any other class name

  const classNames = clsx(extraStyles.className, 'card', {
    [`${className}`]: className
  })

  return (
    <>
      <div className={classNames} {...other} ref={ref}>
        {children}
      </div>
      <style jsx>{`
        .card {
          padding: var(--space-2);
          border-radius: var(--radii-md);
          border-color: var(--colors-gray-100);
        }

        // extra styles are place at the bottom of  any already declare style

        ${extraStyles.styles}
      `}</style>
    </>
  )
}
export default forwardRef(Card)
```
  
And now we can pass styles through the cs prop.

```ts
import { theme } from '@common/utils'
// or import { theme } from '@common/utils/themeSchemas'
import Text from '@components/atoms/Text'
import Card from '@components/atoms/Card'
export default function Page() {
  return (
    <>
      <div className="container">
        <Card
          cs={[
            {
            selector: '.card',
            css: {
              maxW: theme.size['container-lg'],
              my: theme.space['4'],
            }
          },
            {
            selector: '.card:hover',
            css: {
             boxShadow:theme.shadow['sm']
            }
          },
           {
            selector: '.card',
            css: {
              p: theme.space['4']
            },
            breakpoint:"sm"
          }
          
          ]}
        >
          <Text as="h4" fontSize="lg">
            Card Title
          </Text>
          <>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              enim a eros eleifend dignissim in pretium leo. Etiam quis lorem
              ante. Maecenas a risus laoreet, porta tortor vel, ultrices ante.
              Duis suscipit sit amet diam eget mattis. Aenean lobortis lacinia
              mi, sagittis pulvinar felis ornare ut. Duis tempus ex eleifend sem
              dignissim porta. Aliquam id ornare justo. Nulla posuere ante at
              quam aliquet, in faucibus leo pretium.
            </Text>
          </>
        </Card>
      </div>
      <style jsx>{`
        .container {
          min-height: var(--sizes-screen-h);
          width: var(--sizes-full);
          max-width: var(--sizes-container-lg);
          padding: var(--space-2);
        }
      `}</style>
    </>
  )
}

```
