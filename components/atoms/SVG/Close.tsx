import React from 'react'

function Icon({
  size = '1em',
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
      fill={color}
      {...other}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  )
}

export default Icon
