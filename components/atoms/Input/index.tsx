import React, { forwardRef, Children, useState } from 'react'
import { combineCustomStyles, theme } from '@common/utils'
import clsx from 'clsx'
import { Flex, FlexProps } from '../Box'
import { BtnColorSchema as ColorSchema } from '../Button'
export const sizeSchema = {
  xs: {
    h: theme.size['6'],
    px: theme.space['2'],
    fontSize: theme.fontSize['xs'],
    borderRadius: theme.borderRadius['sm']
  },
  sm: {
    h: theme.size['8'],
    px: theme.space['3'],
    fontSize: theme.fontSize['sm'],
    borderRadius: theme.borderRadius['sm']
  },
  md: {
    h: theme.size['10'],
    px: theme.space['4'],
    fontSize: theme.fontSize['md'],
    borderRadius: theme.borderRadius['md']
  },
  lg: {
    h: theme.size['12'],
    px: theme.space['4'],
    fontSize: theme.fontSize['lg'],
    borderRadius: theme.borderRadius['md']
  }
}

export type Variant = 'outlined' | 'filled' | 'underlined' | 'unstyled'
export type Size = keyof typeof sizeSchema
export const defaultValues = {
  size: 'md' as const,
  variant: 'outlined' as const,
  rounded: false,
  disabled: false,
  colorSchema: 'blue' as const,
  fullWidth: true,
  isInvalid: false,
  isRequired: false
}

