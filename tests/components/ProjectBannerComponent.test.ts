import { mount } from '@vue/test-utils'
import ProjectBannerComponent from '../../app/components/ProjectBannerComponent.vue'

describe('ProjectBannerComponent', () => {
  it('renders project content, theme, and visual', () => {
    const wrapper = mount(ProjectBannerComponent, {
      props: {
        eyebrow: 'Our feeding project',
        title: 'Tahabbu',
        description: 'Supporting families through food assistance.',
        theme: 'green',
      },
      slots: {
        visual: '<span data-testid="project-visual">Visual</span>',
      },
    })

    expect(wrapper.attributes('data-theme')).toBe('green')
    expect(wrapper.get('h1').text()).toBe('Tahabbu')
    expect(wrapper.text()).toContain('Our feeding project')
    expect(wrapper.text()).toContain('Supporting families through food assistance.')
    expect(wrapper.get('[data-testid="project-visual"]').exists()).toBe(true)
  })
})
