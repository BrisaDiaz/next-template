import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Avatar, {
  AvatarProps,
  AvatarGroup as AvatarGroupComponent,
  AvatarGroupProps,
  AvatarBadge as AvatarBadgeComponent,
  AvatarBadgeProps
} from '.'
function ThemedAvatar(props: AvatarProps, ref?: Ref<HTMLDivElement>) {
  const { mode } = useTheme()

  return <Avatar themeMode={mode} {...props} ref={ref} />
}
function ThemedAvatarGroup(props: AvatarGroupProps, ref?: Ref<HTMLDivElement>) {
  const { mode } = useTheme()

  return <AvatarGroupComponent themeMode={mode} {...props} ref={ref} />
}
function ThemedAvatarBadge(props: AvatarBadgeProps, ref?: any) {
  const { mode } = useTheme()

  return <AvatarBadgeComponent themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedAvatar)
export const AvatarGroup = forwardRef(ThemedAvatarGroup)
export const AvatarBadge = forwardRef(ThemedAvatarBadge)