export type InputProps = {
  size?: Size
  variant?: Variant
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  rounded?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  disabled?: boolean
  fullWidth?: boolean
  colorSchema?: ColorSchema
} & FlexProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>
function Input(props: InputProps, ref?: React.Ref<HTMLInputElement>) {
  const {
    themeMode,
    cs,
    className,
    isRequired = defaultValues.isRequired,
    isInvalid = defaultValues.isInvalid,
    colorSchema = defaultValues.colorSchema,
    rounded = defaultValues.rounded,
    size = defaultValues.size,
    variant = defaultValues.variant,
    leftElement,
    fullWidth = defaultValues.fullWidth,
    disabled = defaultValues.disabled,
    rightElement,
    ...other
  } = props
  const borderFocusColor = theme.paletteColor[`${colorSchema}-500`]
  const shadowColor =
    themeMode === 'light'
      ? theme.paletteColor[`${colorSchema}-100`]
      : theme.paletteColor[`${colorSchema}-900`]

  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => {
    setIsFocus(!isFocus)
  }
  const dynamicProps =
    variant === 'filled'
      ? { onFocus: () => handleFocus(), onBlur: () => handleFocus() }
      : {}

  return (
    <>
      <Flex
        data-testid="input wrapper"
        className={clsx('input', variant, {
          [`${className}`]: className
        })}
        as="span"
        themeMode={themeMode}
        cs={combineCustomStyles(
          [
            {
              selector:
                ' input, input:focus-visible, input.filled:focus-visible',
              css: {
                cursor: disabled ? 'not-allowed' : 'auto',
                width: '100%',
                bgColor: 'transparent ',
                borderColor: 'transparent',
                borderImage: 'none',
                outline: 'none',
                border: 0,
                appearance: 'none',
                boxShadow: `0 0 0px 1000px ${theme.body.bgColor} inset`,
                transitionProperty: 'var(--transition-property-common)',
                transitionDuration: 'var(--transition-duration-normal)',
                borderRadius: 'inherit'
              }
            },
            {
              selector:
                '.input.outlined:focus-within,.input.filled:focus-within,.input.filled[data-theme="dark"]:focus-within',
              css: {
                borderColor: borderFocusColor,
                boxShadow: `0 0 0 1px ${shadowColor}`
              }
            },
            {
              selector: '.input.underlined:focus-within',
              css: {
                borderColor: borderFocusColor,
                boxShadow: `1px 1px 0 0 ${shadowColor}`
              }
            },
            {
              selector: '.input.filled',
              css: {
                bgColor: isFocus
                  ? theme.body.bgColor
                  : theme.paletteColor['gray-200']
              }
            },
            {
              selector: ' input.filled',
              css: {
                boxShadow: `0 0 0px 1000px ${
                  isFocus ? theme.body.bgColor : theme.paletteColor['gray-200']
                } inset`
              }
            },
            {
              selector: '.input.filled[data-theme="dark"]',
              css: {
                bgColor: isFocus
                  ? theme.body.bgColor
                  : theme.paletteColor['gray-700']
              }
            },

            {
              selector: ' input.filled[data-theme="dark"]',
              css: {
                boxShadow: `0 0 0px 1000px ${
                  isFocus ? theme.body.bgColor : theme.paletteColor['gray-700']
                } inset`
              }
            },
            {
              selector: ' input::placeholder',
              css: {
                fontSize: sizeSchema[size].fontSize,
                color: theme.body.placeholderColor
              }
            },
            {
              selector: '.input',
              css: {
                width: fullWidth ? '100%' : 'auto',
                cursor: disabled ? 'not-allowed' : 'auto',
                border: theme.border['1'],
                borderColor: 'transparent',
                bgColor: theme.body.bgColor,
                transitionProperty: 'var(--transition-property-common)',
                transitionDuration: 'var(--transition-duration-normal)',
                h: sizeSchema[size].h,
                px: sizeSchema[size].px,
                fontSize: sizeSchema[size].fontSize,
                borderRadius: rounded
                  ? theme.borderRadius['full']
                  : sizeSchema[size].borderRadius
              }
            },

            {
              selector: '.input.outlined',
              css: {
                borderColor: isInvalid
                  ? theme.paletteColor['red-500']
                  : theme.body.borderColor
              }
            },
            {
              selector: '.input.underlined',
              css: {
                border: 'none',
                borderBottom: theme.border['1'],
                borderColor: isInvalid
                  ? theme.paletteColor['red-500']
                  : theme.body.borderColor,
                borderRadius: 0,
                px: 0
              }
            },
            {
              selector: '.input.unstyled',
              css: {
                border: 'none',
                borderRadius: 0,
                px: 0
              }
            }
          ],
          cs
        )}
      >
        {leftElement && (
          <Flex
            className="input-right-element"
            justifyContent="center"
            alignItems="center"
            cs={{
              css: {
                ml: `calc(${sizeSchema[size].px}*-0.25)`,
                pr: `calc(${sizeSchema[size].px}*0.5)`
              }
            }}
          >
            {leftElement}
          </Flex>
        )}
        <input
          aria-invalid={isInvalid}
          aria-required={isRequired}
          data-theme={themeMode}
          {...other}
          {...dynamicProps}
          ref={ref}
          className={variant}
          disabled={disabled}
        />
        {rightElement && (
          <Flex
            className="input-left-element"
            justifyContent="center"
            alignItems="center"
            cs={{
              css: {
                mr: `calc(${sizeSchema[size].px}*-0.25)`,
                pl: `calc(${sizeSchema[size].px}*0.5)`
              }
            }}
          >
            {rightElement}
          </Flex>
        )}
      </Flex>
    </>
  )
}
export default forwardRef(Input)

