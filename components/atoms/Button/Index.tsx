import { GetStyles, ButtonProps } from './styles'

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
      {GetStyles({ color, size, variant, ...other })}
    </>
  )
}
