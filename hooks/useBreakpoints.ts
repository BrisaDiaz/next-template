import useWindowSize from './useWindowSize'

const defaultBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const
type BreakpointsSchema = typeof defaultBreakpoints
type Breakpoint = keyof typeof defaultBreakpoints
export default function useScreenSize(customBreakpoints?: BreakpointsSchema) {
  const { width } = useWindowSize()

  const breakpoints = customBreakpoints || defaultBreakpoints

  const valuesEqual = {
    xs: width < breakpoints['sm'],
    sm: width < breakpoints['sm'],
    md: width >= breakpoints['sm'] && width < breakpoints['md'],
    lg: width >= breakpoints['md'] && width < breakpoints['lg'],
    xl: width >= breakpoints['xl'] && width < breakpoints['2xl'],
    '2xl': width >= breakpoints['2xl']
  }

  const up = (breakpoint: Breakpoint | number) => {
    if (typeof breakpoint === 'number') return width >= breakpoint
    return width >= breakpoints[breakpoint]
  }
  const down = (breakpoint: Breakpoint | number) => {
    if (typeof breakpoint === 'number') return width < breakpoint
    return width < breakpoints[breakpoint]
  }
  const equal = (breakpoint: Breakpoint | number) => {
    if (typeof breakpoint === 'number') return width === breakpoint
    return valuesEqual[breakpoint]
  }
  const not = (breakpoint: Breakpoint | number) => {
    if (typeof breakpoint === 'number') return width !== breakpoint
    return !valuesEqual[breakpoint]
  }
  const between = (
    fromBreakpoint: Breakpoint | number,
    toBreakpoint: Breakpoint | number
  ) => {
    let start = 0
    let end = 0
    if (typeof fromBreakpoint === 'number') {
      start = fromBreakpoint
    } else {
      start = breakpoints[fromBreakpoint]
    }
    if (typeof toBreakpoint === 'number') {
      end = toBreakpoint
    } else {
      end = breakpoints[toBreakpoint]
    }

    return width >= start && width < end
  }
  return { equal, up, between, down, not }
}
