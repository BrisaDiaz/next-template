import css from 'styled-jsx/css'
import CSS from 'csstype'
import { breakpoints, Breakpoint } from './Props'

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

type ReactCss = { [prop: string]: string }

const reactCssToJsx = (stylesObj: ReactCss) => {
  const css = Object.keys(stylesObj).map(
    (prop) => `${kebabize(prop)}:${stylesObj[prop]};`
  )
  return css.join('')
}
export interface Argument {
  selector: string
  reactCss: CSS.Properties
  breakpoint?: Breakpoint | number
}
export type CreateStylesArgument = Argument | Argument[]

function createStyleString(
  selector: string,
  reactCss: CSS.Properties,
  breakpoint?: Breakpoint | number
) {
  if (!reactCss || !selector) return ' '

  const rules = reactCssToJsx(reactCss as ReactCss)
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
export default function createStyles(styles: CreateStylesArgument) {
  let jsx = ''
  if (Array.isArray(styles)) {
    jsx = styles
      .map((style: Argument) =>
        createStyleString(style.selector, style.reactCss, style?.breakpoint)
      )
      .join('')
  } else {
    jsx = createStyleString(
      styles.selector,
      styles.reactCss,
      styles?.breakpoint
    )
  }

  return css.resolve`
    ${jsx}
  `
}
