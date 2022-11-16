import React from 'react'
import {
  BorderWidth,
  PaletteColor,
  CommonProps,
  theme,
  useCustomStyles
} from '@common/utils'
import clsx from 'clsx'

export const sizeSchema = {
  xs: '--sizes-3',
  sm: '--sizes-5',
  md: '--sizes-6',
  lg: '--sizes-8',
  xl: '--sizes-12'
}
export const variantSchema = [
  'solid',
  'donut',
  'donut-multi',
  'donut-multi',
  'ripple',
  'ripple-multi'
] as const
export type Size = keyof typeof sizeSchema
export type Variant = typeof variantSchema[number]

export type SpinnerExtraProps = {
  size?: Size
  color?: PaletteColor
  bgColor?: PaletteColor
  label?: string
  velocity?: string | number
  thickness?: BorderWidth
  variant?: Variant
}
export type SpinnerProps = SpinnerExtraProps &
  CommonProps &
  React.HTMLAttributes<HTMLDivElement>

export const defaultProps = {
  size: 'md' as Size,
  color: 'current' as PaletteColor,
  bgColor: 'transparent' as PaletteColor,
  label: 'Loading',
  velocity: '0.65',
  thickness: '2' as BorderWidth,
  variant: 'solid' as Variant
}
export default function Spinner({
  size = defaultProps.size,
  color = defaultProps.color,
  bgColor = defaultProps.bgColor,
  label = defaultProps.label,
  velocity = defaultProps.velocity,
  thickness = defaultProps.thickness,
  variant = defaultProps.variant,
  cs,
  className
}: SpinnerProps) {
  const extraStyles = useCustomStyles(cs)
  return (
    <>
      <div
        aria-label={label}
        role="status"
        className={clsx(
          extraStyles.className,
          'spinner',
          `spinner--${variant}`,
          {
            [`${className}`]: className
          }
        )}
      >
        {variant === 'ripple-multi'}
        <div />
      </div>
      <style jsx>{`
        .spinner {
          background: transparent;
          width: var(${sizeSchema[size]});
          height: var(${sizeSchema[size]});
          border-radius: ${theme.borderRadius.full};
          border: ${theme.border[thickness]};
        }

        .spinner--solid {
          border-color: var(--colors-${color});
          border-left-color: var(--colors-${bgColor});
          border-top-color: var(--colors-${bgColor});
          animation: rotate-center ${velocity}s linear infinite both;
        }
        .spinner--donut {
          border-color: var(--colors-${bgColor});
          border-left-color: var(--colors-${color});
          animation: rotate-center ${velocity}s linear infinite both;
        }

        .spinner--donut-multi {
          border-color: var(--colors-${color});
          border-left-color: var(--colors-${bgColor});
          border-right-color: var(--colors-${bgColor});
          animation: rotate-center ${velocity}s linear infinite both;
        }
        .spinner--ripple,
        .spinner--ripple-multi {
          border-color: var(--colors-${color});
          transform: translate(50%);
          animation: ${velocity}s ripple ease-out infinite;
        }
        .spinner--ripple-multi {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner--ripple-multi div {
          position: absolute;
          width: 75%;
          height: 75%;
          border: inherit;
          border-color: inherit;
          border-radius: inherit;
          animation: ${velocity}s ripple infinite;
        }
        .spinner--ripple-multi div:nth-child(2) {
          animation-delay: 0.5s;
        }

        @keyframes rotate-center {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 1;
          }

          to {
            transform: scale(1);
            opacity: 0;
          }
        }
        ${extraStyles.styles}
      `}</style>
    </>
  )
}
