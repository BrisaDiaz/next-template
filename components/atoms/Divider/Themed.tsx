import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Divider, { DividerProps } from '.'
function ThemedDivider(props: DividerProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <Divider themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedDivider)
