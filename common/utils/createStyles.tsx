import { useId } from 'react'

import {
  breakpoints,
  CSSPropertyValue,
  CSSProperties,
  CustomCSSProps
} from '@common/utils'
import { Breakpoint } from '@hooks/useBreakpoints'

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
type CustomPropName = keyof CustomCSSProps

export interface CustomStyle {
  selector: string
  css: CSSProperties
}
export type CustomStyles = CustomStyle | CustomStyle[]

const toKebabCase = (string: any) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

function cssPropsToJsx(
  propName: CustomPropName,
  value: CSSPropertyValue<any>,
  selector: string
) {
  //// resolve prop value without breakpoints

  if (typeof value === 'string' || typeof value === 'number') {
    return `${selector} {
        ${toKebabCase(propName)}:${value};
      }`
  }

  let rules = ''
  ////resolve props with multiple breakpoints
  for (const breakpoint in value) {
    const queryValue =
      breakpoint in breakpoints
        ? breakpoints[(breakpoint as Breakpoint) || 'xs']
        : breakpoint

    //// avoid creating media queries for min-width="0"

    if (queryValue === 0) {
      rules += `
      ${selector} {
        ${toKebabCase(propName)}:${value[breakpoint]};
       }
       
    `
    }
    rules += `
    @media (min-width: ${queryValue}px) {
      ${selector} {
        ${toKebabCase(propName)}:${value[breakpoint]};
       }
    }
  `
  }
  return rules
}

function customPropsToJsx(
  propName: CustomPropName,
  value: CSSPropertyValue<any>,
  selector: string
) {
  //// resolve prop value without breakpoints
  if (typeof value === 'string' || typeof value === 'number') {
    return `${selector} {
    ${stylePropMap[propName].map((prop) => `${prop}:${value};`).join(' ')}
      }`
  }

  let rules = ''
  ////resolve props with multiple breakpoints
  for (const breakpoint in value) {
    const queryValue =
      breakpoint in breakpoints
        ? breakpoints[(breakpoint as Breakpoint) || 'xs']
        : breakpoint

    //// avoid creating media queries for min-width="0"
    if (queryValue === 0) {
      rules += `${selector} {
    ${stylePropMap[propName]
      .map((prop) => `${prop}:${value[breakpoint]};`)
      .join(' ')}
      }`
    }

    rules += `
    @media (min-width: ${queryValue}px) {
      ${selector} {
     ${stylePropMap[propName]
       .map((prop) => `${prop}:${value[breakpoint]};`)
       .join(' ')}
       }
    }
  `
  }
  return rules
}

function createStyleString(selector: string, css: CSSProperties) {
  if (!css || !selector) return ' '

  let jsx = ''
  for (const propName in css) {
    //// resolve customProp real css propriety or proprieties
    if (stylePropMap[propName as CustomPropName]) {
      jsx += ` ${customPropsToJsx(
        propName as CustomPropName,
        css[propName as keyof CSSProperties],
        selector
      )} `
    } else {
      /// resolve camelCase props
      jsx += ` ${cssPropsToJsx(
        propName as any,
        css[propName as keyof CSSProperties],
        selector
      )} `
    }
  }

  return jsx
}

export function createStyle(styles: CustomStyles, rootClass: string) {
  let jsx = ''
  if (Array.isArray(styles)) {
    jsx = styles
      .map((style: CustomStyle) =>
        createStyleString(`.${rootClass}${style.selector}`, style.css)
      )
      .join(' ')
  } else {
    jsx = createStyleString(`.${rootClass}${styles.selector}`, styles.css)
  }
  return { className: rootClass, styles: jsx }
}
export function useClassName() {
  const id = useId().toString()
  const className = id.slice(1, id.length - 1)

  return className
}

export function useCustomStyles(cs?: CustomStyles) {
  /// creates a unique className
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
