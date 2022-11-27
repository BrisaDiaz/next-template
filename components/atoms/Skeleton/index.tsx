import { forwardRef, Ref } from 'react'
import clsx from 'clsx'
import { Image as ImageIcon, User } from '@components/atoms/SVG'
import {
  Variant,
  variantSchema,
  Size as AvatarSize,
  sizeSchema as avatarSizeSchema,
  getInitials
} from '@components/atoms/Avatar'
import {
  PaletteColor,
  theme,
  CommonProps,
  useCustomStyles,
  combineCustomStyles,
  Space
} from '@common/utils'

export const animationSchema = {
  none: 'ease 0s 1 normal none running fade-animation',
  pulse: 'linear 0s infinite alternate none running pulse-animation',
  wave: 'wave-animation infinite'
}
export type Animation = keyof typeof animationSchema
export type SkeletonProps = {
  startColor?: PaletteColor
  endColor?: PaletteColor
  height?: string
  width?: string
  speed?: number
  fadeDuration?: number
  isLoading?: boolean
  animation?: Animation
  variant?: Variant
} & CommonProps &
  React.HTMLAttributes<HTMLDivElement>
export const defaultValues = {
  startColor: 'gray-100' as PaletteColor,
  endColor: 'gray-400' as PaletteColor,
  width: '100%',
  height: 'auto',
  speed: 0.8,
  fadeDuration: 0.4,
  animation: 'wave' as Animation,
  isLoading: true,
  variant: 'rounded' as Variant
}

