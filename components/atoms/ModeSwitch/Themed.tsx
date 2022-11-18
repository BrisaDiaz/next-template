import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import ModeSwitch, { ModeSwitchProps } from '.'
function ThemedModeSwitch(
  props: ModeSwitchProps,
  ref?: Ref<HTMLButtonElement>
) {
  const { mode, toggleMode } = useTheme()

  return (
    <ModeSwitch themeMode={mode} onClick={toggleMode} {...props} ref={ref} />
  )
}
export default forwardRef(ThemedModeSwitch)
