import css from 'styled-jsx/css'

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export const themedModes = ['light', 'dark'] as const

export type ThemeMode = typeof themedModes[number]
export type Breakpoint = keyof typeof breakpoints

export interface ExtraStyles {
  className: string
  styles: JSX.Element
}

export const defaultExtraStyles = css.resolve`` as ExtraStyles
