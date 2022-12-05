import { forwardRef, Ref } from 'react'
import { ArrowDropDow } from '@components/atoms/SVG'
import CSS from 'csstype'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  PopoverBodyProps,
  Placement,
  Size,
  Trigger,
  useImperativePopover
} from '@components/atoms/Popover'

import Button, { ButtonProps } from '@components/atoms/Button'
import Box, { BoxProps } from '@components/atoms/Box'
import { combineCustomStyles, theme } from '@common/utils'
import clsx from 'clsx'

export type DropdownItemProps = BoxProps & {
  interactive?: boolean
  clickable?: boolean
  closeOnClick?: boolean
  textAlign?: CSS.Property.TextAlign
}
export const itemDefaultValues = {
  textAlign: 'start',
  clickable: true,
  closeOnClick: false,
  interactive: true
}
function DropdownItemComponent(props: DropdownItemProps, ref?: Ref<unknown>) {
  const {
    cs,
    onClick,
    onKeyDown,
    closeOnClick = itemDefaultValues.closeOnClick,
    clickable = itemDefaultValues.clickable,
    interactive = itemDefaultValues.interactive,
    textAlign = itemDefaultValues.textAlign,
    className,
    ...other
  } = props
  const { closePopover } = useImperativePopover()

  const handleClick = (e: React.MouseEvent<unknown>) => {
    onClick && onClick(e)
    closeOnClick && closePopover()
  }
  const handleKeyDown = (e: React.KeyboardEvent<unknown>) => {
    onKeyDown && onKeyDown(e)
    if (e.code === 'Enter') closeOnClick && closePopover()
  }
  const dynamicProps = clickable
    ? {
        tabIndex: 0,
        role: other?.as === 'a' ? 'link' : 'button',
        onClick: handleClick,
        onKeyDown: handleKeyDown
      }
    : {}
  return (
    <Box
      {...dynamicProps}
      as="li"
      {...other}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
      className={clsx(
        'listitem',
        { [`${className}`]: className },
        { interactive: interactive },
        { clickable: clickable }
      )}
      cs={combineCustomStyles(
        [
          {
            css: {
              listStyle: 'none',
              p: theme.space['1'],
              cursor: clickable ? 'pointer' : 'auto',
              textAlign
            }
          },
          {
            selector: '.clickable:focus-visible',
            css: {
              outlineOffset: 'var(--ring-offset-width)',
              outline: ' 3px solid var(--ring-color)'
            }
          },
          {
            selector:
              '.interactive:hover,.interactive:focus,.interactive:focus-within',
            css: { bgColor: theme.paletteColor['gray-100'] }
          },
          {
            selector:
              '.interactive[data-theme="dark"]:hover,.interactive[data-theme="dark"]:focus,.interactive[data-theme="dark"]:focus-within',
            css: { bgColor: theme.paletteColor['gray-700'] }
          }
        ],
        cs
      )}
    />
  )
}
export const DropdownItem = forwardRef(DropdownItemComponent)
export type DropdownSubmenuProps = PopoverBodyProps & {
  item?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  placement?: Placement
  size?: Size
  trigger?: Trigger
  spacing?: string
  initialFocusRef?: React.MutableRefObject<null>
  closeOnBlur?: boolean
  closeOnEsc?: boolean
  closeDelay?: number
}
export const submenuDefaultValues = {
  spacing: '0.8rem',
  size: 'xs' as const,
  placement: 'RT' as const,
  closeOnBlur: true,
  closeOnEsc: true
}
function DropdownSubmenuComponent(
  props: DropdownSubmenuProps,
  ref?: Ref<unknown>
) {
  const {
    cs,
    item,
    closeDelay,
    themeMode,
    initialFocusRef,
    closeOnBlur = submenuDefaultValues.closeOnBlur,
    closeOnEsc = submenuDefaultValues.closeOnEsc,
    spacing = submenuDefaultValues.spacing,
    size = submenuDefaultValues.size,
    placement = submenuDefaultValues.placement,
    ...other
  } = props
  return (
    <Popover
      showArrow={false}
      arrowSize={spacing}
      closeDelay={closeDelay}
      placement={placement}
      size={size}
      initialFocusRef={initialFocusRef}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
    >
      <PopoverTrigger keydownListener={true}>{item}</PopoverTrigger>

      <PopoverContent themeMode={themeMode} ref={ref} data-testid="submenu">
        <PopoverBody
          as="ul"
          {...other}
          cs={combineCustomStyles({ css: { m: 0 } }, cs)}
        />
      </PopoverContent>
    </Popover>
  )
}
export const DropdownSubmenu = forwardRef(DropdownSubmenuComponent)
export type DropdownProps = {
  placement?: Placement
  size?: Size
  buttonPops?: ButtonProps
  label?: string
  icon?: React.ReactNode
  showIcon?: boolean
  initialFocusRef?: React.MutableRefObject<null>
  closeOnBlur?: boolean
  closeOnEsc?: boolean
  closeDelay?: number
} & PopoverBodyProps
export const defaultValues = {
  icon: <ArrowDropDow />,
  size: 'xs' as const,
  showIcon: true,
  placement: 'bottom' as const,
  closeOnBlur: true,
  closeOnEsc: true
}
function DropdownComponent(props: DropdownProps, ref?: Ref<unknown>) {
  const {
    cs,
    size = defaultValues.size,
    placement = defaultValues.placement,
    showIcon = defaultValues.showIcon,
    buttonPops,
    label,
    closeDelay,
    closeOnBlur = defaultValues.closeOnBlur,
    closeOnEsc = defaultValues.closeOnEsc,
    themeMode,
    icon = defaultValues.icon,
    initialFocusRef,
    ...other
  } = props
  return (
    <Popover
      showArrow={false}
      arrowSize="0.2em"
      size={size}
      placement={placement}
      initialFocusRef={initialFocusRef}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
      closeDelay={closeDelay}
    >
      <PopoverTrigger>
        <Button
          data-testid="dropdown btn"
          endIcon={showIcon ? icon : undefined}
          themeMode={themeMode}
          isIconButton={!label}
          aria-label={`expand ${label || 'dropdown'}`}
          {...buttonPops}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent themeMode={themeMode} ref={ref} data-testid="main menu">
        <PopoverBody
          {...other}
          as="ul"
          cs={combineCustomStyles({ css: { m: 0 } }, cs)}
        />
      </PopoverContent>
    </Popover>
  )
}
export const Dropdown = forwardRef(DropdownComponent)
