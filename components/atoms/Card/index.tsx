import { FlexProps, Flex, Block, BlockProps } from '../Box'
import { forwardRef, Ref } from 'react'
import { combineCustomStyles, theme } from '@common/utils'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

export const variantSchema = {
  unstyled: {},
  outline: {
    border: theme.border['1'],
    borderColor: 'var(--colors-border-color)'
  },
  fill: {
    backgroundColor: 'var(--colors-accent-subtle)'
  },
  elevated: {
    boxShadow: theme.shadow['base']
  }
}
export const sizeSchema = {
  xs: {
    borderRadius: theme.borderRadius['sm'],
    padding: theme.space['1-5']
  },
  sm: {
    borderRadius: theme.borderRadius['base'],
    padding: theme.space['3']
  },
  md: {
    borderRadius: theme.borderRadius['md'],
    padding: theme.space['5']
  },
  lg: {
    borderRadius: theme.borderRadius['lg'],
    padding: theme.space['7']
  },
  xl: {
    borderRadius: theme.borderRadius['xl'],
    padding: theme.space['9']
  }
}

type Variant = keyof typeof variantSchema
type Size = keyof typeof sizeSchema
interface ExtraProps {
  variant?: Variant
  size?: Size
  rounded?: boolean
}
export type CardProps = ExtraProps & FlexProps

export const cardDefaultValues = {
  variant: 'outline' as Variant,
  size: 'md' as Size,
  flexDirection: 'column' as FlexProps['flexDirection'],
  rounded: true
}
export function CardComponent(props: CardProps, ref?: Ref<any>) {
  const {
    variant = cardDefaultValues.variant,
    size = cardDefaultValues.size,
    cs,
    flexDirection = cardDefaultValues.flexDirection,
    rounded = cardDefaultValues.rounded,
    className,
    ...other
  } = props

  return (
    <Flex
      {...other}
      ref={ref}
      className={clsx('card', {
        [`${className}`]: className
      })}
      flexDirection={flexDirection}
      cs={combineCustomStyles(
        [
          {
            selector: ` .card-content`,
            css: {
              p: sizeSchema[size].padding
            }
          },
          {
            selector: ` .rounded`,
            css: {
              borderRadius: sizeSchema[size].borderRadius
            }
          },
          {
            css: {
              overflow: 'hidden',
              borderRadius: rounded ? sizeSchema[size].borderRadius : '0',
              ...variantSchema[variant]
            }
          }
        ],
        cs
      )}
    />
  )
}
export const Card = forwardRef(CardComponent)
export const borderSchema = {
  none: {
    border: theme.border['none']
  },
  left: {
    borderLeft: theme.border['1']
  },
  right: {
    borderRight: theme.border['1']
  },
  top: {
    borderTop: theme.border['1']
  },
  bottom: {
    borderBottom: theme.border['1']
  },
  vertical: {
    borderX: theme.border['1']
  },
  horizontal: {
    borderY: theme.border['1']
  }
}
export type Bordered = keyof typeof borderSchema
export type CardContentProps = FlexProps & {
  bordered?: Bordered
  rounded?: boolean
}
export function CardContentComponent(props: CardContentProps, ref?: Ref<any>) {
  const {
    className,
    cs,
    rounded = false,
    bordered = 'none',
    flexDirection = 'column',
    ...other
  } = props

  return (
    <Flex
      {...other}
      flexDirection={flexDirection}
      ref={ref}
      className={clsx(
        'card-content',
        { rounded: rounded },
        {
          [`${className}`]: className
        }
      )}
      cs={combineCustomStyles(
        {
          css: {
            ...borderSchema[bordered],
            borderColor: bordered ? 'var(--colors-border-color)' : 'transparent'
          }
        },
        cs
      )}
    />
  )
}
export const CardContent = forwardRef(CardContentComponent)

export type CardMediaProps = ImageProps & BlockProps & { rounded?: boolean }

export function CardMediaComponent(props: CardMediaProps, ref?: Ref<any>) {
  const {
    className,
    objectFit = 'cover',
    alt = 'card media',
    rounded,
    cs,
    themeMode,
    ...other
  } = props

  return (
    <>
      <Block
        ref={ref}
        themeMode={themeMode}
        className={clsx(
          'card-media',
          { rounded: rounded },
          {
            [`${className}`]: className
          }
        )}
        cs={combineCustomStyles(
          {
            css: {
              position: 'relative',
              width: theme.size['full'],
              overflow: 'hidden'
            }
          },
          cs
        )}
      >
        <Image {...other} objectFit={objectFit} alt={alt} />
      </Block>
    </>
  )
}
export const CardMedia = forwardRef(CardMediaComponent)
