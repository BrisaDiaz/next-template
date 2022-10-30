const sizeSchema = {
  xs: '--fontSizes-xs',
  sm: '--fontSizes-sm',
  md: '--fontSizes-md',
  lg: '--fontSizes-lg',
  xl: '--fontSizes-xl',
  '2xl': '--fontSizes-2xl',
  '3xl': '--fontSizes-3xl',
  '4xl': '--fontSizes-4xl',
  '5xl': '--fontSizes-5xl',
  '6xl': '--fontSizes-6xl'
}
const weightSchema = {
  hairline: '--fontWeights-hairline',
  thin: '--fontWeights-thin',
  light: '--fontWeights-light',
  normal: '--fontWeights-normal',
  medium: '--fontWeights-medium',
  semibold: '--fontWeights-semibold',
  bold: '--fontWeights-bold',
  extrabold: '--fontWeights-extrabold',
  black: '--fontWeights-black'
}
const componentSchema = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'i',
  'b',
  'u',
  'abbr',
  'cite',
  'del',
  'em',
  'ins',
  'mark',
  's',
  'sub'
] as const

const alignSchema = ['center', 'inherit', 'justify', 'left', 'right'] as const

export type Size = keyof typeof sizeSchema
export type Weight = keyof typeof weightSchema
export type Component = typeof componentSchema[number]
export type Align = typeof alignSchema[number]
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: Size
  weight?: Weight
  component?: Component
  align?: Align
  extraStyles?: JSX.Element
}

export default function Text({
  size = 'md',
  weight = 'normal',
  component = 'p',
  align = 'inherit',
  children,
  className,
  extraStyles,
  ...other
}: TextProps) {
  const props = {
    className: ` text text--${size}-${weight}-${align}  ${
      className ? className : ''
    }  `,
    ...other
  }

  return (
    <>
      {'p' === component && <p {...props}>{children}</p>}
      {'h1' === component && <h1 {...props}>{children}</h1>}
      {'h2' === component && <h2 {...props}>{children}</h2>}
      {'h3' === component && <h3 {...props}>{children}</h3>}
      {'h4' === component && <h4 {...props}>{children}</h4>}
      {'h5' === component && <h5 {...props}>{children}</h5>}
      {'h6' === component && <h6 {...props}>{children}</h6>}
      {'i' === component && <i {...props}>{children}</i>}
      {'b' === component && <b {...props}>{children}</b>}
      {'u' === component && <u {...props}>{children}</u>}
      {'abbr' === component && <abbr {...props}>{children}</abbr>}
      {'cite' === component && <cite {...props}>{children}</cite>}
      {'del' === component && <del {...props}>{children}</del>}
      {'em' === component && <em {...props}>{children}</em>}
      {'ins' === component && <ins {...props}>{children}</ins>}
      {'mark' === component && <mark {...props}>{children}</mark>}
      {'s' === component && <s {...props}>{children}</s>}
      {'sub' === component && <sub {...props}>{children}</sub>}
      <style jsx global>{`
        .text--${size}-${weight}-${align} {
          font-size: var(${sizeSchema[size]});
          font-weight: var(${weightSchema[weight]});
          align-self: ${align};
        }
      `}</style>
      <style jsx>{extraStyles}</style>
    </>
  )
}
