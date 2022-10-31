import css from 'styled-jsx/css'

export const themedModes = ['light', 'dark'] as const

export type ThemeMode = typeof themedModes[number]

export interface ExtraStyles {
  className: string
  styles: JSX.Element
}

export const defaultExtraStyles = css.resolve`` as ExtraStyles
