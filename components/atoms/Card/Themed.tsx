import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import {
  Card as CardComponent,
  CardProps,
  CardContent as CardContentComponent,
  CardContentProps,
  CardMedia as CardMediaComponent,
  CardMediaProps
} from './index'

function ThemedCard(props: CardProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <CardComponent themeMode={mode} {...props} ref={ref} />
}
export const Card = forwardRef(ThemedCard)

function ThemedCardContent(props: CardContentProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <CardContentComponent themeMode={mode} {...props} ref={ref} />
}
export const CardContent = forwardRef(ThemedCardContent)

function ThemedCardMedia(props: CardMediaProps, ref?: Ref<any>) {
  const { mode } = useTheme()

  return <CardMediaComponent themeMode={mode} {...props} ref={ref} />
}
export const CardMedia = forwardRef(ThemedCardMedia)
