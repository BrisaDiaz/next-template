import useWindowSize from './useWindowSize'

const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

export type BreakpointsSchema = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}
export type Breakpoint = keyof typeof defaultBreakpoints
export default function useScreenSize(customBreakpoints?: BreakpointsSchema) {
  const { width } = useWindowSize()

  const breakpoints = customBreakpoints || defaultBreakpoints

  const rangeMarches = {
    xs: width < breakpoints['sm'],
    sm: width >= breakpoints['sm'] && width < breakpoints['md'],
    md: width >= breakpoints['md'] && width < breakpoints['lg'],
    lg: width >= breakpoints['lg'] && width < breakpoints['xl'],
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
    return width === breakpoints[breakpoint]
  }
  const unequal = (breakpoint: Breakpoint | number) => {
    if (typeof breakpoint === 'number') return width !== breakpoint
    return width !== breakpoints[breakpoint]
  }
  const not = (breakpoint: Breakpoint) => {
    return !rangeMarches[breakpoint]
  }
  const only = (breakpoint: Breakpoint) => {
    return rangeMarches[breakpoint]
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
  return { equal, unequal, up, between, down, not, only }
}
