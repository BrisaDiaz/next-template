import React, { forwardRef, useState, Children, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import { Flex, Block, BlockProps } from '@components/atoms/Box'
import { User } from '@components/atoms/SVG'
import clsx from 'clsx'
import {
  PaletteColor,
  theme,
  CommonProps,
  useCustomStyles,
  combineCustomStyles
} from '@common/utils'
export const sizeSchema = {
  '2xs': { size: theme.size['4'], icon: ' 0.5rem' },
  xs: { size: theme.size['6'], icon: '0.75rem' },
  sm: { size: theme.size['8'], icon: '1rem' },
  md: { size: theme.size['12'], icon: '1.5rem' },
  lg: { size: theme.size['16'], icon: '2rem' },
  xl: { size: theme.size['24'], icon: '3rem' },
  '2xl': { size: theme.size['32'], icon: '4rem' }
}
export const variantSchema = {
  circular: {
    borderRadius: theme.borderRadius['full']
  },
  rounded: {
    borderRadius: theme.borderRadius['base']
  },
  rectangular: {
    borderRadius: theme.borderRadius['none']
  }
}

export type Variant = keyof typeof variantSchema
export type Size = keyof typeof sizeSchema
export type AvatarProps = {
  size?: Size
  bgColor?: PaletteColor
  color?: PaletteColor
  variant?: Variant
  imageProps?: Omit<ImageProps, 'src'>
  icon?: React.ReactNode
  src?: string
  name?: string
  badge?: ReactNode
} & CommonProps
export const defaultValues = {
  size: 'md' as Size,
  bgColor: 'gray-300' as PaletteColor,
  color: 'gray-900' as PaletteColor,
  variant: 'circular' as Variant
}
export function getInitials(string?: string) {
  if (!string) return ''

  let initials = ''

  const words = string.split(' ')

  for (const word of words) {
    if (word) initials += word[0].toUpperCase()
  }
  return initials
}
function AvatarComponent(
  props: AvatarProps,
  ref?: React.LegacyRef<HTMLDivElement>
) {
  const {
    size = defaultValues.size,
    bgColor,
    variant = defaultValues.variant,
    themeMode = 'light',
    name,
    icon,
    color,
    src,
    className,
    cs,
    badge,
    imageProps,
    ...other
  } = props
  const [isError, setIsError] = useState(!src ? true : false)
  const [isLoad, setIsLoad] = useState(false)
  const setError = () => {
    setIsError(true)
  }
  const setLoad = () => {
    setIsLoad(true)
  }

  const nameInitials = getInitials(name)

  const layout = imageProps?.width && imageProps?.height ? 'intrinsic' : 'fill'

  const extraStyles = useCustomStyles(cs)

  const isFallbackVisible = isError || !isLoad
  return (
    <>
      <div
        data-testid="avatar"
        {...other}
        data-theme={themeMode}
        className={clsx(
          extraStyles.className,
          'root',
          'avatar',
          { 'avatar-fallback': isFallbackVisible },
          {
            [`${className}`]: className
          }
        )}
        ref={ref}
      >
        {!isError && (
          <span className="avatar-img">
            <Image
              data-testid="avatar-img"
              src={src || ''}
              alt={name || 'user avatar'}
              layout={layout}
              {...imageProps}
              objectFit="cover"
              onError={setError}
              onLoad={setLoad}
            />
          </span>
        )}
        {isFallbackVisible && nameInitials && (
          <span className="name-initials">{nameInitials}</span>
        )}
        {isFallbackVisible && !nameInitials && (
          <span className="avatar-svg">
            {icon || <User data-testid="user-icon" />}
          </span>
        )}
        {badge}
      </div>

      <style jsx>{`
        .avatar {
          --bg-color: var(--colors-${bgColor || defaultValues.bgColor});
          --color: var(--colors-${color || defaultValues.color});
        }
        .avatar[data-theme='dark'] {
          --bg-color: var(--colors-${bgColor || 'whiteAlpha-400'});
          --color: var(--colors-${color || 'whiteAlpha-900'});
        }
        .avatar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${sizeSchema[size].size};
          height: ${sizeSchema[size].size};
          border-color: transparent;
          background-color: transparent;
          border-radius: ${variantSchema[variant].borderRadius};
        }

        .avatar-fallback::after {
          content: ' ';
          background-color: var(--bg-color);
          color: var(--color);
          border-radius: inherit;

          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          align-items: center;
          justify-content: center;
        }
        .avatar-svg,
        .name-initials {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          z-index: 1;
          align-items: center;
          justify-content: center;
          font-size: ${sizeSchema[size].icon};
          color: var(--color);
        }
        .name-initials {
          text-transform: 'uppercase';
          font-size: calc(${sizeSchema[size].size}*0.35);
        }
        .avatar-img {
          position: relative;
          border-radius: inherit;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        ${extraStyles.styles}
      `}</style>
    </>
  )
}
const Avatar = forwardRef(AvatarComponent)
export default Avatar
export type AvatarGroupProps = {
  noItems?: number
  children?: ReactNode
  size?: Size
  inset?: string
} & CommonProps
export const avatarGroupDefaultValues = {
  inset: '-0.7rem',
  size: 'md' as Size
}
function AvatarGroupComponent(props: AvatarGroupProps, ref?: any) {
  const {
    children,
    size = avatarGroupDefaultValues.size,
    themeMode,
    inset = avatarGroupDefaultValues.inset,
    noItems = Infinity,
    ...other
  } = props
  const arrayChildren = Children.toArray(children)
  const isHidden = (index: number) => index + 1 > noItems
  const hiddenItemsCount =
    noItems === Infinity || noItems > arrayChildren.length
      ? 0
      : arrayChildren.length - noItems

  return (
    <Flex
      {...other}
      themeMode={themeMode}
      ref={ref}
      cs={{
        selector: ' .avatar',
        css: {
          mr: inset,
          border: theme.border['2'],
          borderColor: theme.body.bgColor
        }
      }}
      flexDirection="row"
    >
      {Children.map(arrayChildren, (child, index) =>
        isHidden(index) ? (
          <></>
        ) : (
          React.cloneElement(child as React.ReactElement, {
            size,
            themeMode,
            cs: {
              css: {
                zIndex: -index
              }
            }
          })
        )
      )}
      {hiddenItemsCount ? (
        <Avatar
          data-testid="hidden-avatars-count"
          size={size}
          name={`+ ${hiddenItemsCount}`}
          themeMode={themeMode}
          cs={{
            css: {
              zIndex: -arrayChildren.length
            }
          }}
        />
      ) : (
        <></>
      )}
    </Flex>
  )
}
export const AvatarGroup = forwardRef(AvatarGroupComponent)
export type AvatarBadgeProps = {
  size?: string
  borderColor?: PaletteColor
  bgColor?: PaletteColor
} & BlockProps
function AvatarBadgeComponent(
  props: AvatarBadgeProps,
  ref?: React.Ref<unknown>
) {
  const {
    size = '1.2em',
    borderColor,
    bgColor = 'green-500',
    className,

    cs,
    ...other
  } = props
  return (
    <Block
      {...other}
      ref={ref}
      className={clsx('root', 'avatar-badge', {
        [`${className}`]: className
      })}
      cs={combineCustomStyles(
        {
          css: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 0,
            right: 0,
            transform: 'translate(25%, 25%)',
            zIndex: theme.zIndex.sticky,
            width: size,
            height: size,
            borderRadius: theme.borderRadius.full,
            border: '0.2em solid',
            borderColor: borderColor
              ? theme.paletteColor[borderColor]
              : theme.body.bgColor,
            bgColor: theme.paletteColor[bgColor]
          }
        },
        cs
      )}
    />
  )
}

export const AvatarBadge = forwardRef(AvatarBadgeComponent)
