import { useId } from 'react'

import {
  breakpoints,
  CSSPropertyValue,
  CSSProperties,
  CustomCSSProps
} from '@common/utils'
import { Breakpoint } from '@hooks/useBreakpoints'

const ROOT_SELECTOR = '.root'

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
  selector?: string
  css: CSSProperties
}

export type CustomStyles = CustomStyle | CustomStyle[]

export const toKebabCase = (string: any) => {
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
const solveMultiClass = (rootClass: string, selector: string) => {
  if (selector === ROOT_SELECTOR) return `.${rootClass}${selector}`
  const classes = selector.split(',')
  if (classes.length === 1) return `.${rootClass}${selector}`
  const formattedSelector = classes
    .map((className) => `.${rootClass}${className.trim()}`)
    .join(',')
  return formattedSelector
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
        createStyleString(
          solveMultiClass(rootClass, style?.selector || ROOT_SELECTOR),
          style.css
        )
      )
      .join(' ')
  } else {
    jsx = createStyleString(
      solveMultiClass(rootClass, styles?.selector || ROOT_SELECTOR),
      styles.css
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
  /// creates a unique className
  const rootClass = useClassName()
  if (!cs) {
    return { className: '', styles: '' }
  }

  const customStyles = createStyle(cs, rootClass)

  return customStyles
}
export type ExtraStyles = {
  className: string
  styles: string
}

export function combineCustomStyles(
  customStyles: CustomStyle | CustomStyle[],
  customStyles2: CustomStyle | CustomStyle[] | undefined
): CustomStyles {
  if (!customStyles2) return customStyles

  if (Array.isArray(customStyles2) && Array.isArray(customStyles)) {
    return groupSelectorProps([...customStyles, ...customStyles2])
  }
  if (Array.isArray(customStyles2)) {
    return groupSelectorProps([customStyles, ...customStyles2] as CustomStyle[])
  }
  if (Array.isArray(customStyles)) {
    return groupSelectorProps([...customStyles, customStyles2] as CustomStyle[])
  }
  return groupSelectorProps([customStyles, customStyles2] as CustomStyle[])
}
function groupSelectorProps(stylesArr: CustomStyle[]) {
  const selectorMap: { [key: string]: CSSProperties } = {}

  stylesArr.forEach((styleObj) => {
    const selector = styleObj.selector || ROOT_SELECTOR

    if (selector in selectorMap) {
      selectorMap[selector] = Object.assign(selectorMap[selector], styleObj.css)
    } else {
      selectorMap[selector] = styleObj.css
    }
  })
  const resolveStyle: CustomStyle[] = []
  for (const selector in selectorMap) {
    resolveStyle.push({
      selector: selector,
      css: selectorMap[selector]
    })
  }

  return resolveStyle
}
