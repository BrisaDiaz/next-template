import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Box, { BoxProps } from './index'
function ThemedBox(props: BoxProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <Box themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedBox)
