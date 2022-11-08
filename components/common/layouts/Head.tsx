import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Meta from './Meta'
export default function Head() {
  const route = useRouter()
  return (
    <NextHead>
      <Meta url={route.pathname} />
    </NextHead>
  )
}