export const inputGroupDefaultValues = {
  orientation: 'horizontal',
  rounded: false,
  isLastChild: false,
  isFirstChild: false,
  fullWidth: false
}
export type InputGroupProps = {
  orientation?: 'vertical' | 'horizontal'
  parentOrientation?: 'vertical' | 'horizontal'
  isLastChild?: boolean
  isFirstChild?: boolean
  children?: React.ReactNode
  variant?: Variant
  rounded?: boolean
  colorSchema?: ColorSchema
  size?: Size
  fullWidth?: boolean
} & FlexProps
function InputGroupComponent(props: InputGroupProps, ref?: any) {
  const {
    orientation = inputGroupDefaultValues.orientation,
    variant,
    size = defaultValues.size,
    isLastChild = inputGroupDefaultValues.isLastChild,
    isFirstChild = inputGroupDefaultValues.isFirstChild,
    colorSchema = defaultValues.colorSchema,
    parentOrientation,
    themeMode,
    children,
    cs,
    fullWidth = inputGroupDefaultValues.fullWidth,
    rounded,
    ...other
  } = props
  const getIsFirstChild = (index: number) => 0 === index
  const getIsLastChild = (index: number) => arrayChildren.length - 1 === index

  const isHTZL = orientation === 'horizontal'
  const parentVERT = parentOrientation === 'vertical'
  const parentHTZL = parentOrientation === 'horizontal'

  const arrayChildren = Children.toArray(children)
  const borderRadius = rounded
    ? theme.borderRadius['full']
    : sizeSchema[size].borderRadius

  const borderRadiusStyles = (index: number) =>
    isHTZL
      ? {
          borderTopLeftRadius:
            (parentVERT && !isFirstChild) || !getIsFirstChild(index)
              ? 0
              : borderRadius,
          borderBottomLeftRadius:
            (parentVERT && !isLastChild) || !getIsFirstChild(index)
              ? 0
              : borderRadius,
          borderTopRightRadius:
            (parentVERT && !isFirstChild) || !getIsLastChild(index)
              ? 0
              : borderRadius,
          borderBottomRightRadius:
            (parentVERT && !isLastChild) || !getIsLastChild(index)
              ? 0
              : borderRadius
        }
      : {
          borderTopLeftRadius:
            (parentHTZL && !isFirstChild) || !getIsFirstChild(index)
              ? 0
              : borderRadius,
          borderTopRightRadius:
            (parentHTZL && !isLastChild) || !getIsFirstChild(index)
              ? 0
              : borderRadius,
          borderBottomLeftRadius:
            (parentHTZL && !isFirstChild) || !getIsLastChild(index)
              ? 0
              : borderRadius,
          borderBottomRightRadius:
            (parentHTZL && !isLastChild) || !getIsLastChild(index)
              ? 0
              : borderRadius
        }

  return (
    <Flex
      {...other}
      themeMode={themeMode}
      ref={ref}
      className="input-group"
      flexDirection={isHTZL ? 'row' : 'column'}
      cs={combineCustomStyles(
        { css: { width: fullWidth ? '100%' : 'auto' } },
        cs
      )}
    >
      {Children.map(arrayChildren, (child, index) => (
        <>
          {React.cloneElement(child as React.ReactElement, {
            themeMode,
            ...(variant ? { variant } : {}),
            size,
            rounded,
            colorSchema,
            cs: {
              css: {
                ...borderRadiusStyles(index)
              }
            }
          })}
        </>
      ))}
    </Flex>
  )
}
export const InputGroup = forwardRef(InputGroupComponent)
export type InputAddonProps = {
  variant?: Variant
  rounded?: boolean
  size?: Size
  colorSchema?: ColorSchema
} & FlexProps
function InputAddonComponent(props: InputAddonProps, ref?: React.Ref<unknown>) {
  const {
    themeMode,
    rounded,
    size = defaultValues.size,
    colorSchema = 'currentColor',
    cs,
    ...other
  } = props

  return (
    <Flex
      {...other}
      alignItems="center"
      justifyContent="center"
      ref={ref}
      themeMode={themeMode}
      cs={combineCustomStyles(
        [
          {
            selector: '.root[data-theme="dark"]',
            css: {
              bgColor: theme.paletteColor[`gray-700`],
              color: theme.color[colorSchema].light
            }
          },
          {
            css: {
              h: sizeSchema[size].h,
              px: sizeSchema[size].px,
              fontSize: sizeSchema[size].fontSize,
              borderRadius: rounded
                ? theme.borderRadius['full']
                : sizeSchema[size].borderRadius,
              bgColor: theme.paletteColor[`gray-200`],
              color: theme.color[colorSchema].main
            }
          }
        ],
        cs
      )}
    ></Flex>
  )
}
export const InputAddon = forwardRef(InputAddonComponent)
