import type { NextPage } from 'next'

import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
import Head from '../components/common/Head'
import styles from '../styles/Home.module.css'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'
import { useBreakpoints } from '../hooks'
import createStyles from '../components/common/createStyles'

const Home: NextPage = () => {
  const breakpoint = useBreakpoints()

  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Button
          color="pink"
          variant="outline"
          size={breakpoint.up('md') ? 'md' : 'sm'}
        >
          Accessible
        </Button>

        <Text
          size={breakpoint.up('xl') ? '2xl' : breakpoint.up('sm') ? 'lg' : 'sm'}
          extraStyles={createStyles({
            selector: '.text',
            reactCss: { margin: ' 2rem 0' }
          })}
        >
          Click the button to switch theme.
        </Text>
        <ModeSwitch
          variant="ghost"
          size={breakpoint.up('xl') ? 'lg' : breakpoint.up('sm') ? 'md' : 'sm'}
          data-testid="theme switch"
        />
      </main>
    </div>
  )
}

export default Home
