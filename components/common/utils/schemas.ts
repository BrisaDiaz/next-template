export const globalValues = [
  'inherit',
  'initial',
  'unset',
  'revert',
  'revert-layer'
] as const
export const paletteColorSchema = [
  'whiteAlpha-50',
  'whiteAlpha-100',
  'whiteAlpha-200',
  'whiteAlpha-300',
  'whiteAlpha-400',
  'whiteAlpha-500',
  'whiteAlpha-600',
  'whiteAlpha-700',
  'whiteAlpha-800',
  'whiteAlpha-900',
  'blackAlpha-50',
  'blackAlpha-100',
  'blackAlpha-200',
  'blackAlpha-300',
  'blackAlpha-400',
  'blackAlpha-500',
  'blackAlpha-600',
  'blackAlpha-700',
  'blackAlpha-800',
  'blackAlpha-900',
  'gray-50',
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',
  'red-50',
  'red-100',
  'red-200',
  'red-300',
  'red-400',
  'red-500',
  'red-600',
  'red-700',
  'red-800',
  'red-900',
  'orange-50',
  'orange-100',
  'orange-200',
  'orange-300',
  'orange-400',
  'orange-500',
  'orange-600',
  'orange-700',
  'orange-800',
  'orange-900',
  'yellow-50',
  'yellow-100',
  'yellow-200',
  'yellow-300',
  'yellow-400',
  'yellow-500',
  'yellow-600',
  'yellow-700',
  'yellow-800',
  'yellow-900',
  'green-50',
  'green-100',
  '  green-200',
  'green-300',
  'green-400',
  'green-500',
  'green-600',
  'green-700',
  'green-800',
  'green-900',
  'teal-50',
  'teal-100',
  'teal-200',
  'teal-300',
  'teal-400',
  'teal-500',
  'teal-600',
  'teal-700',
  'teal-800',
  'teal-900',
  'blue-50',
  'blue-100',
  'blue-200',
  'blue-300',
  'blue-400',
  'blue-500',
  'blue-600',
  'blue-700',
  'blue-800',
  'blue-900',
  'cyan-50',
  'cyan-100',
  'cyan-200',
  'cyan-300',
  'cyan-400',
  'cyan-500',
  'cyan-600',
  'cyan-700',
  'cyan-800',
  'cyan-900',
  'purple-50',
  'purple-100',
  'purple-200',
  'purple-300',
  'purple-400',
  'purple-500',
  'purple-600',
  'purple-700',
  'purple-800',
  'purple-900',
  'pink-50',
  'pink-100',
  'pink-200',
  'pink-300',
  'pink-400',
  'pink-500',
  'pink-600',
  'pink-700',
  'pink-800',
  'pink-900',
  'linkedin-50',
  'linkedin-100',
  'linkedin-200',
  'linkedin-300',
  'linkedin-400',
  'linkedin-500',
  'linkedin-600',
  'linkedin-700',
  'linkedin-800',
  'linkedin-900',
  'facebook-50',
  'facebook-100',
  'facebook-200',
  'facebook-300',
  'facebook-400',
  'facebook-500',
  'facebook-600',
  'facebook-700',
  'facebook-800',
  'facebook-900',
  'messenger-50',
  'messenger-100',
  'messenger-200',
  'messenger-300',
  'messenger-400',
  'messenger-500',
  'messenger-600',
  'messenger-700',
  'messenger-800',
  'messenger-900',
  'whatsapp-50',
  'whatsapp-100',
  'whatsapp-200',
  'whatsapp-300',
  'whatsapp-400',
  'whatsapp-500',
  'whatsapp-600',
  'whatsapp-700',
  'whatsapp-800',
  'whatsapp-900',
  'twitter-50',
  'twitter-100',
  'twitter-200',
  'twitter-300',
  'twitter-400',
  'twitter-500',
  'twitter-600',
  'twitter-700',
  'twitter-800',
  'twitter-900',
  'telegram-50',
  'telegram-100',
  'telegram-200',
  'telegram-300',
  'telegram-400',
  'telegram-500',
  'telegram-600',
  'telegram-700',
  'telegram-800',
  'telegram-900'
] as const

