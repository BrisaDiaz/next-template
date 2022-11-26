import React from 'react'

function Icon({
  size = '1rem',
  color = 'currentColor',
  ...other
}: {
  size?: string | number
  color?: string
} & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      {...other}
    >
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path>
      </g>
    </svg>
  )
}

export default Icon
