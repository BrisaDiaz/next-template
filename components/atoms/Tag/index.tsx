import React, { forwardRef, ReactNode } from 'react'
import { CommonProps, useCustomStyles } from '@common/utils'
import clsx from 'clsx'
import { Close, Delete } from '@components/atoms/SVG'
import CSS from 'csstype'

export const tagColorSchema = {
  whiteAlpha: {
    main: 'var(--colors-whiteAlpha-800)',
    subtle: 'var(--colors-whiteAlpha-100)',
    light: 'var(--colors-whiteAlpha-200)',
    contrast: 'light'
  },
  blackAlpha: {
    main: 'var(--colors-blackAlpha-800)',
    subtle: 'var(--colors-blackAlpha-100)',
    light: 'var(--colors-blackAlpha-200)',
    contrast: 'dark'
  },
  gray: {
    main: 'var(--colors-gray-800)',
    subtle: 'var(--colors-gray-200)',
    light: 'var(--colors-gray-100)',
    contrast: 'dark'
  },
  red: {
    main: 'var(--colors-red-800)',
    subtle: 'var(--colors-red-100)',
    light: 'var(--colors-red-200)',
    contrast: 'dark'
  },
  orange: {
    main: 'var(--colors-orange-800)',
    subtle: 'var(--colors-orange-100)',
    light: 'var(--colors-orange-200)',
    contrast: 'dark'
  },
  yellow: {
    main: 'var(--colors-yellow-800)',
    subtle: 'var(--colors-yellow-100)',
    light: 'var(--colors-yellow-200)',
    contrast: 'dark'
  },
  green: {
    main: 'var(--colors-green-800)',
    subtle: 'var(--colors-green-100)',
    light: 'var(--colors-green-200)',
    contrast: 'dark'
  },
  teal: {
    main: 'var(--colors-teal-800)',
    subtle: 'var(--colors-teal-100)',
    light: 'var(--colors-teal-200)',
    contrast: 'dark'
  },
  blue: {
    main: 'var(--colors-blue-800)',
    subtle: 'var(--colors-blue-100)',
    light: 'var(--colors-blue-200)',
    contrast: 'dark'
  },
  purple: {
    main: 'var(--colors-purple-800)',
    subtle: 'var(--colors-purple-100)',
    light: 'var(--colors-purple-200)',
    contrast: 'dark'
  },
  pink: {
    main: 'var(--colors-pink-800)',
    subtle: 'var(--colors-pink-100)',
    light: 'var(--colors-pink-200)',
    contrast: 'dark'
  },
  cyan: {
    main: 'var(--colors-cyan-800)',
    subtle: 'var(--colors-cyan-100)',
    light: 'var(--colors-cyan-200)',
    contrast: 'dark'
  },
  twitter: {
    main: 'var(--colors-twitter-800)',
    subtle: 'var(--colors-twitter-100)',
    light: 'var(--colors-twitter-200)',
    contrast: 'dark'
  },
  linkedin: {
    main: 'var(--colors-linkedin-800)',
    subtle: 'var(--colors-linkedin-100)',
    light: 'var(--colors-linkedin-200)',
    contrast: 'dark'
  },
  facebook: {
    main: 'var(--colors-facebook-800)',
    subtle: 'var(--colors-facebook-100)',
    light: 'var(--colors-facebook-200)',
    contrast: 'dark'
  },
  messenger: {
    main: 'var(--colors-messenger-800)',
    subtle: 'var(--colors-messenger-100)',
    light: 'var(--colors-messenger-200)',
    contrast: 'dark'
  },
  telegram: {
    main: 'var(--colors-telegram-800)',
    subtle: 'var(--colors-telegram-100)',
    light: 'var(--colors-telegram-200)',
    contrast: 'dark'
  },
  whatsapp: {
    main: 'var(--colors-whatsapp-800)',
    subtle: 'var(--colors-whatsapp-100)',
    light: 'var(--colors-whatsapp-200)',
    contrast: 'dark'
  }
}

export type Size = 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorSchema = keyof typeof tagColorSchema
export type Variant = 'solid' | 'subtle' | 'outline'
export type TagProps = {
  colorSchema?: ColorSchema
  variant?: Variant
  size?: Size
  rounded?: boolean
  clickable?: boolean
  deletable?: boolean
  deleteIcon?: ReactNode
  icon?: ReactNode
  avatar?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  label?: string
  transform?: CSS.Property.TextTransform
  onDelete?: () => void
  onClick?: () => void
} & React.HTMLAttributes<HTMLSpanElement> &
  CommonProps