export const spaceSchema = {
  none: '--space-0',
  '2': '--space-2',
  '3': '--space-3',
  '4': '--space-4',
  '5': '--space-5',
  '6': '--space-6',
  '7': '--space-7',
  '8': '--space-8',
  '9': '--space-9',
  '10': '--space-10',
  '12': '--space-12',
  '14': '--space-14',
  '16': '--space-16',
  '20': '--space-20',
  '24': '--space-24',
  '28': '--space-28',
  '32': '--space-32',
  '36': '--space-36',
  '40': '--space-40',
  '44': '--space-44',
  '48': '--space-48',
  '52': '--space-52',
  '56': '--space-56',
  '60': '--space-60',
  '64': '--space-64',
  '72': '--space-72',
  '80': '--space-80',
  '96': '--space-96',
  '0-5': '--space-0-5',
  '1-5': '--space-1-5',
  '2-5': '--space-2-5',
  '3-5': '--space-3-5'
}
export const borderRadiusSchema = {
  none: '--radii-none',
  sm: '--radii-sm',
  base: '--radii-base',
  md: '--radii-md',
  lg: '--radii-lg',
  xl: '--radii-xl',
  '2xl': '--radii-2xl',
  '3xl': '--radii-3xl',
  full: '--radii-full'
}
export const borderSchema = {
  none: '--borders-none',
  '1': '--borders-1px',
  '2': '--borders-2px',
  '4': '--borders-4px',
  '8': '--borders-8px'
}
export const borderStyleSchema = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  ...globalValues
] as const
export const shadowSchema = {
  none: '--radii-none',
  base: '--shadows-base',
  xs: '--shadows-xs',
  sm: '--shadows-sm',
  md: '--shadows-md',
  lg: '--shadows-lg',
  xl: '--shadows-xl',
  '2xl': '--shadows-2xl',
  outline: '--shadows-outline',
  inner: '--shadows-inner',
  'dark-lg': '--shadows-dark-lg'
}
export const opacitySchema = {
  '0': '--opacity-0',
  '5': '--opacity-5',
  '10': '--opacity-10',
  '20': '--opacity-20',
  '25': '--opacity-25',
  '30': '--opacity-30',
  '40': '--opacity-40',
  '50': '--opacity-50',
  '60': '--opacity-60',
  '70': '--opacity-70',
  '75': '--opacity-75',
  '80': '--opacity-80',
  '90': '--opacity-90',
  '95': '--opacity-95',
  '100': '--opacity100'
}

