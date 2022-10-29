import type { NextPage } from 'next'

import Button from '../components/atoms/Button/ThemedButton'
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
        <p>Click the button to switch theme .</p>
        <ModeSwitch
          variant="outline"
          rounded={true}
          data-testid="theme switch"
        />
      </main>
    </div>
  )
}

export default Home
