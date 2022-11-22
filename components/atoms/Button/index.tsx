import { ReactNode, forwardRef, LegacyRef } from 'react'
import clsx from 'clsx'
import { CommonProps, useCustomStyles, theme } from '@common/utils'
import Spinner, { SpinnerProps } from '../Spinner'
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
export const variantSchema = ['solid', 'ghost', 'outline', 'link'] as const

export type BtnColorSchema = keyof typeof btnColorSchema
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]

export type ExtraProps = {
  variant?: Variant
  size?: Size
  colorSchema?: BtnColorSchema
  isIconButton?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  rounded?: boolean
  isLoading?: boolean
  loadingText?: string
  spinnerProps?: SpinnerProps
}
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps &
  ExtraProps

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
    isLoading,
    loadingText,
    className,
    spinnerProps,
    cs,
    ...other
  } = props
  const extraStyles = useCustomStyles(cs)

  const buttonClassName = clsx(
    extraStyles.className,
    'root',
    'btn',
    `btn-${size}`,
    { 'icon-btn': isIconButton },
    { 'icon-btn-xs': isIconButton && size === 'xs' },
    { 'btn-rounded': rounded },
    `btn-${colorSchema}-${variant}`,
    { [`${className}`]: className }
  )

  return (
    <>
      <button
        data-theme={themeMode}
        className={` ${buttonClassName} `}
        disabled={isLoading}
        {...other}
        ref={ref}
      >
        <>
          {startIcon} {children} {endIcon}
          {isLoading ? (
            <span className="loading-indicator ">
              <Spinner size={'sm'} {...spinnerProps} />
              {loadingText ? loadingText : ''}
            </span>
          ) : (
            <></>
          )}
        </>
      </button>

      <style jsx>{`
        .btn {
          font-weight: var(--fontWeights-semibold);
          cursor: pointer;
          transition-property: var(--transition-property-common);
          transition-duration: var(--transition-duration-normal);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--fontSizes-2xs);
          border-radius: var(--radii-md);
          border: 1px solid transparent;
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
       
       .loading-indicator{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:inherit;
        background-color:inherit;
        gap:inherit;
       padding-left:inherit;
       padding-right:inherit;
       height: 104%;
       min-width:100%;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       }
     
        .btn-${size} {
          min-height: var(${sizeSchema[size].height});
          min-width: var(${sizeSchema[size].width});
          font-size: var(${sizeSchema[size].fontSize});
          padding-inline-start: var(${sizeSchema[size].paddingInline});
          padding-inline-end: var(${sizeSchema[size].paddingInline});
          
        }
        .icon-btn{
          padding-inline-start: var(--spaces-1);
          padding-inline-end: var(--spaces-1);
       }
       .icon-btn-xs{
          padding-inline-start: var(--spaces-nones);
          padding-inline-end: var(--spaces-nones);
       }
        .btn-rounded{
         border-radius:${theme.borderRadius.full}
       }
      .btn {
        --solid-${colorSchema}-bg: var(${btnColorSchema[colorSchema].main});
        --solid-${colorSchema}-color: var(
            ${
              btnColorSchema[colorSchema].contrast === 'light'
                ? '--colors-black'
                : '--colors-white'
            }
          );
       --solid-${colorSchema}-bg-hover: var(${
        btnColorSchema[colorSchema].dark
      });
       --solid-${colorSchema}-bg-active: var(${
        btnColorSchema[colorSchema].darker
      });
         --non-solid-${colorSchema}-color: var(${
        colorSchema === 'gray'
          ? '--colors-gray-600'
          : btnColorSchema[colorSchema].dark
      });
        --link-${colorSchema}-color-active:  var(${
        btnColorSchema[colorSchema].darker
      })
 
          }
        
        .btn-${colorSchema}-solid {
          background-color: var(--solid-${colorSchema}-bg);
          color: var(--solid-${colorSchema}-color);
        }

        .btn-${colorSchema}-solid:hover {
          background-color: var(--solid-${colorSchema}-bg-hover);
        }
        .btn-${colorSchema}-solid:active {
          background-color: var(--solid-${colorSchema}-bg-active);
        }

        .btn-${colorSchema}-ghost {
          border-color: var(--colors-transparent);
          background-color: var(--colors-transparent);
          color: var(--non-solid-${colorSchema}-color);
        }

       .btn-${colorSchema}-outline {
          border-color: var(--non-solid-${colorSchema}-color);
          color: var(--non-solid-${colorSchema}-color);
          background-color: var(--colors-transparent);  
        } 

        .btn-${colorSchema}-ghost:hover::before,
          .btn-${colorSchema}-outline:hover::before {
          content: ' ';
          position: absolute;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--non-solid-${colorSchema}-color);
          opacity: 0.1;
        }

      .btn-${colorSchema}-ghost:active::before,
          .btn-${colorSchema}-outline:active::before {
          opacity: 0.2;
        }
        .btn-${colorSchema}-link{
           color: var(--non-solid-${colorSchema}-color);
           background:transparent
        }
        .btn-${colorSchema}-link:hover,.btn-${colorSchema}-link:active{
          text-decoration: underline;
           text-decoration-thickness: from-font;
           text-underline-offset: 2px;
        }
        .btn-${colorSchema}-link:active{
           color: var(--link-${colorSchema}-color-active);
        }
        [data-theme='dark'] {
          --non-solid-${colorSchema}-color: var(${
        btnColorSchema[colorSchema].light
      });
        --link-${colorSchema}-color-active:  var(${
        colorSchema === 'gray'
          ? btnColorSchema[colorSchema].darker
          : btnColorSchema[colorSchema].main
      })
        }
       
        ${extraStyles.styles}

      `}</style>
    </>
  )
}
export default forwardRef(Button)
