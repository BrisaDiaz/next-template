import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
export { PopoverTarget, PopoverTrigger, useImperativePopover } from '.'
import {
  Popover as PopoverComponent,
  PopoverProps,
  PopoverContent as PopoverContentComponent,
  PopoverContentProps,
  PopoverHeader as PopoverHeaderComponent,
  PopoverHeaderProps,
  PopoverCloseButton as PopoverCloseButtonComponent,
  PopoverCloseButtonProps,
  PopoverBody as PopoverBodyComponent,
  PopoverBodyProps
} from '.'
function ThemedPopover(props: PopoverProps) {
  const { mode } = useTheme()

  return <PopoverComponent themeMode={mode} {...props} />
}
export const Popover = ThemedPopover

function ThemedPopoverContent(props: PopoverContentProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <PopoverContentComponent themeMode={mode} {...props} ref={ref} />
}
export const PopoverContent = forwardRef(ThemedPopoverContent)

function ThemedPopoverHeader(props: PopoverHeaderProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <PopoverHeaderComponent themeMode={mode} {...props} ref={ref} />
}
export const PopoverHeader = forwardRef(ThemedPopoverHeader)

function ThemedPopoverCloseButton(
  props: PopoverCloseButtonProps,
  ref?: Ref<HTMLButtonElement>
) {
  const { mode } = useTheme()

  return <PopoverCloseButtonComponent themeMode={mode} {...props} ref={ref} />
}
export const PopoverCloseButton = forwardRef(ThemedPopoverCloseButton)

function ThemedPopoverBody(
  props: PopoverBodyProps,
  ref?: Ref<HTMLButtonElement>
) {
  const { mode } = useTheme()

  return <PopoverBodyComponent themeMode={mode} {...props} ref={ref} />
}
export const PopoverBody = forwardRef(ThemedPopoverBody)
