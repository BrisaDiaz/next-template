import { useState, useEffect, createContext, useContext } from 'react'
export type Mode = 'light' | 'dark'

export const ContextProvider = createContext({
  mode: 'light' as Mode,
  toggleMode: () => {
    return
  }
})
export default function ThemeProvider({
  children
}: React.HTMLAttributes<HTMLElement>) {
  const [mode, setMode] = useState<Mode>('light')

  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.style.colorScheme = 'dark'
    setMode('dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
    document.documentElement.style.colorScheme = 'light'
    setMode('light')
  }

  useEffect(() => {
    const storedTheme = window?.localStorage?.getItem('theme')

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const defaultDark =
      storedTheme === 'dark' || (storedTheme === null && prefersDark)

    defaultDark ? setDark() : setLight()
  }, [])

  function toggleMode() {
    mode === 'light' ? setDark() : setLight()
  }

  return (
    <ContextProvider.Provider value={{ mode, toggleMode }}>
      {children}
    </ContextProvider.Provider>
  )
}
export const useTheme = () => {
  const value = useContext(ContextProvider)
  return value
}
