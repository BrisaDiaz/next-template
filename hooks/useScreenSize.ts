import useMediaQuery from './useMediaQuery'

export default function useScreenSize() {
  const screens = {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px'
    // => @media (min-width: 1536px) { ... }
  }
  const isXS = useMediaQuery(`(max-width: ${screens['sm']}) `)
  const isSM = useMediaQuery(`(min-width: ${screens['sm']}) `)
  const isMD = useMediaQuery(`(min-width: ${screens['md']}) `)
  const isLG = useMediaQuery(`(min-width: ${screens['lg']}) `)
  const isXL = useMediaQuery(`(min-width: ${screens['xl']}) `)
  const is2XL = useMediaQuery(`(min-width: ${screens['2xl']}) `)

  return { isXS, isSM, isMD, isLG, isXL, is2XL }
}
