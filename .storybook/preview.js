import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/normalize.css'
import ThemeProvider from '../components/common/layouts/ThemeProvider'
import ClassesProvider from '../components/common/layouts/ClassesProvider'

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
    <ClassesProvider>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </ClassesProvider>
  )
}
