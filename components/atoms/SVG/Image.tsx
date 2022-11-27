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
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1098 1024"
      aria-hidden="true"
      fill={color}
      {...other}
    >
      <path d="M365.714 329.143q0 45.714-32.036 77.678T256 438.857t-77.678-32.036-32.036-77.678 32.036-77.678T256 219.43t77.678 32.036 32.036 77.678zM950.857 548.57v256H146.286V694.857L329.143 512l91.428 91.429 292.572-292.572zm54.857-402.285H91.43q-7.461 0-12.874 5.412t-5.412 12.873V859.43q0 7.46 5.412 12.873t12.874 5.412h914.285q7.46 0 12.873-5.412t5.413-12.873V164.57q0-7.46-5.413-12.873t-12.873-5.412zm91.429 18.285V859.43q0 37.741-26.844 64.585t-64.585 26.843H91.43q-37.742 0-64.586-26.843T0 859.429V164.57q0-37.741 26.843-64.585T91.43 73.143h914.285q37.742 0 64.585 26.843t26.844 64.585z"></path>
    </svg>
  )
}

export default Icon
