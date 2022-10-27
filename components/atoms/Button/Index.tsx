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
    main: '--colors-gray-100',
    dark: '--colors-gray-200',
    light: '--colors-red-100',
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
    light: '--colors-yellow-400',
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
export const variantSchema = ['solid', 'ghost', 'outline']

export type Color = keyof typeof colorSchema
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant
  color?: Color
}
export default function Button({
  children,
  color = 'gray',
  variant = 'solid',
  size = 'md',
  className,
  ...other
}: ButtonProps) {
  return (
    <>
      <button
        className={`btn bn--${color}-${variant} btn--${size} ${className}`}
        {...other}
      >
        {children}
      </button>

      <style jsx>{`
        .btn {
          border: 1px solid transparent;
          font-weight: 600;
          border-radius: 0.375em;
          cursor: pointer;
          transition-property: var(--transition-property-common);
          transition-duration: var(--transition-duration-normal);
          position: relative;
        }

        .btn::focus {
          outline-color: var(--ring-color);
        }

        .btn[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
          box-shadow: var(--shadows-none);
        }

        .bn--${color}-solid {
          background-color: var(${colorSchema[color].main});
          color: var(
            ${colorSchema[color].contrast === 'light'
              ? '--colors-black'
              : '--colors-white'}
          );
        }

        .bn--${color}-solid:hover {
          background-color: var(${colorSchema[color].dark});
        }

        .btn--${size} {
          height: var(${sizeSchema[size].height});
          min-width: var(${sizeSchema[size].width});
          font-size: var(${sizeSchema[size].fontSize});
          padding-inline-start: var(${sizeSchema[size].paddingInline});
          padding-inline-end: var(${sizeSchema[size].paddingInline});
        }

        .bn--${color}-outline {
          border-color: var(${colorSchema[color].main});
          color: var(${color === 'gray' ? 'inherit' : colorSchema[color].main});
          background-color: var(--colors-transparent);
        }

        .bn--${color}-ghost {
          border-color: var(--colors-transparent);
          background-color: var(--colors-transparent);
          color: var(${colorSchema[color].main});
        }

        .bn--${color}-ghost:hover::before, .bn--${color}-outline:hover::before {
          content: ' ';
          position: absolute;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(${colorSchema[color].dark});
          opacity: 0.1;
        }

        .bn--${color}-ghost:active::before,
          .bn--${color}-outline:active::before {
          opacity: 0.15;
        }
         {
          /* DARK MODE STYLES */
        }
        @media (prefers-color-scheme: dark) {
          .bn--${color}-outline {
            border-color: var(${colorSchema[color]?.light});
            color: var(
              ${color === 'gray' ? 'inherit' : colorSchema[color]?.light}
            );
            background-color: var(--colors-transparent);
          }
          .bn--${color}-ghost {
            border-color: var(--colors-transparent);
            background-color: var(--colors-transparent);
            color: var(${colorSchema[color]?.light});
          }
        }
      `}</style>
    </>
  )
}
