import { mount } from '@vue/test-utils'
import AppHeaderComponent from '../../app/components/AppHeaderComponent.vue'

describe('AppHeaderComponent', () => {
  it('renders the temporary logo and primary page links', () => {
    const wrapper = mount(AppHeaderComponent)
    const logo = wrapper.find('[data-testid="site-logo"]')
    const links = wrapper.findAll('[data-testid="desktop-navigation"] a')

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

  it('toggles the mobile navigation menu', async () => {
    const wrapper = mount(AppHeaderComponent)
    const toggle = wrapper.get('button[aria-controls="mobile-navigation"]')

    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('[data-testid="mobile-navigation"]').exists()).toBe(false)

    await toggle.trigger('click')

    const mobileNavigation = wrapper.get('[data-testid="mobile-navigation"]')
    const links = mobileNavigation.findAll('a')

    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(links.map((link) => link.text())).toEqual(['Home', 'Tahabbu', 'Bursary'])
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/',
      '/tahabbu',
      '/bursary',
    ])

    await toggle.trigger('click')

    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('[data-testid="mobile-navigation"]').exists()).toBe(false)
  })
})
