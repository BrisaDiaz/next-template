import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Backdrop, { BackdropProps } from '.'

function ThemedBackdrop(props: BackdropProps, ref?: Ref<HTMLButtonElement>) {
  const { mode, toggleMode } = useTheme()

  return <Backdrop themeMode={mode} onClick={toggleMode} {...props} ref={ref} />
}
export default forwardRef(ThemedBackdrop)
