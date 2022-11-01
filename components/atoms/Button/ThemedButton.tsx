import { forwardRef, Ref } from 'react'
import { useTheme } from '../../common/ThemeProvider'
import Button, { ButtonProps } from './Index'
function ThemedButton(props: ButtonProps, ref?: Ref<HTMLButtonElement>) {
  const { mode } = useTheme()

  return <Button themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedButton)
