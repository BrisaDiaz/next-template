import '../styles/normalize.css'
import '../styles/fonts.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../components/common/layouts/ThemeProvider'
import ClassesProvider from '../components/common/layouts/ClassesProvider'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClassesProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClassesProvider>
  )
}

export default MyApp
