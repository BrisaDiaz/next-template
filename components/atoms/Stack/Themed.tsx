import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'

import Stack, { StackProps } from '.'

function ThemedStack(props: StackProps, ref?: Ref<unknown>) {
  const { mode } = useTheme()

  return <Stack themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedStack)
