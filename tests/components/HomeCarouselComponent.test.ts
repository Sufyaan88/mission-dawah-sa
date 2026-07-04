import { mount } from '@vue/test-utils'
import HomeCarouselComponent from '../../app/components/HomeCarouselComponent.vue'

describe('HomeCarouselComponent', () => {
  it('switches between the welcome, Tahabbu, and Bursary slides', async () => {
    const wrapper = mount(HomeCarouselComponent)

    expect(wrapper.find('h1').text()).toContain('Mission Dawah South Africa')
    expect(wrapper.get('[data-testid="slide-count"]').text()).toBe('1 / 3')

    await wrapper.get('button[aria-label="Next slide"]').trigger('click')

    expect(wrapper.find('h1').text()).toContain('Tahabbu')
    expect(wrapper.find('a').attributes('href')).toBe('/tahabbu')
    expect(wrapper.get('[data-testid="slide-count"]').text()).toBe('2 / 3')

    await wrapper.get('button[aria-label="Next slide"]').trigger('click')

    expect(wrapper.find('h1').text()).toContain('Bursary')
    expect(wrapper.find('a').attributes('href')).toBe('/bursary')
    expect(wrapper.get('[data-testid="slide-count"]').text()).toBe('3 / 3')

    await wrapper.get('button[aria-label="Previous slide"]').trigger('click')

    expect(wrapper.find('h1').text()).toContain('Tahabbu')
  })

  it('automatically advances after ten seconds', async () => {
    vi.useFakeTimers()
    const wrapper = mount(HomeCarouselComponent)

    expect(wrapper.find('h1').text()).toContain('Mission Dawah South Africa')

    await vi.advanceTimersByTimeAsync(10000)

    expect(wrapper.find('h1').text()).toContain('Tahabbu')

    wrapper.unmount()
    vi.useRealTimers()
  })
})
