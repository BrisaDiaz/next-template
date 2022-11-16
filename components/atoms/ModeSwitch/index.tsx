import { forwardRef, Ref } from 'react'
import { Moon, Sun } from '../SVG'
import Button, { ButtonProps, BtnColorSchema } from '../Button'
import { useTheme } from '../../common/providers/ThemeProvider'
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
  }: ButtonProps & {
    darkModeColor?: BtnColorSchema
    lightModeColor?: BtnColorSchema
  },
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
      colorSchema={color}
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
