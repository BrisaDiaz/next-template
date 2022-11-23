import type { NextPage } from 'next'

import React, { useState } from 'react'
import Button from '@components/atoms/Button/Themed'
import Text from '@components/atoms/Text/Themed'
import Head from '@common/providers/Head'
import ModeSwitch from '@components/atoms/ModeSwitch/Themed'
import { useBreakpoints } from '@hooks'
import Box from '@components/atoms/Box/Themed'
import { theme } from '@common/utils'
import Link from '@components/atoms/Link/Themed'
import Breadcrumbs from '@components/molecules/Breadcrumbs/Themed'
import { Card, CardContent, CardMedia } from '@components/atoms/Card/Themed'

const Home: NextPage = () => {
  const breakpoint = useBreakpoints()
  const [readMore, setReadMore] = useState(false)
  const toggleReadMore = () => setReadMore(!readMore)
  const breadcrumbsLinks = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '#components' },
    { label: 'Atoms', href: '#atoms' },
    { label: 'Box', href: '#box' },
    { label: ' Layouts with Box' }
  ]
  return (
    <>
      <Head />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        as="main"
        cs={{
          css: {
            px: theme.space['4'],
            pt: theme.space['2'],
            pb: theme.space['8'],
            minH: theme.size['screen-h'],
            maxW: theme.size['container-xl'],
            mx: 'auto'
          }
        }}
      >
        <ModeSwitch
          lightColorSchema="blue"
          darkColorSchema="orange"
          variant="ghost"
          cs={{
            css: {
              alignSelf: 'flex-end'
            }
          }}
          size={breakpoint.up('sm') ? 'md' : 'sm'}
          data-testid="theme switch"
        />

        <Breadcrumbs
          maxItems={2}
          color="gray"
          cs={{
            css: {
              alignSelf: 'flex-start',
              mb: theme.space['4']
            }
          }}
        >
          {breadcrumbsLinks.map((link, index) =>
            link.href ? (
              <Link href={link.href} key={index} fontSize="sm">
                {link.label}
              </Link>
            ) : (
              <Text fontSize="sm" as="p" key={index}>
                {link.label}
              </Text>
            )
          )}
        </Breadcrumbs>
        <Text
          fontSize={
            breakpoint.up('xl') ? '3xl' : breakpoint.up('sm') ? 'xl' : 'lg'
          }
          as="h1"
          fontWeight="semibold"
          cs={{
            css: {
              mb: theme.space['2']
            }
          }}
        >
          Layouts with Box
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
            css: {
              my: theme.space['8'],
              maxW: theme.size['container-sm'],
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
              css: {
                pl: theme.space['2'],
                bgColor: theme.paletteColor['blue-300']
              }
            }}
          >
            Footer
          </Box>
        </Box>
        <Card
          cs={{
            css: {
              my: theme.space['8'],
              maxW: {
                xs: theme.size['container-sm'],
                md: theme.size['container-lg']
              }
            }
          }}
          size={breakpoint.up('lg') ? 'md' : 'sm'}
        >
          <CardContent
            alignItems="flex-start"
            gap="4"
            flexDirection={breakpoint.up('md') ? 'row' : 'column'}
            rounded={true}
          >
            <CardMedia
              height={512}
              width={512}
              rounded={true}
              src="/images/ico/maskable_icon_x512.png"
              unoptimized
              loader={({ src }) => src}
              alt="og image"
              layout="responsive"
              cs={{
                css: {
                  w: { xs: '100%', md: '30%' },
                  h: 'auto',
                  mx: 'auto'
                }
              }}
            />
            <CardContent
              flexDirection="column"
              alignItems={breakpoint.up('md') ? 'flex-start' : 'center'}
              cs={{ css: { w: { xs: '100%', md: '70%' } } }}
              gap="4"
              bordered={breakpoint.up('md') ? 'left' : 'none'}
            >
              <Text
                fontWeight="semibold"
                as="h2"
                fontSize={
                  breakpoint.up('lg')
                    ? '2xl'
                    : breakpoint.up('sm')
                    ? 'xl'
                    : 'lg'
                }
              >
                Duis suscipit
              </Text>
              <Text
                noOfLines={readMore ? undefined : breakpoint.up('md') ? 4 : 10}
                fontSize={breakpoint.up('lg') ? 'md' : 'sm'}
                cs={{
                  css: {
                    h: 'auto'
                  }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                enim a eros eleifend dignissim in pretium leo. Etiam quis lorem
                ante. Maecenas a risus laoreet, porta tortor vel, ultrices ante.
                Duis suscipit sit amet diam eget mattis. Aenean lobortis lacinia
                mi, sagittis pulvinar felis ornare ut. Duis tempus ex eleifend
                sem dignissim porta. Aliquam id ornare justo. Nulla posuere ante
                at quam aliquet, in faucibus leo pretium. Vivamus eget maximus
                purus, non finibus erat. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Cras lectus tellus, scelerisque at
                quam vitae, vestibulum eleifend metus. Donec at facilisis
                ligula, non gravida odio. Proin nec orci urna. Suspendisse
                fermentum, ligula a venenatis vestibulum, massa lacus iaculis
                enim, eget consectetur tellus augue vitae arcu. Proin eros
                libero, pharetra vitae metus et, convallis pharetra lacus.
                Vivamus facilisis sed ipsum vel egestas. Aenean aliquet justo
                vel dui malesuada commodo. Donec volutpat leo ex, porttitor
                fermentum ex rutrum ac. Mauris eu eros ut urna pharetra vehicula
                sed eu elit. Vivamus varius tempor dignissim.
                <Link
                  color="teal"
                  fontSize={breakpoint.up('lg') ? 'md' : 'sm'}
                  href="https://github.com/BrisaDiaz/next-template"
                  isExternal={true}
                >
                  Check the documentation
                </Link>
              </Text>
              <Button
                variant="outline"
                size={breakpoint.up('md') ? 'md' : 'sm'}
                onClick={() => toggleReadMore()}
                colorSchema="teal"
              >
                {readMore ? 'Read Less' : 'Read More'}
              </Button>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Home
