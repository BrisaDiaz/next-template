import { forwardRef } from 'react'
import clsx from 'clsx'
import {
  CommonProps,
  defaultExtraStyles,
  ThemeMode,
  FontSize,
  FontWeight,
  Color
} from '../../common/utils'

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

export type Component = typeof componentSchema[number]

export interface ExtraProps {
  as?: Component
  color?: Color
  noOfLines?: number
  fontSize?: FontSize
  fontWeight?: FontWeight
}
export type TextProps = React.HTMLAttributes<HTMLElement> &
  CommonProps &
  ExtraProps

export const defaultValue = {
  fontSize: 'md' as FontSize,
  fontWeight: 'normal' as FontWeight,
  as: 'p' as Component,
  color: 'inherit' as Color,
  themeMode: 'light' as ThemeMode,
  extraStyles: defaultExtraStyles
}

function Text(
  {
    fontSize = defaultValue.fontSize,
    fontWeight = defaultValue.fontWeight,
    as = defaultValue.as,
    color = defaultValue.color,
    themeMode = defaultValue.themeMode,
    extraStyles = defaultValue.extraStyles,
    noOfLines,
    children,
    className,
    ...other
  }: TextProps,
  ref?: any
) {
  const props = {
    className: clsx(
      'text',
      `color-${color}`,
      `font-weight-${fontWeight}`,
      `font-size-${fontSize}`,
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
            transition-timing-function: var(--transition-easing-ease-in-out ;
            transition-duration: var( --transition-duration-ultra-slow)
        `
            : ''}
        }
      `}</style>

      {extraStyles.styles}
    </>
  )
}
export default forwardRef(Text)
