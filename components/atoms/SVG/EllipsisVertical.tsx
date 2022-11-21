import React from 'react'

function Icon({ size = '1rem', ...other }: { size?: string } & any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 32 32"
      {...other}
    >
      <path d="M16 6a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"></path>
    </svg>
  )
}

export default Icon
