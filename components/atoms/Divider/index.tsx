import { forwardRef } from 'react'
import { Flex, FlexProps } from '../Box'
import { CustomStyle } from '@common/utils'
import { combineCustomStyles, theme, Space } from '@common/utils'

export type Orientation = 'horizontal' | 'vertical'
export type TextAlign = 'center' | 'left' | 'right'
export type Variant = 'fullWidth' | 'middle' | 'inset'
export interface ExtraProps {
  dashed?: boolean
  orientation?: Orientation
  textAlign?: TextAlign
  variant?: Variant
  spacing?: Space
  gap?: Space
}
export type DividerProps = FlexProps & ExtraProps
export const defaultValues = {
  orientation: 'horizontal' as Orientation,
  textAlign: 'center' as TextAlign,
  variant: 'fullWidth' as Variant,
  gap: '2' as Space,
  spacing: '2' as Space,
  dashed: false,
  as: 'div' as FlexProps['as']
}
function Divider(props: DividerProps, ref?: any) {
  const {
    cs,
    dashed = defaultValues.dashed,
    gap = defaultValues.gap,
    orientation = defaultValues.orientation,
    spacing = defaultValues.spacing,
    variant = defaultValues.variant,
    textAlign = defaultValues.textAlign,
    children,
    as = defaultValues.as,
    ...other
  } = props
  const isHTZL = orientation === 'horizontal'
  const isVERT = orientation === 'vertical'

  const withoutContentStyles = [
    {
      css: {
        border: theme.border['none'],
        borderTop: isHTZL ? theme.border['1'] : 'none',
        borderLeft: isVERT ? theme.border['1'] : 'none',
        borderStyle: dashed ? 'dashed' : 'solid',
        borderColor: 'var(--colors-border-color)',
        my: isHTZL ? theme.space[spacing] : 0,
        mx: isVERT ? theme.space[spacing] : 0
      }
    }
  ] as CustomStyle[]
  const withContentStyles = [
    {
      selector: '.root::before,.root::after',
      css: {
        content: `''`,
        position: 'relative',
        top: isHTZL ? '50%' : 0,
        transform: isHTZL ? 'translateY(50%)' : 'translateY(0%)',
        border: theme.border['none'],
        borderTop: isHTZL ? theme.border['1'] : 0,
        borderLeft: isVERT ? theme.border['1'] : 0,
        borderStyle: dashed ? 'dashed' : 'solid',
        borderColor: 'var(--colors-border-color)'
      }
    },
    {
      selector: '.root::before',
      css: {
        width: isHTZL ? (textAlign === 'left' ? '5%' : '100%') : 'auto',
        height: isVERT ? (textAlign === 'left' ? '5%' : '100%') : 'auto'
      }
    },
    {
      selector: '.root::after',
      css: {
        height: isVERT ? (textAlign === 'right' ? '5%' : '100%') : 'auto',
        width: isHTZL ? (textAlign === 'right' ? '5%' : '100%') : 'auto'
      }
    }
  ] as CustomStyle[]

  const dynamicStyles = children ? withContentStyles : withoutContentStyles
  return (
    <Flex
      {...other}
      alignSelf="stretch"
      alignItems="center"
      flexDirection={isVERT ? 'column' : 'row'}
      ref={ref}
      as={as}
      cs={combineCustomStyles(
        [
          {
            css: {
              width: 'auto',
              pr:
                isVERT || variant === 'fullWidth' || variant === 'inset'
                  ? 0
                  : theme.space[spacing],
              pb:
                isHTZL || variant === 'fullWidth' || variant === 'inset'
                  ? 0
                  : theme.space[spacing],
              pl:
                isVERT || variant === 'fullWidth'
                  ? 0
                  : variant === 'inset'
                  ? `calc(${theme.space[spacing]}*2)`
                  : theme.space[spacing],
              pt:
                isHTZL || variant === 'fullWidth'
                  ? 0
                  : variant === 'inset'
                  ? `calc(${theme.space[spacing]}*2)`
                  : theme.space[spacing]
            }
          },
          {
            selector: ' .divider-content',
            css: {
              px: isHTZL ? theme.space[gap] : theme.space[spacing],
              py: isVERT ? theme.space[gap] : theme.space[spacing]
            }
          },
          ...dynamicStyles
        ],
        cs
      )}
    >
      {children && <span className="divider-content">{children}</span>}
    </Flex>
  )
}

export default forwardRef(Divider)
