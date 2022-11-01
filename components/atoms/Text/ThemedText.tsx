import { forwardRef, Ref } from 'react'
import { useTheme } from '../../common/ThemeProvider'
import Text, { TextProps } from './Index'
function ThemedText(props: TextProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <Text themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedText)
