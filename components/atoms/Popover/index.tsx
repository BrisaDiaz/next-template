import React, {
  forwardRef,
  Ref,
  useState,
  useId,
  createContext,
  useContext
} from 'react'

import { Block, BlockProps, FlexProps, Flex } from '@components/atoms/Box'
import {
  combineCustomStyles,
  CustomStyle,
  theme,
  ThemeMode,
  BorderWidth,
  assignRef,
  PaletteColor,
  Color
} from '@common/utils'
import useModalFocus from './useModalFocus'
import Button, { ButtonProps } from '@components/atoms/Button'
import { Close } from '@components/atoms/SVG'
import { useBoundingClient, useChildrenCoordinates } from '@hooks'
export const sizeSchema = {
  xs: {
    py: theme.space['1-5'],
    px: theme.space['1-5']
  },
  sm: {
    py: theme.space['2'],
    px: theme.space['3']
  },
  md: {
    py: theme.space['4'],
    px: theme.space['5']
  },
  lg: {
    py: theme.space['6'],
    px: theme.space['7']
  },
  xl: {
    py: theme.space['8'],
    px: theme.space['9']
  }
}
export const arrowSizeSchema = {
  xs: '0.5em',
  sm: '0.6em',
  md: '0.7em',
  lg: '0.8em',
  xl: '0.9em'
}
export type Size = keyof typeof sizeSchema
export type Trigger = 'click' | 'hover'
export type Strategy = 'fixed' | 'absolute'
export type Role = 'dialog' | 'tooltip'
export type Placement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'TL'
  | 'TR'
  | 'BL'
  | 'BR'
  | 'LT'
  | 'LB'
  | 'RT'
  | 'RB'

export type PopoverProps = {
  autoFocus?: boolean
  isOpen?: boolean
  closeOnBlur?: boolean
  closeOnEsc?: boolean
  returnFocusOnClose?: boolean
  strategy?: Strategy
  trigger?: Trigger
  size?: Size
  closeDelay?: number
  showArrow?: boolean
  initialFocusRef?: React.MutableRefObject<null>
  onClose?: () => void
  onOpen?: () => void
  role?: Role
  placement?: Placement
  arrowSize?: string
} & BlockProps
export const defaultValues = {
  isOpen: false,
  autoFocus: true,
  closeOnBlur: true,
  closeOnEsc: true,
  showArrow: true,
  returnFocusOnClose: true,
  closeDelay: 200,
  initialFocusRef: undefined,
  size: 'sm' as Size,
  trigger: 'click' as Trigger,
  arrowSize: '0.6em',
  strategy: 'absolute' as Strategy,
  role: 'dialog' as Role,
  popoverId: '',
  arrowTransform: 'translate(0,0)',
  popoverTransform: 'translate(0,0)',
  arrowLeft: '0px',
  arrowTop: '0px',
  placement: 'bottom',
  themeMode: 'light' as ThemeMode,
  triggerNode: null,
  triggerRef: (node: HTMLDivElement | null) => {
    node
    return
  },
  targetRef: (node: HTMLDivElement | null) => {
    node
    return
  },
  popoverRef: (node: HTMLDivElement | null) => {
    node
    return
  },
  onClose: () => {
    return
  },
  onOpen: () => {
    return
  },
  closePopover: () => {
    return
  },
  openPopover: () => {
    return
  }
}
export const ContextProvider = createContext(defaultValues)
export const usePopoverContext = () => {
  const value = useContext(ContextProvider)
  return value
}
export const useImperativePopover = () => {
  const { closePopover, openPopover } = useContext(ContextProvider)
  return { closePopover, openPopover }
}

