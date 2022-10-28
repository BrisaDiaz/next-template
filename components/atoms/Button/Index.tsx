import { ReactNode } from 'react'

export const colorSchema = {
  whiteAlpha: {
    main: '--colors-whiteAlpha-600',
    dark: '--colors-whiteAlpha-700',
    light: '--colors-whiteAlpha-600',
    contrast: 'dark'
  },
  blackAlpha: {
    main: '--colors-blackAlpha-600',
    dark: '--colors-blackAlpha-700',
    light: '--colors-blackAlpha-600',
    contrast: 'dark'
  },
  gray: {
    main: '--colors-gray-200',
    dark: '--colors-gray-300',
    light: '--colors-gray-200',
    contrast: 'light'
  },
  red: {
    main: '--colors-red-600',
    dark: '--colors-red-700',
    light: '--colors-red-400',
    contrast: 'dark'
  },
  orange: {
    main: '--colors-orange-600',
    dark: '--colors-orange-700',
    light: '--colors-orange-400',
    contrast: 'dark'
  },
  yellow: {
    main: '--colors-yellow-400',
    dark: '--colors-yellow-500',
    light: '--colors-yellow-300',
    contrast: 'light'
  },
  green: {
    main: '--colors-green-600',
    dark: '--colors-green-700',
    light: '--colors-green-400',
    contrast: 'dark'
  },
  teal: {
    main: '--colors-teal-600',
    dark: '--colors-teal-700',
    light: '--colors-teal-400',
    contrast: 'dark'
  },
  blue: {
    main: '--colors-blue-600',
    dark: '--colors-blue-700',
    light: '--colors-blue-400',
    contrast: 'dark'
  },
  purple: {
    main: '--colors-purple-600',
    dark: '--colors-purple-700',
    light: '--colors-purple-400',
    contrast: 'dark'
  },
  pink: {
    main: '--colors-pink-600',
    dark: '--colors-pink-700',
    light: '--colors-pink-400',
    contrast: 'dark'
  }
}
export const sizeSchema = {
  xs: {
    height: '--sizes-6',
    width: '--sizes-6',
    fontSize: '--fontSizes-xs',
    paddingInline: '--space-2'
  },
  sm: {
    height: '--sizes-8',
    width: '--sizes-8',
    fontSize: '--fontSizes-sm',
    paddingInline: '--space-3'
  },
  md: {
    height: '--sizes-10',
    width: '--sizes-10',
    fontSize: '--fontSizes-md',
    paddingInline: '--space-4'
  },
  lg: {
    height: '--sizes-12',
    width: '--sizes-12',
    fontSize: '--fontSizes-lg',
    paddingInline: '--space-6'
  }
}
export const variantSchema = ['solid', 'ghost', 'outline'] as const
export const themedModes = ['light', 'dark'] as const

export type Color = keyof typeof colorSchema
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]
export type ThemeMode = typeof themedModes[number]

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant
  color?: Color
  isIconButton?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  rounded?: boolean
  themeMode?: ThemeMode
}

export default function Button({
  children,
  color = 'gray',
  variant = 'solid',
  size = 'md',
  isIconButton = false,
  className,
  startIcon,
  endIcon,
  rounded = false,
  themeMode = 'light',
  ...other
}: ButtonProps) {
  return (
    <>
      <button
        data-theme={themeMode}
        className={`btn btn--${color}-${variant} btn--${size} ${
          isIconButton && 'btn--icon'
        } ${className ?? ''}`}
        {...other}
      >
        <>
          {startIcon} {children} {endIcon}
        </>
      </button>

      <style jsx>{`
        .btn {
          border: 1px solid transparent;
          font-weight: var(--fontWeights-semibold);
          border-radius: var(${rounded ? ' --radii-full' : '--radii-md'});
          cursor: pointer;
          transition-property: var(--transition-property-common);
          transition-duration: var(--transition-duration-normal);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--fontSizes-3xs);
          --solid-bg: var(${colorSchema[color].main});
          --solid-color: var(
            ${colorSchema[color].contrast === 'light'
              ? '--colors-black'
              : '--colors-white'}
          );
          --solid-bg-hover: var(${colorSchema[color].dark});
          --outline-color: var(
            ${color === 'gray' ? '--colors-body-text' : colorSchema[color].dark}
          );
          --ghost-color: var(--outline-color);
        }
        .btn:focus-visible {
          outline-offset: var(--ring-offset-width);
          outline: 3px solid var(--ring-color);
        }
        .btn[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
          box-shadow: var(--shadows-none);
        }
         {
          /* DARK themeMode VARIABLES */
        }
        [data-theme='dark'] {
          --outline-color: var(
            ${color === 'gray'
              ? '--colors-body-text'
              : colorSchema[color].light}
          );
          --ghost-color: var(--outline-color);
        }

        .btn--${color}-solid {
          background-color: var(--solid-bg);
          color: var(--solid-color);
        }

        .btn--${color}-solid:hover {
          background-color: var(--solid-bg-hover);
        }

        .btn--${size} {
          height: var(${sizeSchema[size].height});
          min-width: var(${sizeSchema[size].width});
          font-size: var(${sizeSchema[size].fontSize});
          padding-inline-start: var(${sizeSchema[size].paddingInline});
          padding-inline-end: var(${sizeSchema[size].paddingInline});
        }
        .btn--icon {
          padding-inline-start: ${size === 'xs' ? 0 : 'var(--space-2)'};
          padding-inline-end: ${size === 'xs' ? 0 : 'var(--space-2)'};
        }
        .btn--${color}-outline {
          border-color: var(--outline-color);
          color: var(--outline-color);
          background-color: var(--colors-transparent);
        }

        .btn--${color}-ghost {
          border-color: var(--colors-transparent);
          background-color: var(--colors-transparent);
          color: var(--ghost-color);
        }

        .btn--${color}-ghost:hover::before,
          .btn--${color}-outline:hover::before {
          content: ' ';
          position: absolute;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--ghost-color);
          opacity: 0.1;
        }
      `}</style>
    </>
  )
}