function SkeletonComponent(props: SkeletonProps, ref?: Ref<HTMLDivElement>) {
  const {
    startColor = defaultValues.startColor,
    endColor = defaultValues.endColor,
    width = defaultValues.width,
    height = defaultValues.height,
    speed = defaultValues.speed,
    fadeDuration = defaultValues.fadeDuration,
    isLoading = defaultValues.isLoading,
    animation = defaultValues.animation,
    variant = defaultValues.variant,
    themeMode,
    cs,
    className,
    ...other
  } = props
  const animationStyle =
    isLoading === false ? animationSchema.none : animationSchema[animation]
  const animationSpeed = isLoading === false ? fadeDuration : speed
  const extraStyles = useCustomStyles(cs)
  return (
    <>
      <div
        data-theme={themeMode}
        aria-hidden={isLoading ? true : false}
        {...other}
        className={clsx(
          extraStyles.className,
          'root',
          'skeleton',
          `skeleton-${animation}`,
          {
            [`${className}`]: className
          }
        )}
        ref={ref}
      />
      <style jsx>{`
        .skeleton {
          position: relative;
          overflow: hidden;
          width: ${width};
          height: ${height};
          border-radius: ${variantSchema[variant].borderRadius};
          color: ${isLoading ? 'transparent' : 'currentColor'};
        }
        .skeleton-pulse {
          border-color: ${theme.paletteColor[endColor]};
          animation: ${animationStyle};
          animation-duration: ${animationSpeed}s;
        }
        .skeleton-none,
        .skeleton-wave {
          border-color: ${isLoading
            ? theme.paletteColor[endColor]
            : 'transparent'};
          background: ${isLoading
            ? theme.paletteColor[endColor]
            : 'transparent'};
        }
        .skeleton-wave::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: ${animationStyle};
          animation-duration: ${animationSpeed}s;
          content: '';
        }
        @keyframes pulse-animation {
          0% {
            border-color: ${theme.paletteColor[startColor]};
            background: ${theme.paletteColor[startColor]};
          }
          100% {
            border-color: ${theme.paletteColor[endColor]};
            background: ${theme.paletteColor[endColor]};
          }
        }
        @keyframes wave-animation {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fade-animation {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        ${extraStyles.styles}
      `}</style>
    </>
  )
}
const Skeleton = forwardRef(SkeletonComponent)
export const textSizeSchema = {
  xs: {
    height: '1.125rem'
  },
  sm: {
    height: '1.313rem'
  },
  md: {
    height: '1.5rem'
  },
  lg: {
    height: '1.688rem'
  },
  xl: {
    height: '1.875rem'
  },
  '2xl': {
    height: '2.25rem'
  },
  '3xl': {
    height: '2.813rem'
  },
  '4xl': {
    height: '3.375rem'
  },
  '5xl': {
    height: '4.5rem'
  },
  '6xl': {
    height: '5.625rem'
  }
}
export type TextSize = keyof typeof textSizeSchema
export const textDefaultValues = {
  size: 'md' as TextSize,
  noOfLines: 1,
  spacing: '2' as Space
}
export type TextSkeletonProps = SkeletonProps & {
  size?: TextSize
  noOfLines?: number
  spacing?: Space
}
function TextSkeletonComponent(
  props: TextSkeletonProps,
  ref?: Ref<HTMLDivElement>
) {
  const {
    size = textDefaultValues.size,
    noOfLines = textDefaultValues.noOfLines,
    spacing = textDefaultValues.spacing,
    height,
    className,
    cs,
    ...other
  } = props
  const childrenArray = new Array(noOfLines).fill(1)

  return (
    <>
      {childrenArray.map((child, index) => (
        <Skeleton
          {...other}
          key={index}
          className={clsx('image', {
            [`${className}`]: className
          })}
          ref={ref}
          cs={combineCustomStyles(
            { css: { mt: 0 === index ? 0 : theme.space[spacing] } },
            cs
          )}
          height={height || textSizeSchema[size].height}
        />
      ))}
    </>
  )
}
export const TextSkeleton = forwardRef(TextSkeletonComponent)
export type ImageSkeletonProps = SkeletonProps & {
  iconSize?: string
  size?: string
  icon?: React.ReactNode
  color?: PaletteColor
}
export const imageDefaultValues = {
  size: '100px',
  variant: 'rectangular' as Variant,
  color: 'gray-700' as PaletteColor
}
function ImageSkeletonComponent(
  props: ImageSkeletonProps,
  ref?: Ref<HTMLDivElement>
) {
  const {
    iconSize,
    size = imageDefaultValues.size,
    width,
    height,
    variant = imageDefaultValues.variant,
    color = imageDefaultValues.color,
    icon,
    children,
    className,
    cs,
    ...other
  } = props

  return (
    <Skeleton
      {...other}
      className={clsx('image', {
        [`${className}`]: className
      })}
      ref={ref}
      variant={variant}
      width={width || size}
      height={height || size}
      cs={combineCustomStyles(
        [
          {
            css: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.paletteColor[color],
              textTransform: 'uppercase',
              fontSize: `calc(${size || width}*0.4)`
            }
          },
          {
            selector: ' svg',
            css: {
              fontSize: iconSize || `calc(${size || width}/2)`
            }
          }
        ],
        cs
      )}
    >
      {children}
      {icon && !children ? (
        icon
      ) : !children ? (
        children || <ImageIcon data-testid="image-icon" />
      ) : (
        <></>
      )}
    </Skeleton>
  )
}
export const ImageSkeleton = forwardRef(ImageSkeletonComponent)

export type AvatarSkeletonProps = Omit<ImageSkeletonProps, 'size'> & {
  size?: AvatarSize
  children?: string
}
export const avatarDefaultValues = {
  size: 'md' as AvatarSize,

  variant: 'circular' as Variant,
  color: 'gray-700' as PaletteColor
}
function AvatarSkeletonComponent(
  props: AvatarSkeletonProps,
  ref?: Ref<HTMLDivElement>
) {
  const {
    icon,
    iconSize,
    className,
    size = avatarDefaultValues.size,
    variant = avatarDefaultValues.variant,
    color = avatarDefaultValues.color,
    children,
    ...other
  } = props

  return (
    <ImageSkeleton
      {...other}
      className={clsx('avatar', {
        [`${className}`]: className
      })}
      iconSize={iconSize || avatarSizeSchema[size].icon}
      size={avatarSizeSchema[size].size}
      variant={variant}
      color={color}
      icon={icon ? icon : <User data-testid="user-icon" />}
      ref={ref}
    >
      {children ? getInitials(children) : children}
    </ImageSkeleton>
  )
}

export const AvatarSkeleton = forwardRef(AvatarSkeletonComponent)

export default Skeleton
