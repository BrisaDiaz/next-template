import type { NextPage } from 'next'
import css from 'styled-jsx/css'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/Index'
import Head from '../components/common/Head'
import styles from '../styles/Home.module.css'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Button color="pink" variant="outline">
          Accessible
        </Button>
        <Text
          size="lg"
          extraStyles={css`
            .text {
              margin: 1rem 0;
            }
          `}
        >
          Click the button to switch theme.
        </Text>
        <ModeSwitch variant="outline" rounded={true} />
        <style jsx>{`
          :global(.instructive-text) {
          }
        `}</style>
      </main>
    </div>
  )
}

export default Home
