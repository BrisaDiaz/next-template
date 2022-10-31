import { ReactNode } from 'react'
import { defaultExtraStyles, ThemeMode, ExtraStyles } from '../../common/Props'
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

export type Color = keyof typeof colorSchema
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]

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
  extraStyles?: ExtraStyles
}
const generateStyles = () => {
  const sizeCss = Object.entries(sizeSchema)
    .map(
      (size) => `        
          .btn--${size[0]} {
          height: var(${size[1].height});
          min-width: var(${size[1].width});
          font-size: var(${size[1].fontSize});
          padding-inline-start: var(${size[1].paddingInline});
          padding-inline-end: var(${size[1].paddingInline});
        }`
    )
    .join(' ')

  const colorCss = Object.entries(colorSchema)
    .map((entry) => {
      const colorName = entry[0] as Color
      const colorRules = entry[1]
      const isGray = colorName === 'gray'
      return `
    
              .btn {
             --solid-${colorName}-bg: var(${colorRules.main});
             --solid-${colorName}-color: var(
            ${
              colorRules.contrast === 'light'
                ? '--colors-black'
                : '--colors-white'
            }
          );
          --solid-${colorName}-bg-hover: var(${colorRules.dark});
         --outline-${colorName}-color: var(${
        isGray ? '--colors-gray-600' : colorRules.dark
      });
          --ghost-${colorName}-color: var(--outline-${colorName}-color);
          }
        
      

        .btn--${colorName}-solid {
          background-color: var(--solid-${colorName}-bg);
          color: var(--solid-${colorName}-color);
        }

        .btn--${colorName}-solid:hover {
          background-color: var(--solid-${colorName}-bg-hover);
        }

        .btn--${colorName}-ghost {
          border-color: var(--colors-transparent);
          background-color: var(--colors-transparent);
          color: var(--ghost-${colorName}-color);
        }

       .btn--${colorName}-outline {
          border-color: var(--outline-${colorName}-color);
          color: var(--outline-${colorName}-color);
          background-color: var(--colors-transparent);
        } 

        .btn--${colorName}-ghost:hover::before,
          .btn--${colorName}-outline:hover::before {
          content: ' ';
          position: absolute;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--ghost-${colorName}-color);
          opacity: 0.1;
        }
    
        [data-theme='dark'] {
          --outline-${colorName}-color: var(${colorRules.light});
          --ghost-${colorName}-color: var(--outline-${colorName}-color);
        }
    `
    })
    .join(' ')

  const staticStyles = ` 
        .btn {
          font-weight: var(--fontWeights-semibold);
          cursor: pointer;
          transition-property: var(--transition-property-common);
          transition-duration: var(--transition-duration-normal);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--fontSizes-3xs);
          border-radius: var(--radii-md);
          border:1px solid transparent
        }
       .btn--icon {
          padding-inline-start: var(--space-2);
          padding-inline-end: var(--space-2);
        }
        .btn--icon-xs {
          padding-inline-start: 0;
          padding-inline-end: 0;
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
        .btn--rounded {
          border-radius: var(--radii-full);
        }

 
        
        `
  return ` ${sizeCss}  ${staticStyles} ${colorCss}`
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
  extraStyles = defaultExtraStyles,
  ...other
}: ButtonProps) {
  return (
    <>
      <button
        data-theme={themeMode}
        className={` btn btn--${size} ${
          isIconButton && size === 'xs'
            ? 'btn--icon-xs'
            : isIconButton
            ? 'btn--icon'
            : ' '
        } ${rounded ? 'btn--rounded' : ' '}  btn--${color}-${variant}  ${
          extraStyles.className
        } ${className ? className : ' '}`}
        {...other}
      >
        <>
          {startIcon} {children} {endIcon}
        </>
      </button>

      <style jsx>{`
        ${generateStyles()}
      `}</style>
      {extraStyles.styles}
    </>
  )
}
