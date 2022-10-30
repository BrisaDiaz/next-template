import { useTheme } from '../../common/ThemeProvider'
import Text, { TextProps } from './Index'
export default function ThemedText(props: TextProps) {
  const { mode } = useTheme()

  return <Text themeMode={mode} {...props} />
}
