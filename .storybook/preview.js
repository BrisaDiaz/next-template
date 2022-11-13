import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/normalize.css'
import ThemeProvider from '../components/common/providers/ThemeProvider'


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff'
        },
        {
          name: 'dark',
          value: '#1a202c'
        }
      ]
    }
  },
  decorators: (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}
