import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Tag, { TagProps } from '.'
function ThemedTag(props: TagProps, ref?: Ref<HTMLSpanElement>) {
  const { mode } = useTheme()

  return <Tag themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedTag)
