import { forwardRef, Ref } from 'react'
import { Moon, Sun } from '../../common/SVG'
import Button, { ButtonProps, Color } from '../Button/Index'
import { useTheme } from '../../common/ThemeProvider'
const sizeSchema: { [key: string]: string } = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem'
}
function ModeSwitch(
  {
    size = 'md',
    darkModeColor,
    lightModeColor,
    ...props
  }: ButtonProps & { darkModeColor?: Color; lightModeColor?: Color },
  ref?: Ref<HTMLButtonElement>
) {
  const { toggleMode, mode } = useTheme()

  const color =
    darkModeColor && mode === 'dark'
      ? darkModeColor
      : lightModeColor && mode === 'light'
      ? lightModeColor
      : undefined

  return (
    <Button
      variant="ghost"
      {...props}
      color={color}
      size={size}
      aria-label={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      onClick={() => toggleMode()}
      isIconButton={true}
      themeMode={mode}
      ref={ref}
    >
      {mode === 'dark' ? (
        <Sun size={sizeSchema[size]} />
      ) : (
        <Moon size={sizeSchema[size]} />
      )}
    </Button>
  )
}
export default forwardRef(ModeSwitch)
