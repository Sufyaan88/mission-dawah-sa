import { mount } from '@vue/test-utils'
import HomeCarouselComponent from '../../app/components/HomeCarouselComponent.vue'
import HomePage from '../../app/pages/index.vue'

describe('HomePage', () => {
  it('renders the organization introduction', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.text()).toContain('Mission Dawah South Africa')
    expect(wrapper.find('h2').text()).toBe('Serving communities through compassion and opportunity')
    expect(wrapper.text()).toContain('food support and access to education')
  })

  it('renders the project carousel', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findComponent(HomeCarouselComponent).exists()).toBe(true)
  })
})
