import { getStyles, Color, Size, Variant } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant
  color?: Color
}

export default function Button({
  children,
  color = 'gray',
  variant = 'solid',
  size = 'md',
  ...other
}: ButtonProps) {
  return (
    <>
      <button {...other} className={`btn bn--${color}-${variant} btn--${size}`}>
        {children}
      </button>
      <style>{getStyles({ color, size })}</style>
    </>
  )
}
