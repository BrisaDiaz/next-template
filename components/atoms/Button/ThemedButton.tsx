import { forwardRef, Ref } from 'react'
import { useTheme } from '../../common/providers/ThemeProvider'
import Button, { ButtonProps } from '.'
function ThemedButton(props: ButtonProps, ref?: Ref<HTMLButtonElement>) {
  const { mode } = useTheme()

  return <Button themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedButton)
