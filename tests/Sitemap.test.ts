import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('SEO discovery files', () => {
  it('lists every canonical public page in the sitemap', () => {
    const sitemap = readFileSync(resolve('public/sitemap.xml'), 'utf8')

    expect(sitemap).toContain('<loc>https://missiondawah.org.za/</loc>')
    expect(sitemap).toContain('<loc>https://missiondawah.org.za/tahabbu</loc>')
    expect(sitemap).toContain('<loc>https://missiondawah.org.za/bursary</loc>')
    expect(sitemap.match(/<url>/g)).toHaveLength(3)
  })

  it('advertises the sitemap in robots.txt', () => {
    const robots = readFileSync(resolve('public/robots.txt'), 'utf8')

    expect(robots).toContain('Sitemap: https://missiondawah.org.za/sitemap.xml')
  })
})
