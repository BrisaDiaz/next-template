# Dark Mode

## Theme mode provider  
   
*value*  
> `mode`: (string) Describes the current mode state, it could be either "light" (default mode) or "dark".    
> `toggleMode`: (function(): void) Allows you to switch between modes.
```ts
// from ./pages/_app.tsx

import ThemeProvider from '@common/providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

```
## Theme switch component  
   
A SwitchMode component is provided within the project, you can make it available in every page by importing it inside a new layout and then wrapping the _app component with it.  
   
```tsx
/// from ./components/templates/Layout.tsx

import { ReactNode } from 'react'
import ModeSwitch from '@components/atoms/ModeSwitch/Themed'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ModeSwitch />
      {children}
    </>
  )
}
```
```ts
/// from ./pages/_app.tsx

import type { AppProps } from 'next/app'
import Layout from '@components/templates/Layout'
import ThemeProvider from '@common/providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
```
## Custom theme switch component  example
  
```tsx

import { useTheme } from '@common/providers/ThemeProvider'

export default function DarkModeSwitch() {
  const { toggleMode, mode } = useTheme()
  const toSwitchMode = mode === 'light' ? 'dark mode' : 'light mode'

  return (
    <button
      onClick={() => toggleMode()}
    >{`click to toggle ${toSwitchMode}`}</button>
  )
}
```

## How to use theme context inside a custom component
   
```tsx
// example extract from ./components/atoms/Themed.tsx

import { forwardRef, Ref } from 'react'
import { useTheme } from '@common/providers/ThemeProvider'
import Button, { ButtonProps } from '.'

function ThemedButton(props: ButtonProps, ref?: Ref<HTMLButtonElement>) {
  const { mode } = useTheme()

  return <Button themeMode={mode} {...props} ref={ref} />
}
export default forwardRef(ThemedButton)

```