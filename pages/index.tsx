import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
import Head from '../components/common/Head'
import styles from '../styles/Home.module.css'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'
import { useBreakpoints } from '../hooks'
import createStyles from '../components/common/createStyles'

const Home: NextPage = () => {
  const breakpoint = useBreakpoints()
  const [readMore, setReadMore] = useState(false)
  const toggleReadMore = () => setReadMore(!readMore)
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Text
          size={breakpoint.up('xl') ? '3xl' : breakpoint.up('sm') ? 'xl' : 'md'}
          extraStyles={createStyles({
            selector: '.text',
            reactCss: { margin: ' 2rem 0' }
          })}
          weight="semibold"
        >
          Click to switch theme
        </Text>
        <ModeSwitch
          lightModeColor="blue"
          darkModeColor="yellow"
          variant="ghost"
          size={breakpoint.up('xl') ? 'lg' : breakpoint.up('sm') ? 'md' : 'sm'}
          data-testid="theme switch"
        />
        <Text
          noOfLines={readMore ? undefined : 5}
          size={breakpoint.up('sm') ? 'md' : 'sm'}
          extraStyles={createStyles({
            selector: '.text',
            reactCss: { maxWidth: 'var(--sizes-container-lg)' }
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu enim a
          eros eleifend dignissim in pretium leo. Etiam quis lorem ante.
          Maecenas a risus laoreet, porta tortor vel, ultrices ante. Duis
          suscipit sit amet diam eget mattis. Aenean lobortis lacinia mi,
          sagittis pulvinar felis ornare ut. Duis tempus ex eleifend sem
          dignissim porta. Aliquam id ornare justo. Nulla posuere ante at quam
          aliquet, in faucibus leo pretium. Vivamus eget maximus purus, non
          finibus erat. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Cras lectus tellus, scelerisque at quam vitae, vestibulum
          eleifend metus. Donec at facilisis ligula, non gravida odio. Proin nec
          orci urna. Suspendisse fermentum, ligula a venenatis vestibulum, massa
          lacus iaculis enim, eget consectetur tellus augue vitae arcu. Proin
          eros libero, pharetra vitae metus et, convallis pharetra lacus.
          Vivamus facilisis sed ipsum vel egestas. Aenean aliquet justo vel dui
          malesuada commodo. Donec volutpat leo ex, porttitor fermentum ex
          rutrum ac. Mauris eu eros ut urna pharetra vehicula sed eu elit.
          Vivamus varius tempor dignissim. Phasellus pellentesque velit rhoncus
          vulputate aliquet. Vestibulum nec leo nisi. Vestibulum facilisis,
          mauris a luctus convallis, lacus lectus consectetur metus, tincidunt
          pulvinar lorem leo sit amet libero. Vivamus eleifend, elit sit amet
          dapibus molestie, ipsum turpis euismod justo, eget interdum dolor
          dolor sit amet nulla. Aliquam consectetur risus at augue lacinia
          suscipit. Vestibulum id fermentum sapien.
        </Text>
        <Button
          color="pink"
          variant="outline"
          size={breakpoint.up('md') ? 'md' : 'sm'}
          onClick={() => toggleReadMore()}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </main>
    </div>
  )
}

export default Home
