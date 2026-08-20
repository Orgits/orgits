/** @type {import('next').MetadataRoute.Sitemap} */
const siteUrl = 'https://www.orgits.in'

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/services',
    '/app-development',
    '/web-development',
    '/uiux-design',
    '/digital-marketing',
    '/corporate-agency',
    '/contact',
    '/blog',
    '/team',
    '/testimonial',
    '/pricing',
    '/project',
    '/faq',
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}