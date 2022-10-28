import { useTheme } from '../../common/ThemeProvider'
import Button, { ButtonProps } from './Index'
export default function ThemedButton(props: ButtonProps) {
  const { mode } = useTheme()

  return <Button themeMode={mode} {...props} />
}
