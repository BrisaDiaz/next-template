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

## `CustomStyles`

It's an object or an array of objects with the following props:
   
>`selector`: A string similar to css selectors, if not provided `.root` is used as default.   
>`css`: An object of css property names (in camelCased) and plain values / objects of  breakpoints `( "xs" | "sm" | "md" |"lg" | "xl" | "2xl" | number)` and it's respective value (required).  
   
The css prop in addition accepts the following custom property names:     
   
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
   

*Examples*   
```tsx
const customStyles = {
css:{
 color:"red"
  p:{xs:"1rem",sm:"2rem", 1000:"3rem"}
}
}
const customStylesArray =[
  {
css:{
 color:"white"
background:"blue"
}
},
{
selector:".root:hover",
css:{
background:"green"
}
}
]
```
## `useCustomStyles(customStyles)`
   
This hooks allows you to inject jsx styles from the component's props without causing classNames conflicts, in a similar way to the component's style prop but width support to pseudo-classes, pseudo-elements, combinator, breakpoints and custom css props names.

*Argument*   

> `customStyles`: [CustomStyles](#customstyles) 
   
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

```tsx
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
            css: {
              p: {sm: theme.space['4']}
            }
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
## `combineCustomStyles(styles1,styles2)`

This function allows you to resolve custom styles drilling. It is useful when you want to extend the functionality of a component and you need to add or override styles.   
  
*Argument* 
> `styles1`: [CustomStyles](#customstyles)  
> `styles2`: [CustomStyles](#customstyles) or undefined  
   
  
*return* 
> `combinedStyles`: [CustomStyles](#customstyles)
```tsx
//// example from ./components/atoms/Link

import { forwardRef, Ref, AnchorHTMLAttributes } from 'react'
import { CommonProps, combineCustomStyles } from '@common/utils'
import Text, { TextProps, ExtraProps as TextExtraProps } from '../Text'
import { ExternalLinkAlt } from '../SVG'

export interface ExtraProps {
  isExternal?: boolean
}
export type LinkProps = TextProps &
  ExtraProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TextExtraProps, 'as'> &
  CommonProps

function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  const { children, isExternal = false, cs, ...other } = props
  const linkAttributes = isExternal
    ? {
        target: '_blank',
        rel: 'noopener'
      }
    : ''
  return (
    <>
      <Text
        {...linkAttributes}
        {...other}
        ref={ref}
        as="a"
        cs={combineCustomStyles(
          [
            {
              selector: '.root:hover',
              css: {
                textDecorationLine: 'underline',
                textUnderlineOffset: '2px'
              }
            },
            {
              selector: '.root svg',
              css: {
                ml: '0.2rem'
              }
            }
          ],
          cs /// custom styles that will be pass as prop to the Link component
        )}
      >
        <>
          {children}
          {isExternal && <ExternalLinkAlt data-testid="external-link-icon" />}
        </>
      </Text>
    </>
  )
}
export default forwardRef(Link)

```