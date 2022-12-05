import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'

import {
  Dropdown as DropdownComponent,
  DropdownProps,
  DropdownItem as DropdownItemComponent,
  DropdownItemProps,
  DropdownSubmenu as DropdownSubmenuComponent,
  DropdownSubmenuProps
} from '.'
function ThemedDropdown(props: DropdownProps) {
  const { mode } = useTheme()

  return <DropdownComponent themeMode={mode} {...props} />
}
export const Dropdown = ThemedDropdown

function ThemedDropdownItem(props: DropdownItemProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <DropdownItemComponent themeMode={mode} {...props} ref={ref} />
}
export const DropdownItem = forwardRef(ThemedDropdownItem)

function ThemedDropdownSubmenu(
  props: DropdownSubmenuProps,
  ref?: Ref<unknown>
) {
  const { mode } = useTheme()

  return <DropdownSubmenuComponent themeMode={mode} {...props} ref={ref} />
}
export const DropdownSubmenu = forwardRef(ThemedDropdownSubmenu)