export const sizeSchema = {
  '0': '--sizes-0',
  '2': '--sizes-2',
  '3': '--sizes-3',
  '4': '--sizes-4',
  '5': '--sizes-5',
  '6': '--sizes-6',
  '7': '--sizes-7',
  '8': '--sizes-8',
  '9': '--sizes-9',
  '10': '--sizes-10',
  '12': '--sizes-12',
  '14': '--sizes-14',
  '16': '--sizes-16',
  '20': '--sizes-20',
  '24': '--sizes-24',
  '28': '--sizes-28',
  '32': '--sizes-32',
  '36': '--sizes-36',
  '40': '--sizes-40',
  '44': '--sizes-44',
  '48': '--sizes-48',
  '52': '--sizes-52',
  '56': '--sizes-56',
  '60': '--sizes-60',
  '64': '--sizes-64',
  '72': '--sizes-72',
  '80': '--sizes-80',
  '96': '--sizes-96',
  '0-5': '--sizes-0-5',
  '1-5': '--sizes-1-5',
  '2-5': '--sizes-2-5',
  '3-5': '--sizes-3-5',
  full: '--sizes-full',
  auto: '--sizes-auto',
  '1-half': '--sizes-1-half',
  '1-third': '--sizes-1-third',
  '2-thirds': '--sizes-2-thirds',
  '1-quarter': '--sizes-1-quarter',
  '2-quarters': '--sizes-2-quarters',
  '3-quarters': '--sizes-3-quarters',
  'screen-h': '--sizes-screen-h',
  'screen-w': '--sizes-screen-w',
  fit: '--sizes-content',
  '3xs': '--sizes-3xs',
  '2xs': '--sizes-2xs',
  xs: '--sizes-xs',
  sm: '--sizes-sm',
  md: '--sizes-md',
  lg: '--sizes-lg',
  xl: '--sizes-xl',
  '2xl': '--sizes-2xl',
  '3xl': '--sizes-3xl',
  '4xl': '--sizes-4xl',
  '5xl': '--sizes-5xl',
  '6xl': '--sizes-6xl',
  '7xl': '--sizes-7xl',
  '8xl': '--sizes-8xl',
  prose: '--sizes-prose',
  'container-sm': '--sizes-container-sm',
  'container-md': '--sizes-container-md',
  'container-lg': '--sizes-container-lg',
  'container-xl': '--sizes-container-xl',
  'min-content': '--sizes-min',
  'max-content': '--sizes-max',
  'fit-content': ' --sizes-content'
}
export const blurSchema = {
  none: '--blur-none',
  sm: '--blur-sm',
  base: '--blur-base',
  md: '--blur-md',
  lg: '--blur-lg',
  xl: '--blur-xl',
  '2xl': '--blur-2xl',
  '3xl': '--blur-3xl'
}
export const rotateSchema = {
  '0': '--rotate-0',
  '1': '--rotate-1',
  '2': '--rotate-2',
  '3': '--rotate-3',
  '6': '--rotate-6',
  '12': '--rotate-12',
  '45': '--rotate-45',
  '90': '--rotate-90',
  '180': '--rotate-180'
}
export const fontSizeSchema = {
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
export const fontWeightSchema = {
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
export const scaleSchema = {
  '0': '--scale-0',
  '50': '--scale-50',
  '75': '--scale-75',
  '90': '--scale-90',
  '95': '--scale-95',
  '100': '--scale-100',
  '105': '--scale-105',
  '110': '--scale-110',
  '125': '--scale-125',
  '150': '--scale-150'
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
export const lineHeightSchema = {
  '3': '--lineHeights-3',
  '4': '--lineHeights-4',
  '5': '--lineHeights-5',
  '6': '--lineHeights-6',
  '7': '--lineHeights-7',
  '8': '--lineHeights-8',
  '9': '--lineHeights-9',
  '10': '--lineHeights-10',
  normal: '--lineHeights-normal',
  none: '--lineHeights-none',
  shorter: '--lineHeights-shorter',
  short: '--lineHeights-short',
  base: '--lineHeights-base',
  tall: '--lineHeights-tall',
  taller: '--lineHeights-taller'
}
export const letterSpacingSchema = {
  tighter: '--letterSpacings-tighter',
  tight: '--letterSpacings-tight',
  normal: '--letterSpacings-normal',
  wide: '--letterSpacings-wide',
  wider: '--letterSpacings-wider',
  widest: '--letterSpacings-widest'
}
export const textAlignSchema = [
  'start',
  'end',
  'center',
  'left',
  'right',
  'justify',
  'justify-all',
  'match-parent',
  ...globalValues
]
export const alignSchema = [
  'center',
  'auto',
  'normal',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'baseline',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  ...globalValues
] as const
export const positionSchema = [
  'static',
  'fixed',
  'absolute',
  'relative',
  'sticky',
  ...globalValues
] as const

export const displaySchema = [
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'block',
  'grid',
  'grid-item',
  'inline-grid',
  'flex',
  'flow-root',
  'none',
  'contents',
  'table',
  'table-row',
  'list-item',
  ...globalValues
] as const

export const flexDirectionSchema = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
  ...globalValues
] as const

export const flexWrapSchema = [
  'wrap',
  'nowrap',
  'wrap-reverse',
  ...globalValues
] as const
export const autoFlowSchema = [
  'row',
  'column',
  'dense',
  ...globalValues
] as const

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
export const zIndexSchema = {
  hide: '--zIndices-hide',
  auto: '--zIndices-auto',
  base: '--zIndices-base',
  docked: '--zIndices-docked',
  dropdown: '--zIndices-dropdown',
  sticky: '--zIndices-sticky',
  banner: '--zIndices-banner',
  overlay: '--zIndices-overlay',
  modal: '--zIndices-modal',
  popover: '--zIndices-popover',
  skipLink: '--zIndices-skipLink',
  toast: '--zIndices-toast',
  tooltip: '--zIndices-tooltip'
}
export const themeModes = ['light', 'dark'] as const

export type ThemeMode = typeof themeModes[number]
export type Breakpoint = keyof typeof breakpoints

export interface ExtraStyles {
  className: string
  styles: JSX.Element
}
export type Space = keyof typeof spaceSchema
export type BorderRadius = keyof typeof borderRadiusSchema
export type BorderWidth = keyof typeof borderSchema
export type Shadow = keyof typeof shadowSchema
export type Opacity = keyof typeof opacitySchema
export type Size = keyof typeof sizeSchema
export type Position = typeof positionSchema[number]
export type Placing = Exclude<
  Size,
  'max-content' | 'min-content' | 'fit-content'
>
export type Blur = keyof typeof blurSchema
export type FontSize = keyof typeof fontSizeSchema
export type FontWeight = keyof typeof fontWeightSchema
export type LetterSpacing = keyof typeof letterSpacingSchema
export type LineHeight = keyof typeof lineHeightSchema
export type Align = typeof alignSchema[number]
export type TextAlign = typeof textAlignSchema[number]
export type FlexWrap = typeof flexWrapSchema[number]
export type AutoFLow = typeof autoFlowSchema[number]
export type Display = typeof displaySchema[number]
export type FlexDirection = typeof flexDirectionSchema[number]
export type Color = keyof typeof colorSchema
export type PaletteColor = typeof paletteColorSchema[number]
export type BorderStyle = typeof borderStyleSchema[number]
export type Scale = keyof typeof scaleSchema
export type Rotate = keyof typeof rotateSchema
export type ZIndex = keyof typeof zIndexSchema

export interface CommonProps {
  className?: string
  themeMode?: ThemeMode
  extraStyles?: ExtraStyles
}
