import React, { RefObject } from 'react'
export default function useModalFocus({
  ref,
  isOpen,
  onEscape,
  onBlur,
  autoFocus,
  initialFocusRef,
  returnFocusOnClose,
  triggerNode
}: {
  ref: RefObject<unknown>
  isOpen: boolean
  returnFocusOnClose?: boolean
  onEscape?: () => void
  onBlur?: () => void
  autoFocus?: boolean
  initialFocusRef?: RefObject<unknown>
  triggerNode?: HTMLElement | null
}) {
  const [fallbackElement, setFallbackElement] =
    React.useState<HTMLElement | null>(null)
  const keydownCallback = (e: KeyboardEvent) => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

    if (!ref || !ref.current) return

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9

    const modal = ref.current as HTMLElement

    if (e.key === 'Escape' && onEscape) {
      const target = e?.target as HTMLElement
      const closestModal = target?.closest('[role="dialog"]') as HTMLElement
      if (!closestModal) return onEscape()

      const isChild = closestModal.contains(modal)

      modal === closestModal || isChild ? onEscape() : false
    }

    if (!isTabPressed) {
      return
    }
    const firstFocusableElement = modal.querySelectorAll(
      focusableElements
    )[0] as HTMLElement // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements)
    const lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement // get last element to be focused inside modal

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement?.focus() // add focus for the last focusable element
        e.preventDefault()
      }
    } else {
      // if tab key is pressed

      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement?.focus() // add focus for the first focusable element
        e.preventDefault()
      }
    }
  }
  const clickAndTouchCallback = (e: MouseEvent | TouchEvent) => {
    if (!ref || !ref.current) return

    const modal = ref.current as HTMLElement
    const target = e?.target as HTMLElement
    if (triggerNode && target === triggerNode) return
    if (modal === target || modal.contains(target)) return

    onBlur && onBlur()
  }
  React.useEffect(() => {
    if (!isOpen) {
      fallbackElement && returnFocusOnClose ? fallbackElement?.focus() : false
      return
    }
    setFallbackElement((document?.activeElement as HTMLElement) || null)
    const modal = ref.current as HTMLElement
    const firstToFocus = (initialFocusRef?.current as HTMLElement) || modal
    autoFocus && firstToFocus?.focus()
    document.addEventListener('keydown', keydownCallback)
    document.addEventListener('click', clickAndTouchCallback)
    document.addEventListener('touchstart', clickAndTouchCallback)
    return () => {
      window.removeEventListener('keydown', keydownCallback)
      window.removeEventListener('click', clickAndTouchCallback)
      window.removeEventListener('touchstart', clickAndTouchCallback)
    }
  }, [
    isOpen,
    autoFocus,
    fallbackElement,
    initialFocusRef,
    returnFocusOnClose,
    ref?.current
  ])
}
