import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Input, {
  InputProps,
  InputGroup as InputGroupComponent,
  InputGroupProps,
  InputAddon as InputAddonComponent,
  InputAddonProps
} from '.'

function ThemedInput(props: InputProps, ref?: Ref<HTMLInputElement>) {
  const { mode } = useTheme()

  return <Input themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedInput)

function ThemedInputGroup(props: InputGroupProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <InputGroupComponent themeMode={mode} {...props} ref={ref} />
}
export const InputGroup = forwardRef(ThemedInputGroup)

function ThemedInputAddon(props: InputAddonProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <InputAddonComponent themeMode={mode} {...props} ref={ref} />
}
export const InputAddon = forwardRef(ThemedInputAddon)
