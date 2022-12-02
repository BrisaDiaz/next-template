import { Ref } from 'react'

export function assignRef<T>(
  value: T,
  ref?: Ref<T> | React.MutableRefObject<null | T>
) {
  if (typeof ref === 'function') {
    ref(value)
  }
  assignMutableRef(value, ref as React.MutableRefObject<null | T>)
  return ref
}
export function assignMutableRef<T>(
  value: T,
  ref?: React.MutableRefObject<null | T>
) {
  if (ref != null && 'current' in ref) {
    ref.current = value
  }
}
