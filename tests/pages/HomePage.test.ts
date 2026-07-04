import { mount } from '@vue/test-utils'
import HomeCarouselComponent from '../../app/components/HomeCarouselComponent.vue'
import HomeContactSectionComponent from '../../app/components/HomeContactSectionComponent.vue'
import ProjectCardsSectionComponent from '../../app/components/ProjectCardsSectionComponent.vue'
import HomePage from '../../app/pages/index.vue'

describe('HomePage', () => {
  it('keeps the organization introduction inside the carousel', () => {
    const wrapper = mount(HomePage)
    const carousel = wrapper.findComponent(HomeCarouselComponent)

    expect(wrapper.find('main').exists()).toBe(true)
    expect(carousel.text()).toContain('Mission Dawah South Africa')
    expect(carousel.text()).toContain('Serving communities through compassion and opportunity')
    expect(wrapper.find('#intro-title').exists()).toBe(false)
  })

  it('renders the project carousel', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findComponent(HomeCarouselComponent).exists()).toBe(true)
  })

  it('renders the project cards section', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findComponent(ProjectCardsSectionComponent).exists()).toBe(true)
  })

  it('renders the contact section', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findComponent(HomeContactSectionComponent).exists()).toBe(true)
  })
})
