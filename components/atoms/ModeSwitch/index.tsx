import { Moon, Sun } from '../SVG'
import Button, { ButtonProps, BtnColorSchema } from '../Button'
import { forwardRef, Ref } from 'react'
const sizeSchema: { [key: string]: string } = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem'
}
export type ModeSwitchProps = ButtonProps & {
  darkColorSchema?: BtnColorSchema
  lightColorSchema?: BtnColorSchema
}
function ModeSwitch(
  {
    size = 'md',
    darkColorSchema,
    lightColorSchema,
    themeMode = 'light',
    ...props
  }: ModeSwitchProps,
  ref?: Ref<HTMLButtonElement>
) {
  const color =
    darkColorSchema && themeMode === 'dark'
      ? darkColorSchema
      : lightColorSchema && themeMode === 'light'
      ? lightColorSchema
      : undefined

  return (
    <Button
      variant="ghost"
      {...props}
      colorSchema={color}
      size={size}
      aria-label={`switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
      isIconButton={true}
      themeMode={themeMode}
      ref={ref}
    >
      {themeMode === 'dark' ? (
        <Sun size={sizeSchema[size]} />
      ) : (
        <Moon size={sizeSchema[size]} />
      )}
    </Button>
  )
}
export default forwardRef(ModeSwitch)
