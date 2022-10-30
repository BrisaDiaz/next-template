export const sizeSchema = {
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
export const weightSchema = {
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
export const colorSchema = {
  inherit: {
    main: '--colors-inherit',
    light: '--colors-inherit'
  },
  gray: {
    main: '--colors-gray-600',
    light: '--colors-gray-200'
  },
  red: {
    main: '--colors-red-600',
    light: '--colors-red-300'
  },
  orange: {
    main: '--colors-orange-600',
    light: '--colors-orange-300'
  },
  yellow: {
    main: '--colors-yellow-700',
    light: '--colors-yellow-300'
  },
  green: {
    main: '--colors-green-600',
    light: '--colors-green-300'
  },
  teal: {
    main: '--colors-teal-600',
    light: '--colors-teal-300'
  },
  blue: {
    main: '--colors-blue-600',
    light: '--colors-blue-300'
  },
  purple: {
    main: '--colors-purple-600',
    light: '--colors-purple-300'
  },
  pink: {
    main: '--colors-pink-600',
    light: '--colors-pink-300'
  }
}
export const componentSchema = [
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

export const alignSchema = [
  'center',
  'inherit',
  'auto',
  'end',
  'start'
] as const
export const themedModes = ['light', 'dark'] as const

export type ThemeMode = typeof themedModes[number]
export type Size = keyof typeof sizeSchema
export type Weight = keyof typeof weightSchema
export type Component = typeof componentSchema[number]
export type Align = typeof alignSchema[number]
export type Color = keyof typeof colorSchema

export interface ExtraProps {
  size?: Size
  weight?: Weight
  component?: Component
  align?: Align
  extraStyles?: JSX.Element
  color?: Color
  themeMode?: ThemeMode
}
export type TextProps = React.HTMLAttributes<HTMLElement> & ExtraProps
export const defaultValue = {
  size: 'md' as Size,
  weight: 'normal' as Weight,
  component: 'p' as Component,
  align: 'inherit' as Align,
  color: 'inherit' as Color,
  themeMode: 'light' as ThemeMode
}
export default function Text({
  size = defaultValue.size,
  weight = defaultValue.weight,
  component = defaultValue.component,
  align = defaultValue.align,
  color = defaultValue.color,
  themeMode = defaultValue.themeMode,
  children,
  className,
  extraStyles,
  ...other
}: TextProps) {
  const props = {
    className: ` text text--${color}-${size}-${weight}-${align}  ${
      className ? className : ''
    }  `,
    'data-theme': themeMode,
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
        ${extraStyles || ''}
        .text {
          --color: var(${colorSchema[color].main});
        }
        .text--${color}-${size}-${weight}-${align} {
          font-size: var(${sizeSchema[size]});
          font-weight: var(${weightSchema[weight]});
          align-self: ${align};
          color: var(--color);
        }
         {
          /* DARK themeMode VARIABLES */
        }
        [data-theme='dark'] {
          --color: var(${colorSchema[color].light});
        }
      `}</style>
    </>
  )
}
