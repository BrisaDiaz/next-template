import { CustomStyles } from './index'
export const paletteColorSchema = {
  current: 'var(--colors-current)',
  inherit: 'var(--colors-inherit)',
  transparent: 'var(--colors-transparent)',
  'whiteAlpha-50': 'var(--colors-whiteAlpha-50)',
  'whiteAlpha-100': 'var(--colors-whiteAlpha-100)',
  'whiteAlpha-200': 'var(--colors-whiteAlpha-200)',
  'whiteAlpha-300': 'var(--colors-whiteAlpha-300)',
  'whiteAlpha-400': 'var(--colors-whiteAlpha-400)',
  'whiteAlpha-500': 'var(--colors-whiteAlpha-500)',
  'whiteAlpha-600': 'var(--colors-whiteAlpha-600)',
  'whiteAlpha-700': 'var(--colors-whiteAlpha-700)',
  'whiteAlpha-800': 'var(--colors-whiteAlpha-800)',
  'whiteAlpha-900': 'var(--colors-whiteAlpha-900)',
  'blackAlpha-50': 'var(--colors-blackAlpha-50)',
  'blackAlpha-100': 'var(--colors-blackAlpha-100)',
  'blackAlpha-200': 'var(--colors-blackAlpha-200)',
  'blackAlpha-300': 'var(--colors-blackAlpha-300)',
  'blackAlpha-400': 'var(--colors-blackAlpha-400)',
  'blackAlpha-500': 'var(--colors-blackAlpha-500)',
  'blackAlpha-600': 'var(--colors-blackAlpha-600)',
  'blackAlpha-700': 'var(--colors-blackAlpha-700)',
  'blackAlpha-800': 'var(--colors-blackAlpha-800)',
  'blackAlpha-900': 'var(--colors-blackAlpha-900)',
  'gray-50': 'var(--colors-gray-50)',
  'gray-100': 'var(--colors-gray-100)',
  'gray-200': 'var(--colors-gray-200)',
  'gray-300': 'var(--colors-gray-300)',
  'gray-400': 'var(--colors-gray-400)',
  'gray-500': 'var(--colors-gray-500)',
  'gray-600': 'var(--colors-gray-600)',
  'gray-700': 'var(--colors-gray-700)',
  'gray-800': 'var(--colors-gray-800)',
  'gray-900': 'var(--colors-gray-900)',
  'red-50': 'var(--colors-red-50)',
  'red-100': 'var(--colors-red-100)',
  'red-200': 'var(--colors-red-200)',
  'red-300': 'var(--colors-red-300)',
  'red-400': 'var(--colors-red-400)',
  'red-500': 'var(--colors-red-500)',
  'red-600': 'var(--colors-red-600)',
  'red-700': 'var(--colors-red-700)',
  'red-800': 'var(--colors-red-800)',
  'red-900': 'var(--colors-red-900)',
  'orange-50': 'var(--colors-orange-50)',
  'orange-100': 'var(--colors-orange-100)',
  'orange-200': 'var(--colors-orange-200)',
  'orange-300': 'var(--colors-orange-300)',
  'orange-400': 'var(--colors-orange-400)',
  'orange-500': 'var(--colors-orange-500)',
  'orange-600': 'var(--colors-orange-600)',
  'orange-700': 'var(--colors-orange-700)',
  'orange-800': 'var(--colors-orange-800)',
  'orange-900': 'var(--colors-orange-900)',
  'yellow-50': 'var(--colors-yellow-50)',
  'yellow-100': 'var(--colors-yellow-100)',
  'yellow-200': 'var(--colors-yellow-200)',
  'yellow-300': 'var(--colors-yellow-300)',
  'yellow-400': 'var(--colors-yellow-400)',
  'yellow-500': 'var(--colors-yellow-500)',
  'yellow-600': 'var(--colors-yellow-600)',
  'yellow-700': 'var(--colors-yellow-700)',
  'yellow-800': 'var(--colors-yellow-800)',
  'yellow-900': 'var(--colors-yellow-900)',
  'green-50': 'var(--colors-green-50)',
  'green-100': 'var(--colors-green-100)',
  'green-200': 'var(--colors-green-200)',
  'green-300': 'var(--colors-green-300)',
  'green-400': 'var(--colors-green-400)',
  'green-500': 'var(--colors-green-500)',
  'green-600': 'var(--colors-green-600)',
  'green-700': 'var(--colors-green-700)',
  'green-800': 'var(--colors-green-800)',
  'green-900': 'var(--colors-green-900)',
  'teal-50': 'var(--colors-teal-50)',
  'teal-100': 'var(--colors-teal-100)',
  'teal-200': 'var(--colors-teal-200)',
  'teal-300': 'var(--colors-teal-300)',
  'teal-400': 'var(--colors-teal-400)',
  'teal-500': 'var(--colors-teal-500)',
  'teal-600': 'var(--colors-teal-600)',
  'teal-700': 'var(--colors-teal-700)',
  'teal-800': 'var(--colors-teal-800)',
  'teal-900': 'var(--colors-teal-900)',
  'blue-50': 'var(--colors-blue-50)',
  'blue-100': 'var(--colors-blue-100)',
  'blue-200': 'var(--colors-blue-200)',
  'blue-300': 'var(--colors-blue-300)',
  'blue-400': 'var(--colors-blue-400)',
  'blue-500': 'var(--colors-blue-500)',
  'blue-600': 'var(--colors-blue-600)',
  'blue-700': 'var(--colors-blue-700)',
  'blue-800': 'var(--colors-blue-800)',
  'blue-900': 'var(--colors-blue-900)',
  'cyan-50': 'var(--colors-cyan-50)',
  'cyan-100': 'var(--colors-cyan-100)',
  'cyan-200': 'var(--colors-cyan-200)',
  'cyan-300': 'var(--colors-cyan-300)',
  'cyan-400': 'var(--colors-cyan-400)',
  'cyan-500': 'var(--colors-cyan-500)',
  'cyan-600': 'var(--colors-cyan-600)',
  'cyan-700': 'var(--colors-cyan-700)',
  'cyan-800': 'var(--colors-cyan-800)',
  'cyan-900': 'var(--colors-cyan-900)',
  'purple-50': 'var(--colors-purple-50)',
  'purple-100': 'var(--colors-purple-100)',
  'purple-200': 'var(--colors-purple-200)',
  'purple-300': 'var(--colors-purple-300)',
  'purple-400': 'var(--colors-purple-400)',
  'purple-500': 'var(--colors-purple-500)',
  'purple-600': 'var(--colors-purple-600)',
  'purple-700': 'var(--colors-purple-700)',
  'purple-800': 'var(--colors-purple-800)',
  'purple-900': 'var(--colors-purple-900)',
  'pink-50': 'var(--colors-pink-50)',
  'pink-100': 'var(--colors-pink-100)',
  'pink-200': 'var(--colors-pink-200)',
  'pink-300': 'var(--colors-pink-300)',
  'pink-400': 'var(--colors-pink-400)',
  'pink-500': 'var(--colors-pink-500)',
  'pink-600': 'var(--colors-pink-600)',
  'pink-700': 'var(--colors-pink-700)',
  'pink-800': 'var(--colors-pink-800)',
  'pink-900': 'var(--colors-pink-900)',
  'linkedin-50': 'var(--colors-linkedin-50)',
  'linkedin-100': 'var(--colors-linkedin-100)',
  'linkedin-200': 'var(--colors-linkedin-200)',
  'linkedin-300': 'var(--colors-linkedin-300)',
  'linkedin-400': 'var(--colors-linkedin-400)',
  'linkedin-500': 'var(--colors-linkedin-500)',
  'linkedin-600': 'var(--colors-linkedin-600)',
  'linkedin-700': 'var(--colors-linkedin-700)',
  'linkedin-800': 'var(--colors-linkedin-800)',
  'linkedin-900': 'var(--colors-linkedin-900)',
  'facebook-50': 'var(--colors-facebook-50)',
  'facebook-100': 'var(--colors-facebook-100)',
  'facebook-200': 'var(--colors-facebook-200)',
  'facebook-300': 'var(--colors-facebook-300)',
  'facebook-400': 'var(--colors-facebook-400)',
  'facebook-500': 'var(--colors-facebook-500)',
  'facebook-600': 'var(--colors-facebook-600)',
  'facebook-700': 'var(--colors-facebook-700)',
  'facebook-800': 'var(--colors-facebook-800)',
  'facebook-900': 'var(--colors-facebook-900)',
  'messenger-50': 'var(--colors-messenger-50)',
  'messenger-100': 'var(--colors-messenger-100)',
  'messenger-200': 'var(--colors-messenger-200)',
  'messenger-300': 'var(--colors-messenger-300)',
  'messenger-400': 'var(--colors-messenger-400)',
  'messenger-500': 'var(--colors-messenger-500)',
  'messenger-600': 'var(--colors-messenger-600)',
  'messenger-700': 'var(--colors-messenger-700)',
  'messenger-800': 'var(--colors-messenger-800)',
  'messenger-900': 'var(--colors-messenger-900)',
  'whatsapp-50': 'var(--colors-whatsapp-50)',
  'whatsapp-100': 'var(--colors-whatsapp-100)',
  'whatsapp-200': 'var(--colors-whatsapp-200)',
  'whatsapp-300': 'var(--colors-whatsapp-300)',
  'whatsapp-400': 'var(--colors-whatsapp-400)',
  'whatsapp-500': 'var(--colors-whatsapp-500)',
  'whatsapp-600': 'var(--colors-whatsapp-600)',
  'whatsapp-700': 'var(--colors-whatsapp-700)',
  'whatsapp-800': 'var(--colors-whatsapp-800)',
  'whatsapp-900': 'var(--colors-whatsapp-900)',
  'twitter-50': 'var(--colors-twitter-50)',
  'twitter-100': 'var(--colors-twitter-100)',
  'twitter-200': 'var(--colors-twitter-200)',
  'twitter-300': 'var(--colors-twitter-300)',
  'twitter-400': 'var(--colors-twitter-400)',
  'twitter-500': 'var(--colors-twitter-500)',
  'twitter-600': 'var(--colors-twitter-600)',
  'twitter-700': 'var(--colors-twitter-700)',
  'twitter-800': 'var(--colors-twitter-800)',
  'twitter-900': 'var(--colors-twitter-900)',
  'telegram-50': 'var(--colors-telegram-50)',
  'telegram-100': 'var(--colors-telegram-100)',
  'telegram-200': 'var(--colors-telegram-200)',
  'telegram-300': 'var(--colors-telegram-300)',
  'telegram-400': 'var(--colors-telegram-400)',
  'telegram-500': 'var(--colors-telegram-500)',
  'telegram-600': 'var(--colors-telegram-600)',
  'telegram-700': 'var(--colors-telegram-700)',
  'telegram-800': 'var(--colors-telegram-800)',
  'telegram-900': 'var(--colors-telegram-90)'
}
export const spaceSchema = {
  none: 'var(--space-0)',
  '1': 'var(--space-1)',
  '2': 'var(--space-2)',
  '3': 'var(--space-3)',
  '4': 'var(--space-4)',
  '5': 'var(--space-5)',
  '6': 'var(--space-6)',
  '7': 'var(--space-7)',
  '8': 'var(--space-8)',
  '9': 'var(--space-9)',
  '10': 'var(--space-10)',
  '12': 'var(--space-12)',
  '14': 'var(--space-14)',
  '16': 'var(--space-16)',
  '20': 'var(--space-20)',
  '24': 'var(--space-24)',
  '28': 'var(--space-28)',
  '32': 'var(--space-32)',
  '36': 'var(--space-36)',
  '40': 'var(--space-40)',
  '44': 'var(--space-44)',
  '48': 'var(--space-48)',
  '52': 'var(--space-52)',
  '56': 'var(--space-56)',
  '60': 'var(--space-60)',
  '64': 'var(--space-64)',
  '72': 'var(--space-72)',
  '80': 'var(--space-80)',
  '96': 'var(--space-96)',
  '0-5': 'var(--space-0-5)',
  '1-5': 'var(--space-1-5)',
  '2-5': 'var(--space-2-5)',
  '3-5': 'var(--space-3-5)'
}
export const borderRadiusSchema = {
  none: 'var(--radii-none)',
  sm: 'var(--radii-sm)',
  base: 'var(--radii-base)',
  md: 'var(--radii-md)',
  lg: 'var(--radii-lg)',
  xl: 'var(--radii-xl)',
  '2xl': 'var(--radii-2xl)',
  '3xl': 'var(--radii-3xl)',
  full: 'var(--radii-full)'
}
export const borderSchema = {
  none: 'var(--borders-none)',
  '1': 'var(--borders-1px)',
  '2': 'var(--borders-2px)',
  '4': 'var(--borders-4px)',
  '8': 'var(--borders-8px)'
}

