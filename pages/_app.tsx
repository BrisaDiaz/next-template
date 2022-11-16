import '../styles/normalize.css'
import '../styles/fonts.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '@common/providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
