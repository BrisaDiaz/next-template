import type { NextPage } from 'next'
import css from 'styled-jsx/css'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
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
          size="sm"
          color="gray"
          extraStyles={css.resolve`
            .text {
              margin: 2rem 0;
            }
            @media (min-width: 600px) {
              .text {
                font-size: var(--fontSizes-md);
              }
            }
          `}
        >
          Click the button to switch theme.
        </Text>
        <ModeSwitch
          variant="outline"
          rounded={true}
          data-testid="theme switch"
        />
        <style jsx>{`
          :global(.instructive-text) {
          }
        `}</style>
      </main>
    </div>
  )
}

export default Home
