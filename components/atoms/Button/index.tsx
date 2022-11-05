import { ReactNode, forwardRef, LegacyRef } from 'react'
import clsx from 'clsx'
import { CommonProps, defaultExtraStyles, Color } from '../../common/utils'

export const btnColorSchema = {
  whiteAlpha: {
    main: '--colors-whiteAlpha-600',
    dark: '--colors-whiteAlpha-700',
    darker: '--colors-whiteAlpha-800',
    light: '--colors-whiteAlpha-600',
    contrast: 'dark'
  },
  blackAlpha: {
    main: '--colors-blackAlpha-600',
    dark: '--colors-blackAlpha-700',
    darker: '--colors-blackAlpha-800',
    light: '--colors-blackAlpha-600',
    contrast: 'dark'
  },
  gray: {
    main: '--colors-gray-200',
    dark: '--colors-gray-300',
    darker: '--colors-gray-400',
    light: '--colors-gray-200',
    contrast: 'light'
  },
  red: {
    main: '--colors-red-600',
    dark: '--colors-red-700',
    darker: '--colors-red-800',
    light: '--colors-red-400',
    contrast: 'dark'
  },
  orange: {
    main: '--colors-orange-600',
    dark: '--colors-orange-700',
    darker: '--colors-orange-800',
    light: '--colors-orange-400',
    contrast: 'dark'
  },
  yellow: {
    main: '--colors-yellow-400',
    dark: '--colors-yellow-500',
    darker: '--colors-yellow-600',
    light: '--colors-yellow-300',
    contrast: 'light'
  },
  green: {
    main: '--colors-green-600',
    dark: '--colors-green-700',
    darker: '--colors-green-800',
    light: '--colors-green-400',
    contrast: 'dark'
  },
  teal: {
    main: '--colors-teal-600',
    dark: '--colors-teal-700',
    darker: '--colors-teal-800',
    light: '--colors-teal-400',
    contrast: 'dark'
  },
  blue: {
    main: '--colors-blue-600',
    dark: '--colors-blue-700',
    darker: '--colors-blue-800',
    light: '--colors-blue-400',
    contrast: 'dark'
  },
  purple: {
    main: '--colors-purple-600',
    dark: '--colors-purple-700',
    darker: '--colors-purple-800',
    light: '--colors-purple-400',
    contrast: 'dark'
  },
  pink: {
    main: '--colors-pink-600',
    dark: '--colors-pink-700',
    darker: '--colors-pink-800',
    light: '--colors-pink-400',
    contrast: 'dark'
  },
  cyan: {
    main: '--colors-cyan-400',
    dark: '--colors-cyan-500',
    darker: '--colors-cyan-600',
    light: '--colors-cyan-300',
    contrast: 'dark'
  },
  twitter: {
    main: '--colors-twitter-500',
    dark: '--colors-twitter-600',
    darker: '--colors-twitter-700',
    light: '--colors-twitter-500',
    contrast: 'light'
  },
  linkedin: {
    main: '--colors-linkedin-500',
    dark: '--colors-linkedin-600',
    darker: '--colors-linkedin-700',
    light: '--colors-linkedin-500',
    contrast: 'light'
  },
  facebook: {
    main: '--colors-facebook-500',
    dark: '--colors-facebook-600',
    darker: '--colors-facebook-700',
    light: '--colors-facebook-500',
    contrast: 'dark'
  },
  messenger: {
    main: '--colors-messenger-500',
    dark: '--colors-messenger-600',
    darker: '--colors-messenger-700',
    light: '--colors-messenger-500',
    contrast: 'light'
  },
  telegram: {
    main: '--colors-telegram-500',
    dark: '--colors-telegram-600',
    darker: '--colors-telegram-700',
    light: '--colors-telegram-500',
    contrast: 'light'
  },
  whatsapp: {
    main: '--colors-whatsapp-500',
    dark: '--colors-whatsapp-600',
    darker: '--colors-whatsapp-700',
    light: '--colors-whatsapp-500',
    contrast: 'light'
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

export type BtnColorSchema = keyof typeof btnColorSchema
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]

export type ExtraProps = {
  variant?: Variant
  size: Size
  colorSchema?: BtnColorSchema
  isIconButton?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  rounded?: boolean
}
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps &
  ExtraProps

const generateStyles = () => {
  const sizeCss = Object.entries(sizeSchema)
    .map(
      (size) => `        
          .btn-${size[0]} {
          height: var(${size[1].height});
          min-width: var(${size[1].width});
          font-size: var(${size[1].fontSize});
          padding-inline-start: var(${size[1].paddingInline});
          padding-inline-end: var(${size[1].paddingInline});
        }`
    )
    .join(' ')

  const colorCss = Object.entries(btnColorSchema)
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
           --solid-${colorName}-bg-active: var(${colorRules.darker});
         --outline-${colorName}-color: var(${
        isGray ? '--colors-gray-600' : colorRules.dark
      });
          --ghost-${colorName}-color: var(--outline-${colorName}-color);
          }
        
      

        .btn-${colorName}-solid {
          background-color: var(--solid-${colorName}-bg);
          color: var(--solid-${colorName}-color);
        }

        .btn-${colorName}-solid:hover {
          background-color: var(--solid-${colorName}-bg-hover);
        }
        .btn-${colorName}-solid:active {
          background-color: var(--solid-${colorName}-bg-active);
        }

        .btn-${colorName}-ghost {
          border-color: var(--colors-transparent);
          background-color: var(--colors-transparent);
          color: var(--ghost-${colorName}-color);
        }

       .btn-${colorName}-outline {
          border-color: var(--outline-${colorName}-color);
          color: var(--outline-${colorName}-color);
          background-color: var(--colors-transparent);  
        } 

        .btn-${colorName}-ghost:hover::before,
          .btn-${colorName}-outline:hover::before {
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

      .btn-${colorName}-ghost:active::before,
          .btn-${colorName}-outline:active::before {
          opacity: 0.2;
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
       .btn-icon {
          padding-inline-start: var(--space-2);
          padding-inline-end: var(--space-2);
        }
        .btn-icon-xs {
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
function Button(props: ButtonProps, ref?: LegacyRef<HTMLButtonElement>) {
  const {
    children,
    colorSchema = 'gray',
    variant = 'solid',
    size = 'md',
    isIconButton = false,
    startIcon,
    endIcon,
    rounded = false,
    themeMode = 'light',
    extraStyles = defaultExtraStyles,
    className,
    ...other
  } = props

  const buttonClassName = clsx(
    'btn',
    `btn-${size}`,
    { 'btn-icon-xs': isIconButton && size === 'xs' },
    { 'btn-icon': isIconButton },
    { 'btn-rounded': rounded },
    `btn-${colorSchema}-${variant}`,
    { [`${className}`]: className },
    extraStyles.className
  )
  return (
    <>
      <button
        data-theme={themeMode}
        className={` ${buttonClassName} `}
        {...other}
        ref={ref}
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
export default forwardRef(Button)
