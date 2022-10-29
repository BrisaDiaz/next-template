import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields: ISitemapField[] = [
    // {
    //   loc: 'https://example.com',
    //   lastmod: new Date().toISOString()
    // },
    // {
    //   loc: 'https://example.com/dynamic-path-2',
    //   lastmod: new Date().toISOString()
    // }
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  return <></>
}
