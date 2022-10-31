import { Moon, Sun } from '../../common/SVG'
import Button, { ButtonProps } from '../Button/Index'
import { useTheme } from '../../common/ThemeProvider'
const sizeSchema: { [key: string]: string } = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem'
}
export default function ModeSwitch({ size = 'md', ...props }: ButtonProps) {
  const { toggleMode, mode } = useTheme()

  return (
    <Button
      variant="ghost"
      {...props}
      size={size}
      aria-label={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      onClick={() => toggleMode()}
      isIconButton={true}
      themeMode={mode}
    >
      {mode === 'dark' ? (
        <Sun size={sizeSchema[size]} />
      ) : (
        <Moon size={sizeSchema[size]} />
      )}
    </Button>
  )
}
