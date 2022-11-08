import { forwardRef, Ref } from 'react'
import { useTheme } from '../../common/layouts/ThemeProvider'
import Text, { TextProps } from '.'
function ThemedText(props: TextProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <Text themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedText)
