import type { NextPage } from 'next'

import Button from '../components/atoms/Button/Index'
import Head from '../components/common/Head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Button color="pink">Hola</Button>
      </main>
    </div>
  )
}

export default Home
