import { useId } from 'react'

import CSS from 'csstype'

import { breakpoints, Breakpoint } from './index'

type ReactCss = { [propName: string]: string }
const stylePropMap = {
  p: ['padding'],
  pt: ['padding-top'],
  pb: ['padding-bottom'],
  pl: ['padding-left'],
  pr: ['padding-right'],
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-inline-start', 'padding-inline-end'],
  m: ['margin'],
  mt: ['margin-top'],
  mb: ['margin-bottom'],
  ml: ['margin-left'],
  mr: ['margin-right'],
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-inline-start', 'margin-inline-end'],
  bg: ['background'],
  bgColor: ['background-color'],
  bgGradient: ['background-image'],
  bgClip: ['background-clip'],
  w: ['width'],
  h: ['height'],
  minW: ['min-width'],
  minH: ['min-height'],
  maxW: ['max-width'],
  maxH: ['max-height'],
  boxSize: ['width', 'height'],
  borderX: ['border-left', 'border-right'],
  borderY: ['border-top', 'border-bottom']
}
type CustomPropName = keyof typeof stylePropMap

interface CSSType extends CSS.Properties {
  p?: CSS.Property.Padding
  pt?: CSS.Property.Padding
  pb?: CSS.Property.Padding
  pl?: CSS.Property.Padding
  pr?: CSS.Property.Padding
  py?: CSS.Property.Padding
  px?: CSS.Property.Padding
  m?: CSS.Property.Margin
  mt?: CSS.Property.Margin
  mb?: CSS.Property.Margin
  ml?: CSS.Property.Margin
  mr?: CSS.Property.Margin
  my?: CSS.Property.Margin
  mx?: CSS.Property.Margin
  bg?: CSS.Property.Background
  bgColor?: CSS.Property.BackgroundColor
  bgGradient?: CSS.Property.BackgroundImage
  bgClip?: CSS.Property.BackgroundClip
  w?: CSS.Property.Width
  h?: CSS.Property.Height
  minW?: CSS.Property.MinWidth
  maxW?: CSS.Property.MaxWidth
  minH?: CSS.Property.MinHeight
  maxH?: CSS.Property.MaxHeight
  boxSize?: CSS.Property.Height
  borderX?: CSS.Property.Border
  borderY?: CSS.Property.Border
}
export interface CustomStyle {
  selector: string
  css: CSSType
  breakpoint?: Breakpoint | number
}
export type CustomStyles = CustomStyle | CustomStyle[]

const kebabize = (string: string) => {
  return string
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter
    })
    .join('')
}
const cssToJsx = (stylesObj: ReactCss) => {
  if (!stylesObj) return ''
  const css = Object.keys(stylesObj).map((propName) =>
    stylePropMap[propName as CustomPropName]
      ? ` ${stylePropMap[propName as CustomPropName]
          .map((prop) => `${prop}:${stylesObj[prop]};`)
          .join(' ')}`
      : `${kebabize(propName)}:${stylesObj[propName]};`
  )

  return css.join('')
}
function createStyleString(
  selector: string,
  css: CSSType,
  breakpoint?: Breakpoint | number
) {
  if (!css || !selector) return ' '

  const rules = cssToJsx(css as ReactCss)
  const queryMinWidth =
    typeof breakpoint === 'number'
      ? breakpoint
      : breakpoints[breakpoint || 'xs']

  if (queryMinWidth === 0) {
    return `
      ${selector} {
        ${rules}
    }`
  }
  return `
    @media (min-width: ${queryMinWidth}px) {
      ${selector} {
        ${rules}
      }
    }
  `
}

export function createStyle(styles: CustomStyles, rootClass: string) {
  let jsx = ''
  if (Array.isArray(styles)) {
    jsx = styles
      .map((style: CustomStyle) =>
        createStyleString(
          `.${rootClass}${style.selector}`,
          style.css,
          style?.breakpoint
        )
      )
      .join(' ')
  } else {
    jsx = createStyleString(
      `.${rootClass}${styles.selector}`,
      styles.css,
      styles?.breakpoint
    )
  }
  return { className: rootClass, styles: jsx }
}
export function useClassName() {
  const id = useId().toString()
  const className = id.slice(1, id.length - 1)

  return className
}

export function useCustomStyles(cs?: CustomStyles) {
  const rootClass = useClassName()
  if (!cs) {
    return { className: '', styles: '' }
  }

  const extraStyles = createStyle(cs, rootClass)

  return extraStyles
}
export type ExtraStyles = {
  className: string
  styles: string
}

export function combineExtraStyles(extraStyles: ExtraStyles | ExtraStyles[]) {
  if (Array.isArray(extraStyles)) {
    const union = extraStyles.reduce((accumulator: ExtraStyles, current) => {
      accumulator['className'] =
        accumulator['className'] + ` ${current.className}`
      accumulator['styles'] = accumulator['styles'] + ` ${current.styles}`
      return accumulator
    })
    return union
  }
  return extraStyles
}
