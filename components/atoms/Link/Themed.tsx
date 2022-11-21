import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Link, { LinkProps } from '.'
function ThemedLink(props: LinkProps, ref?: Ref<HTMLAnchorElement>) {
  const { mode } = useTheme()

  return <Link themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedLink)
