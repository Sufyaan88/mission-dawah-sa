import { mount } from '@vue/test-utils'
import AppHeader from '../../app/components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders the temporary logo and primary page links', () => {
    const wrapper = mount(AppHeader)
    const logo = wrapper.find('[data-testid="site-logo"]')
    const links = wrapper.findAll('nav a')

    expect(logo.text()).toBe('MDSA')
    expect(logo.attributes('href')).toBe('/')
    expect(links.map((link) => link.text())).toEqual([
      'Home',
      'Tahabbu',
      'Bursary',
    ])
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/',
      '/tahabbu',
      '/bursary',
    ])
  })
})
