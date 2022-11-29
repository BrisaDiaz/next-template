import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Button, {
  ButtonProps,
  ButtonGroup as ButtonGroupComponent,
  ButtonGroupProps
} from '.'
function ThemedButton(props: ButtonProps, ref?: Ref<HTMLButtonElement>) {
  const { mode } = useTheme()

  return <Button themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedButton)
function ThemedButtonGroup(props: ButtonGroupProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <ButtonGroupComponent themeMode={mode} {...props} ref={ref} />
}
export const ButtonGroup = forwardRef(ThemedButtonGroup)
