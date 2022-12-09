import { Block, BlockProps } from '../Box'
import { forwardRef } from 'react'
import { Variant } from '../Input'
import { combineCustomStyles, theme } from '@common/utils'
import { BtnColorSchema as ColorSchema } from '../Button'
import clsx from 'clsx'
export const sizeSchema = {
  xs: {
    px: theme.space['2'],
    py: theme.space['1-5'],
    fontSize: theme.fontSize['xs'],
    borderRadius: theme.borderRadius['sm']
  },
  sm: {
    px: theme.space['3'],
    py: theme.space['1-5'],
    fontSize: theme.fontSize['sm'],
    borderRadius: theme.borderRadius['sm']
  },
  md: {
    px: theme.space['4'],
    py: theme.space['2'],
    fontSize: theme.fontSize['md'],
    borderRadius: theme.borderRadius['md']
  },
  lg: {
    px: theme.space['4'],
    py: theme.space['2'],
    fontSize: theme.fontSize['lg'],
    borderRadius: theme.borderRadius['md']
  }
}
export type Size = keyof typeof sizeSchema
export type Resize = 'vertical' | 'horizontal' | 'both' | 'none'
export type TextAreaProps = {
  variant?: Variant
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  colorSchema?: ColorSchema
  resize?: Resize
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  BlockProps
export const defaultValues = {
  size: 'md' as const,
  variant: 'outlined' as const,
  disabled: false,
  isInvalid: false,
  isRequired: false,
  colorSchema: 'blue' as const,
  resize: 'vertical' as const,
  fullWidth: true
}

function TextArea(props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) {
  const {
    className,

    isRequired = defaultValues.isRequired,
    isInvalid = defaultValues.isInvalid,
    resize = defaultValues.resize,
    variant = defaultValues.variant,
    size = defaultValues.size,
    disabled = defaultValues.disabled,
    colorSchema = defaultValues.colorSchema,
    fullWidth = defaultValues.fullWidth,
    cs,
    ...other
  } = props
  const borderFocusColor = theme.paletteColor[`${colorSchema}-500`]
  const shadowColor =
    other.themeMode === 'light'
      ? theme.paletteColor[`${colorSchema}-100`]
      : theme.paletteColor[`${colorSchema}-900`]
  const shadow = variant === 'underlined' ? '1px 1px 0 0' : '0 0 0 1px'

  return (
    <Block
      {...other}
      aria-required={isRequired}
      aria-invalid={isInvalid}
      className={clsx('textarea', variant, {
        [`${className}`]: className
      })}
      as="textarea"
      ref={ref}
      cs={combineCustomStyles(
        [
          {
            selector: '.textarea',
            css: {
              width: fullWidth ? '100%' : 'auto',
              minHeight: theme.size['20'],
              cursor: disabled ? 'not-allowed' : 'auto',
              border: theme.border['1'],
              resize: resize,
              borderColor: isInvalid
                ? theme.paletteColor['red-500']
                : theme.body.borderColor,
              bgColor: theme.body.bgColor,
              transitionProperty: 'var(--transition-property-common)',
              transitionDuration: 'var(--transition-duration-normal)',
              px: sizeSchema[size].px,
              py: sizeSchema[size].py,
              fontSize: sizeSchema[size].fontSize,
              borderRadius: sizeSchema[size].borderRadius,
              outline: 'none',
              appearance: 'none'
            }
          },
          {
            selector:
              '.textarea.filled:focus,.textarea.outlined:focus,.textarea.underlined:focus',
            css: {
              borderColor: borderFocusColor,
              boxShadow: `${shadow} ${shadowColor}`
            }
          },

          {
            selector: '.textarea.filled',
            css: {
              bgColor: theme.paletteColor['gray-200']
            }
          },
          {
            selector:
              '.textarea.filled:focus,.textarea.filled[data-theme="dark"]:focus',
            css: {
              bgColor: theme.body.bgColor
            }
          },
          {
            selector: '.textarea.filled[data-theme="dark"]',
            css: {
              bgColor: theme.paletteColor['gray-700']
            }
          },

          {
            selector: '.textarea::placeholder',
            css: {
              fontSize: sizeSchema[size].fontSize,
              color: theme.body.placeholderColor
            }
          },

          {
            selector: '.textarea.underlined',
            css: {
              border: 'none',
              borderBottom: theme.border['1'],
              borderRadius: 0,
              borderColor: isInvalid
                ? theme.paletteColor['red-500']
                : theme.body.borderColor,
              px: 0
            }
          },

          {
            selector: '.textarea.unstyled',
            css: {
              border: 'none',
              borderRadius: 0,
              px: 0
            }
          }
        ],
        cs
      )}
    />
  )
}
export default forwardRef(TextArea)