export const shadowSchema = {
  none: 'var(--radii-none)',
  base: 'var(--shadows-base)',
  xs: 'var(--shadows-xs)',
  sm: 'var(--shadows-sm)',
  md: 'var(--shadows-md)',
  lg: 'var(--shadows-lg)',
  xl: 'var(--shadows-xl)',
  '2xl': 'var(--shadows-2xl)',
  outline: 'var(--shadows-outline)',
  inner: 'var(--shadows-inner)',
  'dark-lg': 'var(--shadows-dark-lg)'
}
export const opacitySchema = {
  '0': 'var(--opacity-0)',
  '5': 'var(--opacity-5)',
  '10': 'var(--opacity-10)',
  '20': 'var(--opacity-20)',
  '25': 'var(--opacity-25)',
  '30': 'var(--opacity-30)',
  '40': 'var(--opacity-40)',
  '50': 'var(--opacity-50)',
  '60': 'var(--opacity-60)',
  '70': 'var(--opacity-70)',
  '75': 'var(--opacity-75)',
  '80': 'var(--opacity-80)',
  '90': 'var(--opacity-90)',
  '95': 'var(--opacity-95)',
  '100': 'var(--opacity100)'
}

export const sizeSchema = {
  '0': 'var(--sizes-0)',
  '2': 'var(--sizes-2)',
  '3': 'var(--sizes-3)',
  '4': 'var(--sizes-4)',
  '5': 'var(--sizes-5)',
  '6': 'var(--sizes-6)',
  '7': 'var(--sizes-7)',
  '8': 'var(--sizes-8)',
  '9': 'var(--sizes-9)',
  '10': 'var(--sizes-10)',
  '12': 'var(--sizes-12)',
  '14': 'var(--sizes-14)',
  '16': 'var(--sizes-16)',
  '20': 'var(--sizes-20)',
  '24': 'var(--sizes-24)',
  '28': 'var(--sizes-28)',
  '32': 'var(--sizes-32)',
  '36': 'var(--sizes-36)',
  '40': 'var(--sizes-40)',
  '44': 'var(--sizes-44)',
  '48': 'var(--sizes-48)',
  '52': 'var(--sizes-52)',
  '56': 'var(--sizes-56)',
  '60': 'var(--sizes-60)',
  '64': 'var(--sizes-64)',
  '72': 'var(--sizes-72)',
  '80': 'var(--sizes-80)',
  '96': 'var(--sizes-96)',
  '0-5': 'var(--sizes-0-5)',
  '1-5': 'var(--sizes-1-5)',
  '2-5': 'var(--sizes-2-5)',
  '3-5': 'var(--sizes-3-5)',
  full: 'var(--sizes-full)',
  auto: 'var(--sizes-auto)',
  '1-half': 'var(--sizes-1-half)',
  '1-third': 'var(--sizes-1-third)',
  '2-thirds': 'var(--sizes-2-thirds)',
  '1-quarter': 'var(--sizes-1-quarter)',
  '2-quarters': 'var(--sizes-2-quarters)',
  '3-quarters': 'var(--sizes-3-quarters)',
  'screen-h': 'var(--sizes-screen-h)',
  'screen-w': 'var(--sizes-screen-w)',
  fit: 'var(--sizes-content)',
  '3xs': 'var(--sizes-3xs)',
  '2xs': 'var(--sizes-2xs)',
  xs: 'var(--sizes-xs)',
  sm: 'var(--sizes-sm)',
  md: 'var(--sizes-md)',
  lg: 'var(--sizes-lg)',
  xl: 'var(--sizes-xl)',
  '2xl': 'var(--sizes-2xl)',
  '3xl': 'var(--sizes-3xl)',
  '4xl': 'var(--sizes-4xl)',
  '5xl': 'var(--sizes-5xl)',
  '6xl': 'var(--sizes-6xl)',
  '7xl': 'var(--sizes-7xl)',
  '8xl': 'var(--sizes-8xl)',
  prose: 'var(--sizes-prose)',
  'container-sm': 'var(--sizes-container-sm)',
  'container-md': 'var(--sizes-container-md)',
  'container-lg': 'var(--sizes-container-lg)',
  'container-xl': 'var(--sizes-container-xl)',
  'min-content': 'var(--sizes-min)',
  'max-content': 'var(--sizes-max)',
  'fit-content': ' var(--sizes-content)'
}
export const blurSchema = {
  none: 'var(--blur-none)',
  sm: 'var(--blur-sm)',
  base: 'var(--blur-base)',
  md: 'var(--blur-md)',
  lg: 'var(--blur-lg)',
  xl: 'var(--blur-xl)',
  '2xl': 'var(--blur-2xl)',
  '3xl': 'var(--blur-3xl)'
}
export const rotateSchema = {
  '0': 'var(--rotate-0)',
  '1': 'var(--rotate-1)',
  '2': 'var(--rotate-2)',
  '3': 'var(--rotate-3)',
  '6': 'var(--rotate-6)',
  '12': 'var(--rotate-12)',
  '45': 'var(--rotate-45)',
  '90': 'var(--rotate-90)',
  '180': 'var(--rotate-180)'
}
export const fontSizeSchema = {
  xs: 'var(--fontSizes-xs)',
  sm: 'var(--fontSizes-sm)',
  md: 'var(--fontSizes-md)',
  lg: 'var(--fontSizes-lg)',
  xl: 'var(--fontSizes-xl)',
  '2xl': 'var(--fontSizes-2xl)',
  '3xl': 'var(--fontSizes-3xl)',
  '4xl': 'var(--fontSizes-4xl)',
  '5xl': 'var(--fontSizes-5xl)',
  '6xl': 'var(--fontSizes-6xl)'
}
export const fontWeightSchema = {
  hairline: 'var(--fontWeights-hairline)',
  thin: 'var(--fontWeights-thin)',
  light: 'var(--fontWeights-light)',
  normal: 'var(--fontWeights-normal)',
  medium: 'var(--fontWeights-medium)',
  semibold: 'var(--fontWeights-semibold)',
  bold: 'var(--fontWeights-bold)',
  extrabold: 'var(--fontWeights-extrabold)',
  black: 'var(--fontWeights-black)'
}
export const scaleSchema = {
  '0': 'var(--scale-0)',
  '50': 'var(--scale-50)',
  '75': 'var(--scale-75)',
  '90': 'var(--scale-90)',
  '95': 'var(--scale-95)',
  '100': 'var(--scale-100)',
  '105': 'var(--scale-105)',
  '110': 'var(--scale-110)',
  '125': 'var(--scale-125)',
  '150': 'var(--scale-150)'
}
export const colorSchema = {
  inherit: {
    main: 'var(--colors-inherit)',
    light: 'var(--colors-inherit)'
  },
  currentColor: {
    main: 'var(--colors-currentColor)',
    light: 'var(--colors-currentColor)'
  },
  whiteAlpha: {
    main: 'var(--colors-blackAlpha-900)',
    light: 'var(--colors-whiteAlpha-900)'
  },
  blackAlpha: {
    main: 'var(--colors-blackAlpha-900)',
    light: 'var(--colors-whiteAlpha-900)'
  },
  gray: {
    main: 'var(--colors-gray-600)',
    light: 'var(--colors-gray-200)'
  },
  red: {
    main: 'var(--colors-red-600)',
    light: 'var(--colors-red-300)'
  },
  orange: {
    main: 'var(--colors-orange-600)',
    light: 'var(--colors-orange-300)'
  },
  yellow: {
    main: 'var(--colors-yellow-700)',
    light: 'var(--colors-yellow-300)'
  },
  green: {
    main: 'var(--colors-green-600)',
    light: 'var(--colors-green-300)'
  },
  teal: {
    main: 'var(--colors-teal-600)',
    light: 'var(--colors-teal-300)'
  },
  blue: {
    main: 'var(--colors-blue-600)',
    light: 'var(--colors-blue-300)'
  },
  purple: {
    main: 'var(--colors-purple-600)',
    light: 'var(--colors-purple-300)'
  },
  pink: {
    main: 'var(--colors-pink-600)',
    light: 'var(--colors-pink-300)'
  },
  cyan: {
    main: 'var(--colors-cyan-800)',
    light: 'var(--colors-cyan-300)'
  },
  telegram: {
    main: 'var(--colors-telegram-600)',
    light: 'var(--colors-cyan-400)'
  },
  twitter: {
    main: 'var(--colors-twitter-800)',
    light: 'var(--colors-twitter-400)'
  },
  whatsapp: {
    main: 'var(--colors-whatsapp-700)',
    light: 'var(--colors-whatsapp-400)'
  },
  messenger: {
    main: 'var(--colors-messenger-600)',
    light: 'var(--colors-messenger-300)'
  },
  facebook: {
    main: 'var(--colors-facebook-500)',
    light: 'var(--colors-facebook-300)'
  },
  linkedin: {
    main: 'var(--colors-linkedin-700)',
    light: 'var(--colors-linkedin-400)'
  }
}
export const lineHeightSchema = {
  '3': 'var(--lineHeights-3)',
  '4': 'var(--lineHeights-4)',
  '5': 'var(--lineHeights-5)',
  '6': 'var(--lineHeights-6)',
  '7': 'var(--lineHeights-7)',
  '8': 'var(--lineHeights-8)',
  '9': 'var(--lineHeights-9)',
  '10': 'var(--lineHeights-10)',
  normal: 'var(--lineHeights-normal)',
  none: 'var(--lineHeights-none)',
  shorter: 'var(--lineHeights-shorter)',
  short: 'var(--lineHeights-short)',
  base: 'var(--lineHeights-base)',
  tall: 'var(--lineHeights-tall)',
  taller: 'var(--lineHeights-taller)'
}
export const letterSpacingSchema = {
  tighter: 'var(--letterSpacings-tighter)',
  tight: 'var(--letterSpacings-tight)',
  normal: 'var(--letterSpacings-normal)',
  wide: 'var(--letterSpacings-wide)',
  wider: 'var(--letterSpacings-wider)',
  widest: 'var(--letterSpacings-widest)'
}

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
export const zIndexSchema = {
  hide: 'var(--zIndices-hide)',
  auto: 'var(--zIndices-auto)',
  base: 'var(--zIndices-base)',
  docked: 'var(--zIndices-docked)',
  dropdown: 'var(--zIndices-dropdown)',
  sticky: 'var(--zIndices-sticky)',
  banner: 'var(--zIndices-banner)',
  overlay: 'var(--zIndices-overlay)',
  modal: 'var(--zIndices-modal)',
  popover: 'var(--zIndices-popover)',
  skipLink: 'var(--zIndices-skipLink)',
  toast: 'var(--zIndices-toast)',
  tooltip: 'var(--zIndices-tooltip)'
}
export const themeModes = ['light', 'dark'] as const

