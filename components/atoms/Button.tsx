type ColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'xl'
  variant?: 'text' | 'contained' | 'outlined'
  color?: ColorType
  fullWith?: boolean
  margin?: string | number
}

export default function Button({
  children,

  ...other
}: ButtonProps) {
  return <button {...other}>{children}</button>
}
