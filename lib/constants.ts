export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof window !== 'undefined'
export const isServer = !isClient

export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (isDev ? 'http://localhost:3000' : 'https://next-template-pi.vercel.app/')
)
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Next.js Template'

export const siteOrigin = siteURL.origin
export const googleSiteVerification =
  process.env.NEXT_GOOGLE_SITE_VERIFICATION ?? ''
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''

export const meta = {
  title: 'Nextjs Template',
  description:
    'Next.js frontend template with: eslint - prettier - styleslint - husky - conventional commits - jest - react testing library - cypress - storybook - githube actions configuration',
  subject: 'frontend template made with next.js',
  ogImage: {
    url: `${siteOrigin}/images/ico/og.png`,
    width: '730',
    height: '487'
  },
  siteName: siteName,
  twitterSite: '',
  author: '',
  locale: 'en_US',
  lang: 'en',
  type: 'website',
  noIndex: false,
  keywords: 'next.js, frontend , template'
}
