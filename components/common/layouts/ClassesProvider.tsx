import { ReactNode, useMemo } from 'react'
import { generateCommonStyles } from '../utils'

export default function ClassesProvider({ children }: { children: ReactNode }) {
  const cssStyles = useMemo(() => generateCommonStyles(), [])
  return (
    <>
      {children}
      <style jsx global>{`
        ${cssStyles}
      `}</style>
    </>
  )
}