export function Popover(props: PopoverProps) {
  const {
    isOpen = defaultValues.isOpen,
    role = defaultValues.role,
    strategy = defaultValues.strategy,
    returnFocusOnClose = defaultValues.returnFocusOnClose,
    closeDelay = defaultValues.closeDelay,
    closeOnEsc = defaultValues.closeOnEsc,
    closeOnBlur = defaultValues.closeOnBlur,
    autoFocus = defaultValues.autoFocus,
    trigger = defaultValues.trigger,
    showArrow = defaultValues.showArrow,
    cs,
    size = defaultValues.size,
    initialFocusRef,
    arrowSize,
    placement = defaultValues.placement,
    themeMode = defaultValues.themeMode,
    onClose = defaultValues.onClose,
    onOpen = defaultValues.onOpen,
    ...other
  } = props

  const [open, setOpen] = useState(isOpen || false)

  const popoverId = useId()

  const closePopover = () => {
    if (closeDelay) {
      setTimeout(() => {
        setOpen(false)
        onClose()
      }, closeDelay)
    } else {
      setOpen(false)
      onClose()
    }
  }
  const openPopover = () => {
    setOpen(true)
    onOpen()
  }
  const popoverRole: Role = role
    ? role
    : trigger === 'click'
    ? 'dialog'
    : 'tooltip'

  const [triggerRef, containerRef, triggerCoordinates, triggerNode] =
    useChildrenCoordinates<HTMLElement, HTMLElement>()

  const [targetRef, containerRef2, targetDimensions, targetNode] =
    useChildrenCoordinates<HTMLElement, HTMLElement>()

  const [popoverRef, popoverDimensions] = useBoundingClient()

  const referenceCoordinates = targetNode
    ? targetDimensions
    : triggerCoordinates
  const arrowBoXSize = arrowSize || arrowSizeSchema[size]

  const centerY = `
   ${
     referenceCoordinates.top +
     (referenceCoordinates.height / 2 - popoverDimensions.height / 2)
   }px`
  const topY = `
   ${referenceCoordinates.top}px`
  const bottomY = `
   ${
     referenceCoordinates.top +
     (referenceCoordinates.height - popoverDimensions.height)
   }px`
  const rightPlacementX = `calc(${
    referenceCoordinates.left + referenceCoordinates.width
  }px + ${arrowBoXSize})`

  const leftPlacementX = `calc(${
    referenceCoordinates.left - popoverDimensions.width
  }px - ${arrowBoXSize})`

  const topPlacementY = `calc(${
    referenceCoordinates.top - popoverDimensions.height
  }px - ${arrowBoXSize})`
  const centerX = `
   ${
     referenceCoordinates.left +
     (referenceCoordinates.width / 2 - popoverDimensions.width / 2)
   }px`
  const leftX = `${referenceCoordinates.left}px`
  const rightX = `${
    referenceCoordinates.left +
    referenceCoordinates.width -
    popoverDimensions.width
  }px`
  const bottomPlacementY = `calc(${
    referenceCoordinates.top + referenceCoordinates.height
  }px + ${arrowBoXSize})`

  const popoverTransform =
    placement === 'right'
      ? `translate(${rightPlacementX},${centerY})`
      : placement === 'RT'
      ? `translate(${rightPlacementX},${topY})`
      : placement === 'RB'
      ? `translate(${rightPlacementX},${bottomY})`
      : placement === 'left'
      ? `translate(${leftPlacementX},${centerY})`
      : placement === 'LT'
      ? `translate(${leftPlacementX},${topY})`
      : placement === 'LB'
      ? `translate(${leftPlacementX},${bottomY})`
      : placement === 'top'
      ? `translate(${centerX},${topPlacementY})`
      : placement === 'TR'
      ? `translate(${rightX},${topPlacementY})`
      : placement === 'TL'
      ? `translate(${leftX},${topPlacementY})`
      : placement === 'bottom'
      ? `translate(${centerX},${bottomPlacementY})`
      : placement === 'BR'
      ? `translate(${rightX},${bottomPlacementY})`
      : `translate(${leftX},${bottomPlacementY})`

  const border =
    placement === 'TL' || placement === 'TR' || placement === 'top'
      ? 'top'
      : placement === 'BL' || placement === 'BR' || placement === 'bottom'
      ? 'bottom'
      : placement === 'LT' || placement === 'LB' || placement === 'left'
      ? 'left'
      : 'right'
  const isVertical = border === 'top' || border === 'bottom'

  const justify =
    placement === 'TL' || placement === 'BL'
      ? 'start'
      : placement === 'TR' || placement === 'BR'
      ? 'end'
      : 'center'
  const align =
    placement === 'LT' || placement === 'RT'
      ? 'start'
      : placement === 'LB' || placement === 'RB'
      ? 'end'
      : 'center'
  const isPopoverLarger = popoverDimensions.width > referenceCoordinates.width
  const isPopoverHigher = popoverDimensions.height > referenceCoordinates.height

  const alignStartArrow = isPopoverHigher
    ? `calc(-${popoverDimensions.height / 2}px - ${arrowBoXSize}/2 + ${
        referenceCoordinates.height / 2
      }px )`
    : 0
  const alignEndArrow = isPopoverHigher
    ? `calc(${popoverDimensions.height / 2}px - ${arrowBoXSize} /2 - ${
        referenceCoordinates.height / 2
      }px)`
    : 0

  const arrowTop =
    align === 'start' ? alignStartArrow : align === 'end' ? alignEndArrow : 0

  const justifyEnd = `calc(${
    isPopoverLarger
      ? popoverDimensions.width - referenceCoordinates.width / 2
      : popoverDimensions.width / 2
  }px - ${arrowBoXSize}/2)`

  const justifyCenter = `calc(50%  - ${arrowBoXSize}/2)`

  const justifyStart = `calc(${
    isPopoverLarger
      ? referenceCoordinates.width / 2
      : popoverDimensions.width / 2
  }px - ${arrowBoXSize}/2)`

  const arrowLeft = isVertical
    ? justify === 'center'
      ? justifyCenter
      : justify === 'end'
      ? justifyEnd
      : justifyStart
    : `calc(-${arrowBoXSize}* 0.59)`

  const arrowTransform =
    border === 'bottom'
      ? `translate(0,${`calc(-${arrowBoXSize}* 0.59)`}) rotate(45deg)`
      : border === 'top'
      ? `translate(0,${`calc(${arrowBoXSize}* 0.59)`}) rotate(45deg)`
      : border === 'right'
      ? `translate(0,calc(-${arrowBoXSize}* 0.59 + ${
          popoverDimensions.height / 2
        }px )) rotate(45deg)`
      : `translate(${
          popoverDimensions.width - 1
        }px,calc(-${arrowBoXSize} *0.59  + ${
          popoverDimensions.height / 2
        }px )) rotate(45deg)`

  const value = {
    isOpen: open,
    role: popoverRole,
    popoverId,
    strategy,
    returnFocusOnClose,
    closeDelay,
    closeOnEsc,
    closeOnBlur,
    autoFocus,
    trigger,
    initialFocusRef,
    triggerRef,
    targetRef,
    popoverRef,
    arrowTop,
    arrowLeft,
    arrowSize: arrowBoXSize,
    popoverTransform,
    placement,
    themeMode,
    size,
    arrowTransform,
    showArrow,
    triggerNode,
    onClose,
    onOpen,
    openPopover,
    closePopover
  }
  type Value = typeof defaultValues & { triggerNode?: HTMLElement | null }
  return (
    <ContextProvider.Provider value={value as Value}>
      <Block
        {...other}
        ref={(node) => {
          containerRef(node as HTMLElement)
          containerRef2(node as HTMLElement)
        }}
        cs={combineCustomStyles({ css: { position: 'relative' } }, cs)}
      />
    </ContextProvider.Provider>
  )
}
export type PopoverContentProps = {
  border?: BorderWidth
  bgColor?: PaletteColor
  borderColor?: PaletteColor
  color?: Color
} & FlexProps
function PopoverContentComponent(
  props: PopoverContentProps,
  ref?: Ref<unknown>
) {
  const {
    popoverId,
    isOpen,
    closePopover,
    returnFocusOnClose,
    initialFocusRef,
    autoFocus,
    closeOnBlur,
    closeOnEsc,
    strategy,
    themeMode,
    showArrow,
    arrowTransform,
    arrowLeft,

    popoverTransform,
    arrowTop,
    role,
    arrowSize,
    placement,

    popoverRef,
    triggerNode
  } = usePopoverContext()
  const { cs, bgColor, borderColor, border = '1', color, ...other } = props
  const dialogRef: React.Ref<unknown> = React.useRef(null)

  useModalFocus({
    isOpen: isOpen,
    onEscape: closeOnEsc ? closePopover : undefined,
    onBlur: closeOnBlur ? closePopover : undefined,
    autoFocus: autoFocus,
    ref: dialogRef,
    returnFocusOnClose,
    initialFocusRef,
    triggerNode
  })

  const arrowStyles = showArrow
    ? [
        {
          selector:
            '.root[data-placement="right"]:before,.root[data-placement="RT"]:before,.root[data-placement="RB"]:before',
          css: {
            top: arrowTop,
            borderLeft: theme.border[border],
            borderBottom: theme.border[border],
            borderColor: 'inherit'
          }
        },
        {
          selector:
            '.root[data-placement="left"]:before,.root[data-placement="LT"]:before,.root[data-placement="LB"]:before',
          css: {
            top: arrowTop,
            borderRight: theme.border[border],
            borderTop: theme.border[border],
            borderColor: 'inherit'
          }
        },
        {
          selector:
            '.root[data-placement="bottom"]:before,.root[data-placement="BL"]:before,.root[data-placement="BR"]:before',
          css: {
            borderLeft: theme.border[border],
            borderTop: theme.border[border],
            borderColor: 'inherit'
          }
        },
        {
          selector:
            '.root[data-placement="top"]:before,.root[data-placement="TL"]:before,.root[data-placement="TR"]:before',
          css: {
            bottom: 0,
            borderBottom: theme.border[border],
            borderRight: theme.border[border],
            borderColor: 'inherit'
          }
        },
        {
          selector: '.root:before',
          css: {
            content: '""',
            position: 'absolute',
            boxSize: arrowSize,
            bgColor: 'inherit',
            left: arrowLeft,
            transform: arrowTransform
          }
        }
      ]
    : []

  return (
    <Flex
      as="article"
      flexDirection="column"
      data-placement={placement}
      {...other}
      ref={(node: HTMLDivElement | null) => {
        popoverRef(node)
        assignRef(node, dialogRef)
        assignRef(node, ref as React.MutableRefObject<unknown>)
      }}
      themeMode={themeMode}
      id={`popover-content${popoverId}`}
      aria-labelledby={`popover_label${popoverId}`}
      aria-describedby={`popover_desc${popoverId}`}
      role={role}
      aria-modal="true"
      cs={combineCustomStyles(
        [
          {
            css: {
              position: strategy || defaultValues.strategy,
              w: '100%',
              minW: 'max-content',
              top: 0,
              left: 0,
              transform: popoverTransform,
              border: theme.border[border],
              borderColor: borderColor
                ? theme.paletteColor[borderColor]
                : theme.body.borderColor,
              visibility: isOpen ? 'visible' : 'hidden',
              zIndex: theme.zIndex.modal,
              bgColor: bgColor
                ? theme.paletteColor[bgColor]
                : theme.body.bgColor,
              color: color
                ? other.themeMode === 'light'
                  ? theme.color[color].main
                  : theme.color[color].light
                : theme.body.color,
              borderRadius: theme.borderRadius['base']
            }
          },

          ...(arrowStyles as CustomStyle[])
        ],
        cs
      )}
    />
  )
}
export type PopoverTriggerProps = {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  keydownListener?: boolean
}
export function PopoverTrigger(props: PopoverTriggerProps) {
  const { children, keydownListener = false } = props
  const {
    popoverId,
    isOpen,
    openPopover,
    closePopover,
    trigger,
    triggerRef,
    closeOnBlur
  } = usePopoverContext()
  const handleTrigger = () => {
    isOpen ? closePopover() : openPopover()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      handleTrigger()
    }
  }
  const dynamicProps =
    trigger === 'click'
      ? {
          onClick: () => handleTrigger(),
          ...(keydownListener
            ? {
                onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) =>
                  handleKeyDown(e)
              }
            : {})
        }
      : {
          onMouseEnter: () => handleTrigger(),
          onMouseLeave: () => closeOnBlur && handleTrigger(),
          onTouchStart: () => handleTrigger(),
          onTouchEnd: () => closeOnBlur && handleTrigger()
        }

  return children ? (
    React.cloneElement(children, {
      ref: triggerRef,
      'aria-haspopup': 'dialog',
      'aria-controls': `popover-content${popoverId || ''}`,
      'aria-expanded': isOpen ? true : false,
      ...dynamicProps
    })
  ) : (
    <></>
  )
}
export function PopoverTarget(props: PopoverTriggerProps) {
  const { children } = props
  const { targetRef } = usePopoverContext()

  return children ? (
    React.cloneElement(children, {
      ref: targetRef
    })
  ) : (
    <></>
  )
}
export type PopoverCloseButtonProps = ButtonProps
function PopoverCloseButtonComponent(
  props: PopoverCloseButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) {
  const { cs, ...other } = props
  const { closePopover, size } = usePopoverContext()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    closePopover()
    other.onClick && other.onClick(e)
  }
  return (
    <Button
      isIconButton={true}
      size="xs"
      variant="ghost"
      data-label="close"
      {...other}
      onClick={handleClick}
      ref={ref}
      cs={combineCustomStyles(
        {
          css: {
            width: 'min-content',
            ml: 'auto',
            position: 'absolute',
            right: 0,
            top: 0,
            mx: sizeSchema[size].px,
            my: sizeSchema[size].py
          }
        },
        cs
      )}
    >
      <Close size="1.4em" />
    </Button>
  )
}
export type PopoverHeaderProps = {
  border?: BorderWidth
  bgColor?: PaletteColor
  borderColor?: PaletteColor
  color?: Color
} & FlexProps
function PopoverHeaderComponent(props: PopoverHeaderProps, ref: Ref<unknown>) {
  const { cs, border = '1', borderColor, bgColor, color, ...other } = props
  const { popoverId, size } = usePopoverContext()
  return (
    <Flex
      id={`popover_label${popoverId}`}
      ref={ref}
      cs={combineCustomStyles(
        {
          css: {
            ...sizeSchema[size],
            borderBottom: theme.border[border],
            w: '100%',
            borderColor: borderColor
              ? theme.paletteColor[borderColor]
              : 'inherit',
            bgColor: bgColor ? theme.paletteColor[bgColor] : 'inherit',
            color: color
              ? other.themeMode === 'light'
                ? theme.color[color].main
                : theme.color[color].light
              : 'inherit'
          }
        },
        cs
      )}
      {...other}
    />
  )
}
export type PopoverBodyProps = FlexProps
function PopoverBodyComponent(props: PopoverBodyProps, ref: Ref<unknown>) {
  const { cs, ...other } = props
  const { popoverId, size } = usePopoverContext()
  return (
    <Flex
      flexDirection="column"
      {...other}
      id={`popover_desc${popoverId || ''}`}
      ref={ref}
      cs={combineCustomStyles(
        {
          css: {
            w: '100%',
            ...sizeSchema[size]
          }
        },
        cs
      )}
    />
  )
}

export const PopoverBody = forwardRef(PopoverBodyComponent)
export const PopoverHeader = forwardRef(PopoverHeaderComponent)
export const PopoverContent = forwardRef(PopoverContentComponent)

export const PopoverCloseButton = forwardRef(PopoverCloseButtonComponent)