export type ThemeMode = typeof themeModes[number]
export type Breakpoint = keyof typeof breakpoints

export type Space = keyof typeof spaceSchema
export type BorderRadius = keyof typeof borderRadiusSchema
export type BorderWidth = keyof typeof borderSchema
export type Shadow = keyof typeof shadowSchema
export type Opacity = keyof typeof opacitySchema
export type Size = keyof typeof sizeSchema

export type Blur = keyof typeof blurSchema
export type FontSize = keyof typeof fontSizeSchema
export type FontWeight = keyof typeof fontWeightSchema
export type LetterSpacing = keyof typeof letterSpacingSchema
export type LineHeight = keyof typeof lineHeightSchema

export type Color = keyof typeof colorSchema
export type PaletteColor = keyof typeof paletteColorSchema

export type Scale = keyof typeof scaleSchema
export type Rotate = keyof typeof rotateSchema
export type ZIndex = keyof typeof zIndexSchema

export interface CommonProps {
  className?: string
  themeMode?: ThemeMode
  cs?: CustomStyles
}
export const theme = {
  blur: blurSchema,
  fontSize: fontSizeSchema,
  fontWeight: fontWeightSchema,
  letterSpacing: letterSpacingSchema,
  lineHeight: lineHeightSchema,
  color: colorSchema,
  paletteColor: paletteColorSchema,
  scale: scaleSchema,
  rotate: rotateSchema,
  zIndex: zIndexSchema,
  space: spaceSchema,
  borderRadius: borderRadiusSchema,
  border: borderSchema,
  shadow: shadowSchema,
  opacity: opacitySchema,
  size: sizeSchema
}
