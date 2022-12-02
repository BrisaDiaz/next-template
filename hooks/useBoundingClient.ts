import { useCallback, useState } from 'react'
import useEventListener from './useEventListener'
import { useIsomorphicLayoutEffect } from './index'

const initValue = {
  width: 0,
  height: 0,
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  x: 0,
  y: 0
}
type BoundingClient = typeof initValue

function useBoundingClient<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  BoundingClient,
  T | null
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null)
  const [boundingClient, setBoundingClient] =
    useState<BoundingClient>(initValue)

  // Prevent too many rendering using useCallback
  const handleBoundingClient = useCallback(() => {
    const box = ref?.getBoundingClientRect()
    const doc = document?.documentElement
    setBoundingClient({
      width: box?.width || 0,
      height: box?.height || 0,
      bottom: (doc?.clientHeight || 0) - (box?.bottom || 0),
      left: box?.left || 0,
      right: (doc?.clientWidth || 0) - (box?.right || 0),
      top: box?.top || 0,
      x: box?.x || 0,
      y: box?.y || 0
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEventListener('resize', handleBoundingClient)

  useIsomorphicLayoutEffect(() => {
    handleBoundingClient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, boundingClient, ref]
}

export default useBoundingClient
