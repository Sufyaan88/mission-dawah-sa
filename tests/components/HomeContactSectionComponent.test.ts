import { mount } from '@vue/test-utils'
import HomeContactSectionComponent from '../../app/components/HomeContactSectionComponent.vue'

describe('HomeContactSectionComponent', () => {
  it('renders email and Instagram contact links', () => {
    const wrapper = mount(HomeContactSectionComponent)
    const links = wrapper.findAll('a')

    expect(wrapper.get('h2').text()).toBe('Contact us')
    expect(links.map((link) => link.attributes('href'))).toEqual([
      'mailto:missiondawahsa@gmail.com',
      'https://www.instagram.com/missiondawahsouthafrica/',
    ])
    expect(links[1]?.attributes('target')).toBe('_blank')
    expect(links[1]?.attributes('rel')).toContain('noopener')
  })
})
