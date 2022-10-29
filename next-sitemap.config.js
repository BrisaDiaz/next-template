const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://next-template-pi.vercel.app/'

module.exports = {
  siteUrl: siteUrl,

  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
  },
  exclude: []
}
