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
type Coordinates = typeof initValue

function useCoordinates<
  T extends HTMLElement = HTMLDivElement,
  P extends HTMLElement = HTMLDivElement
>(): [
  (node: T | null) => void,
  (node: P | null) => void,
  Coordinates,
  T | null,
  P | null
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null)
  const [parentRef, setParentRef] = useState<P | null>(null)
  const [boundingClient, setCoordinates] = useState<Coordinates>(initValue)

  // Prevent too many rendering using useCallback
  const handleCoordinates = useCallback(() => {
    const box = ref?.getBoundingClientRect()
    const parentBox = parentRef?.getBoundingClientRect()

    setCoordinates({
      width: box?.width || 0,
      height: box?.height || 0,
      bottom: (parentBox?.bottom || 0) - (box?.bottom || 0),
      left: (box?.left || 0) - (parentBox?.left || 0),
      right: (parentBox?.right || 0) - (box?.right || 0),
      top: (box?.top || 0) - (parentBox?.top || 0),
      x: box?.x || 0,
      y: box?.y || 0
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEventListener('resize', handleCoordinates)

  useIsomorphicLayoutEffect(() => {
    handleCoordinates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, setParentRef, boundingClient, ref, parentRef]
}

export default useCoordinates
