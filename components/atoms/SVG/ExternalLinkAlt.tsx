import React from 'react'

function Icon({ size = '1em', ...other }: { size?: string } & any) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...other}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path>
      </g>
    </svg>
  )
}

export default Icon
