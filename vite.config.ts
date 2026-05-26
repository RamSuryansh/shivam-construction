import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type Plugin } from 'vite'

function normalizeSiteUrl(value: string | undefined) {
  const trimmedValue = value?.trim().replace(/\/+$/, '') ?? ''

  if (!trimmedValue) {
    return ''
  }

  return /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`
}

function toAbsoluteUrl(siteUrl: string, path: string) {
  return siteUrl ? `${siteUrl}${path}` : path
}

function seoAssetsPlugin(siteUrl: string): Plugin {
  const canonicalUrl = toAbsoluteUrl(siteUrl, '/')
  const socialPreviewUrl = toAbsoluteUrl(siteUrl, '/social-preview.jpg')
  const logoUrl = toAbsoluteUrl(siteUrl, '/favicon.png')

  return {
    name: 'shivam-seo-assets',
    transformIndexHtml(html) {
      return html
        .replaceAll('%SITE_CANONICAL_URL%', canonicalUrl)
        .replaceAll('%SITE_SOCIAL_PREVIEW_URL%', socialPreviewUrl)
        .replaceAll('%SITE_LOGO_URL%', logoUrl)
    },
    generateBundle() {
      const robotsSource = [
        'User-agent: *',
        'Allow: /',
        siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : '',
        '',
      ]
        .filter((line, index, lines) => line || lines[index - 1])
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robotsSource,
      })

      if (!siteUrl) {
        return
      }

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || env.SITE_URL)

  return {
    plugins: [seoAssetsPlugin(siteUrl), tailwindcss(), svelte()],
  }
})
