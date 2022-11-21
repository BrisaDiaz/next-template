import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Breadcrumbs, { BreadcrumbsProps } from '.'

function ThemedBreadcrumbs(props: BreadcrumbsProps, ref?: Ref<HTMLElement>) {
  const { mode } = useTheme()

  return <Breadcrumbs themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedBreadcrumbs)
