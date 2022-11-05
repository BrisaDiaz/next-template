import type { NextPage } from 'next'

import { useState } from 'react'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
import Head from '../components/common/layouts/Head'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'
import { useBreakpoints } from '../hooks'
import Box from '../components/atoms/Box'

const Home: NextPage = () => {
  const breakpoint = useBreakpoints()
  const [readMore, setReadMore] = useState(false)
  const toggleReadMore = () => setReadMore(!readMore)

  return (
    <>
      <Head />
      <Box
        display="flex"
        className="px-2 pt-4 pb-16 align-item-center min-h-screen-h display-flex flex-column "
        as="main"
      >
        <ModeSwitch
          lightModeColor="blue"
          darkModeColor="orange"
          variant="ghost"
          size={breakpoint.up('xl') ? 'lg' : breakpoint.up('sm') ? 'md' : 'sm'}
          data-testid="theme switch"
        />
        <Text
          fontSize={
            breakpoint.up('xl') ? '3xl' : breakpoint.up('sm') ? 'xl' : 'lg'
          }
          className="my-2 font-weight-semibold"
          as="h1"
        >
          Click to switch theme
        </Text>

        <Text fontSize={breakpoint.up('sm') ? 'md' : 'sm'}>
          Layout made with {'<Box  display="grid"/>'} and{' '}
          {'<Box  display="grid-item"/>'}
        </Text>
        <Box
          display="grid"
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          templateRows={'50px 1fr 30px'}
          templateColumns={'150px 1fr'}
          gap="2"
          className=" w-full h-72 max-w-container-md  mt-4 font-weight-bold "
        >
          <Box
            area={'header'}
            display="grid-item"
            className="pl-2 bg-orange-300"
          >
            Header
          </Box>
          <Box area={'nav'} display="grid-item" className="pl-2 bg-pink-300">
            Nav
          </Box>
          <Box area={'main'} display="grid-item" className="pl-2 bg-green-300">
            Main
          </Box>
          <Box area={'footer'} display="grid-item" className="pl-2 bg-blue-300">
            Footer
          </Box>
        </Box>

        <Text
          noOfLines={readMore ? undefined : breakpoint.up('md') ? 5 : 15}
          fontSize={breakpoint.up('sm') ? 'md' : 'sm'}
          className=" max-w-container-lg  px-4 my-8 gap-8 flex flex-column align-item-center"
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
          size={breakpoint.up('md') ? 'md' : 'sm'}
          onClick={() => toggleReadMore()}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </Box>
    </>
  )
}

export default Home
