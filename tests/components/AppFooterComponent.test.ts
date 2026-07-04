import { mount } from '@vue/test-utils'
import AppFooterComponent from '../../app/components/AppFooterComponent.vue'

describe('AppFooterComponent', () => {
  it('renders the copyright year and organization name', () => {
    const wrapper = mount(AppFooterComponent)
    const currentYear = new Date().getFullYear()

    expect(wrapper.element.tagName).toBe('FOOTER')
    expect(wrapper.text()).toBe(`© ${currentYear} Mission Dawah South Africa`)
  })
})
