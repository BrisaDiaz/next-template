import { forwardRef } from 'react'
import clsx from 'clsx'
import {
  CommonProps,
  ThemeMode,
  FontSize,
  FontWeight,
  Color,
  useCustomStyles,
  theme
} from '../../common/utils'

export const componentSchema = [
  'a',
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

export type Component = typeof componentSchema[number]

export interface ExtraProps {
  as?: Component
  color?: Color
  noOfLines?: number
  fontSize?: FontSize
  fontWeight?: FontWeight
}
export type TextProps = React.HTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps &
  ExtraProps

export const defaultValue = {
  fontSize: 'md' as FontSize,
  fontWeight: 'normal' as FontWeight,
  as: 'p' as Component,
  color: 'inherit' as Color,
  themeMode: 'light' as ThemeMode
}

function Text(
  {
    fontSize = defaultValue.fontSize,
    fontWeight = defaultValue.fontWeight,
    as = defaultValue.as,
    color = defaultValue.color,
    themeMode = defaultValue.themeMode,
    cs,
    noOfLines,
    children,
    className,
    ...other
  }: TextProps,
  ref?: any
) {
  const extraStyles = useCustomStyles(cs)
  const props = {
    className: clsx(
      extraStyles.className,
      'text',
      `text-color-${color}`,
      `text-weight-${fontWeight}`,
      `text-size-${fontSize}`,
      {
        [`${className}`]: className
      }
    ),
    'data-theme': themeMode,
    ...other,
    ref
  }

  return (
    <>
      {'a' === as && <a {...props}>{children}</a>}
      {'p' === as && <p {...props}>{children}</p>}
      {'h1' === as && <h1 {...props}>{children}</h1>}
      {'h2' === as && <h2 {...props}>{children}</h2>}
      {'h3' === as && <h3 {...props}>{children}</h3>}
      {'h4' === as && <h4 {...props}>{children}</h4>}
      {'h5' === as && <h5 {...props}>{children}</h5>}
      {'h6' === as && <h6 {...props}>{children}</h6>}
      {'i' === as && <i {...props}>{children}</i>}
      {'b' === as && <b {...props}>{children}</b>}
      {'u' === as && <u {...props}>{children}</u>}
      {'abbr' === as && <abbr {...props}>{children}</abbr>}
      {'cite' === as && <cite {...props}>{children}</cite>}
      {'del' === as && <del {...props}>{children}</del>}
      {'em' === as && <em {...props}>{children}</em>}
      {'ins' === as && <ins {...props}>{children}</ins>}
      {'mark' === as && <mark {...props}>{children}</mark>}
      {'s' === as && <s {...props}>{children}</s>}
      {'sub' === as && <sub {...props}>{children}</sub>}

      <style jsx>{`
        .text-color-${color} {
          color: ${theme.color[color].main};
        }
        .text-color-${color}[data-theme="dark"] {
          color: ${theme.color[color].light};
        }
        .text-size-${fontSize} {
          font-size: ${theme.fontSize[fontSize]};
        }
        .text-weight-${fontWeight} {
          font-weight: ${theme.fontWeight[fontWeight]};
        }
        .text {
          transition-property: -webkit-line-clamp, overflow, display,
            text-overflow;
          transition-timing-function: var(--transition-easing-ease-in-out);
          transition-duration: var(--transition-duration-ultra-slow);
          ${noOfLines
            ? `
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${noOfLines};
           transition-property: -webkit-line-clamp,overflow,display,text-overflow;
            transition-timing-function: var(--transition-easing-ease-in-out);
            transition-duration: var( --transition-duration-ultra-slow)
        `
            : ''}
        }
        ${extraStyles.styles}
      `}</style>
    </>
  )
}
export default forwardRef(Text)
