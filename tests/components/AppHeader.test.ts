import { mount } from '@vue/test-utils'
import AppHeader from '../../app/components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders NGO name', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('h1').text()).toBe('Mission Dawah South Africa')
  })

  it('renders navigation links', () => {
    const wrapper = mount(AppHeader)
    const links = wrapper.findAll('nav a')
    expect(links).toHaveLength(2)
  })
})