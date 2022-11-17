import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Meta, { MetaData } from './Meta'
export default function Head(meta: MetaData) {
  const route = useRouter()
  return (
    <NextHead>
      <Meta url={route.pathname} {...meta} />
    </NextHead>
  )
}