export const defaultValues = {
  variant: 'subtle' as Variant,
  colorSchema: 'gray' as ColorSchema,
  size: 'inherit' as Size,
  rounded: false,
  clickable: false,
  deletable: false,
  transform: 'none'
}
function Tag(props: TagProps, ref?: React.LegacyRef<HTMLSpanElement>) {
  const {
    variant = defaultValues.variant,
    colorSchema = defaultValues.colorSchema,
    size = defaultValues.size,
    rounded = defaultValues.rounded,
    clickable = defaultValues.clickable,
    deletable = defaultValues.deletable,
    transform = defaultValues.transform,
    onDelete,
    onKeyDown,
    deleteIcon,
    themeMode = 'light',
    label,
    avatar,
    icon,
    onClick,
    cs,
    ...other
  } = props

  const dynamicProps = clickable
    ? {
        tabIndex: 0,
        role: 'button',
        onClick: () => onClick && onClick(),
        onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => handleKeyDown(e)
      }
    : {}
  const DeleteIcon = deleteIcon ? deleteIcon : rounded ? <Delete /> : <Close />
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete && onDelete()
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    onKeyDown && onKeyDown(e)
    if (e.code === 'Enter') {
      onClick && onClick()
    }
  }
  const palette = tagColorSchema[colorSchema]
  const extraStyles = useCustomStyles(cs)
  return (
    <>
      <span
        {...dynamicProps}
        {...other}
        data-theme={themeMode}
        ref={ref}
        className={clsx(
          'root',
          extraStyles.className,
          'tag',
          `tag-${variant}`,
          `tag-${size}`,
          {
            rounded: rounded
          },
          {
            clickable: clickable
          }
        )}
      >
        {!avatar && icon}
        {avatar &&
          React.cloneElement(avatar, {
            cs: [
              {
                css: {
                  width: '1.5em',
                  height: '1.5em'
                }
              },
              {
                selector: ' .avatar-svg',
                css: {
                  fontSize: '1em'
                }
              },
              {
                selector: ' .name-initials',
                css: {
                  fontSize: '0.75em'
                }
              }
            ]
          })}
        <span className="label">{label}</span>
        {deletable && (
          <button
            className="delete-icon"
            onClick={handleDelete}
            aria-label="delete tag"
          >
            {DeleteIcon}
          </button>
        )}
      </span>
      <style jsx>{`
        .root {
          --solid-color: var(
            ${palette.contrast === 'dark'
              ? ' --colors-whiteAlpha-900'
              : '--colors-gray-800'}
          );
          --solid-bg: ${palette.main};
          --no-solid-color: ${palette.main};
          --no-solid-bg: ${palette.subtle};
        }
        .root[data-theme='dark'] {
          --no-solid-bg: ${palette.light};
          --no-solid-color: ${palette.light};
        }
        .label {
          margin: 0 0.4rem;
          text-transform: ${transform};
        }
        .tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          border-radius: var(--radii-sm);
          line-height: var(--lineHeights-none);
          padding-bottom: var(--space-0-5);
          padding-inline-start: var(--space-1);
          padding-inline-end: var(--space-1);
          line-height: 1.1em;
        }
        .rounded {
          border-radius: var(--radii-full);
        }
        .clickable {
          cursor: pointer;
        }
        .tag-solid {
          background-color: var(--solid-bg);
          color: var(--solid-color);
        }
        svg {
          margin: 0 0.25em;
        }
        .tag:focus-visible {
          outline-offset: var(--ring-offset-width);
          outline: 3px solid var(--ring-color);
        }
        .tag-subtle,
        .tag-outline {
          background-color: transparent;
          color: var(--no-solid-color);
        }
        .tag-subtle::before {
          content: ' ';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          background-color: var(--no-solid-bg);
          z-index: -1;
          border-radius: inherit;
        }

        .tag-subtle[data-theme='dark']::before {
          opacity: 0.16;
        }

        .tag-outline {
          border: var(--borders-1px);
          background-color: transparent;
          border-color: var(
            ${colorSchema === 'gray' ? '--no-solid-bg' : '--no-solid-color'}
          );
        }
        .tag-${size} {
          padding-bottom: var(
            ${size === 'inherit' ? '--space-0-5' : 'var(--space-1'}
          );
          padding-top: var(
            ${size === 'inherit' ? '--space-0-5' : 'var(--space-1'}
          );
          font-size: var(
            ${size === 'inherit' ? 'inherit' : `--fontSizes-${size}`}
          );
          padding-inline-start: var(--space-1);
          padding-inline-end: var(--space-1);
        }
        .delete-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: var(--transition-property-colors);
          transition-timing-function: var(--transition-easing-ease-in-out);
          transition-duration: var(--transition-duration-normal);
          font-size: 1.3em;
          padding: 0;
          border: none;
          cursor: pointer;
          background-color: transparent;
          border-radius: inherit;
          color: inherit;
        }
        .delete-icon:focus-visible,
        .delete-icon:hover {
          opacity: 0.8;
        }
        .delete-icon:focus-visible {
          outline: 2px solid var(--ring-color);
        }
        ${extraStyles.styles}
      `}</style>
    </>
  )
}
export default forwardRef(Tag)
