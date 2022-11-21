import React from 'react'

function Icon({ size = '1rem', ...other }: { size?: string } & any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="icon"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...other}
    >
      <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
    </svg>
  )
}

export default Icon
