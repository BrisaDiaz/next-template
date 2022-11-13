import type { NextPage } from 'next'

import React, { useState } from 'react'
import Button from '../components/atoms/Button/ThemedButton'
import Text from '../components/atoms/Text/ThemedText'
import Head from '../components/common/layouts/Head'
import ModeSwitch from '../components/atoms/ModeSwitch/Index'
import { useBreakpoints } from '../hooks'
import Box from '../components/atoms/Box'
import { theme } from '../components/common/utils'
const Home: NextPage = () => {
  const breakpoint = useBreakpoints()
  const [readMore, setReadMore] = useState(false)
  const toggleReadMore = () => setReadMore(!readMore)

  return (
    <>
      <Head />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        as="main"
        cs={{
          selector: '.box',
          css: {
            p: theme.space['4'],
            pb: theme.space['8'],
            minH: theme.size['screen-h']
          }
        }}
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
          cs={{
            selector: '.box',
            css: {
              mt: theme.space['4'],
              maxW: theme.size['container-md'],
              w: theme.size.full,
              minH: theme.size['72'],
              fontWeight: theme.fontWeight.bold
            }
          }}
        >
          <Box
            area={'header'}
            display="grid-item"
            cs={{
              selector: '.box',
              css: {
                pl: theme.space['2'],
                bgColor: theme.paletteColor['orange-300']
              }
            }}
          >
            Header
          </Box>
          <Box
            area={'nav'}
            display="grid-item"
            cs={{
              selector: '.box',
              css: {
                pl: theme.space['2'],
                bgColor: theme.paletteColor['pink-300']
              }
            }}
          >
            Nav
          </Box>
          <Box
            area={'main'}
            display="grid-item"
            cs={{
              selector: '.box',
              css: {
                pl: theme.space['2'],
                bgColor: theme.paletteColor['green-300']
              }
            }}
          >
            Main
          </Box>
          <Box
            area={'footer'}
            display="grid-item"
            cs={{
              selector: '.box',
              css: {
                pl: theme.space['2'],
                bgColor: theme.paletteColor['blue-300']
              }
            }}
          >
            Footer
          </Box>
        </Box>
        <Text
          noOfLines={readMore ? undefined : breakpoint.up('md') ? 5 : 15}
          fontSize={breakpoint.up('sm') ? 'md' : 'sm'}
          cs={{
            selector: '.text',
            css: {
              maxW: theme.size['container-lg'],
              mt: theme.space['8'],
              mb: theme.space['8']
            }
          }}
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
          colorSchema={breakpoint.up('md') ? 'blue' : 'red'}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </Box>
    </>
  )
}

export default Home
