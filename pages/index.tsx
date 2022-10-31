import type { NextPage } from 'next'
import css from 'styled-jsx/css'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
import Head from '../components/common/Head'
import styles from '../styles/Home.module.css'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'
import { useScreenSize } from '../hooks'
const Home: NextPage = () => {
  const { isSM, isLG } = useScreenSize()

  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Button color="pink" variant="outline" size={isSM ? 'md' : 'sm'}>
          Accessible
        </Button>
        <Text
          size={isLG ? '2xl' : isSM ? 'lg' : 'sm'}
          extraStyles={css.resolve`
            .text {
              margin: 2rem 0;
            }
          `}
        >
          Click the button to switch theme.
        </Text>
        <ModeSwitch
          variant="ghost"
          size={isLG ? 'lg' : isSM ? 'md' : 'sm'}
          data-testid="theme switch"
        />
        <style jsx>{``}</style>
      </main>
    </div>
  )
}

export default Home
