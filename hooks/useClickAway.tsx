import React, { useState } from 'react'

export default function useClickAway<
  T extends HTMLElement = HTMLDivElement
>(): [(node: T | null) => void, boolean] {
  const [ref, setRef] = useState<T | null>(null)
  const [isClickingAway, setIsClickingAway] = useState<boolean>(false)
  React.useEffect(() => {
    const clickAndTouchCallback = (e: MouseEvent | TouchEvent) => {
      if (!ref) return

      const target = e?.target as HTMLElement

      setIsClickingAway(ref !== target && !ref.contains(target))
    }
    document.addEventListener('click', clickAndTouchCallback)
    document.addEventListener('touchstart', clickAndTouchCallback)
    return () => {
      window.removeEventListener('click', clickAndTouchCallback)
      window.removeEventListener('touchstart', clickAndTouchCallback)
    }
  }, [ref])
  return [setRef, isClickingAway]
}
