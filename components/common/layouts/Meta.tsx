import { siteOrigin, meta as defaultMeta } from '../../../lib/constants'

type Meta = {
  title?: string
  description?: string
  ogImage?: string
  noIndex?: boolean
  author?: string
  siteName?: string
  type?: string
  locale?: string
  keywords?: string
  subject?: string
  twitterSite?: string
  url?: string
}

export default function Head({
  title = defaultMeta.title,
  description = defaultMeta.description,
  ogImage = defaultMeta.ogImage,
  noIndex = defaultMeta.noIndex,
  author = defaultMeta.author,
  siteName = defaultMeta.siteName,
  type = defaultMeta.type,
  locale = defaultMeta.locale,
  keywords = defaultMeta.keywords,
  subject = defaultMeta.subject,
  twitterSite = defaultMeta.twitterSite,
  url = siteOrigin
}: Meta) {
  return (
    <>
      {noIndex ? (
        <>
          <meta name="googlebot" content="noindex" />
          <meta name="robots" content="noindex" />
        </>
      ) : (
        <>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </>
      )}{' '}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteOrigin}${url}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteOrigin}${url}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="730" />
      <meta property="og:image:height" content="487" />
      <meta property="og:image:type" content="image/png" />
      {author && <meta name="author" content={author} />}
      <meta name="keywords" content={keywords} />
      <meta name="subject" content={subject} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterSite} />
    </>
  )
}
