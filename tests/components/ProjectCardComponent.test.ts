import { mount } from '@vue/test-utils'
import ProjectCardComponent from '../../app/components/ProjectCardComponent.vue'

describe('ProjectCardComponent', () => {
  it('renders project details, link, and icon', () => {
    const wrapper = mount(ProjectCardComponent, {
      props: {
        title: 'Tahabbu',
        description: 'Supporting families with food assistance.',
        href: '/tahabbu',
      },
      slots: {
        icon: '<span data-testid="project-icon">Icon</span>',
      },
    })

    expect(wrapper.get('a').attributes('href')).toBe('/tahabbu')
    expect(wrapper.get('h3').text()).toBe('Tahabbu')
    expect(wrapper.text()).toContain('Supporting families with food assistance.')
    expect(wrapper.get('[data-testid="project-icon"]').exists()).toBe(true)
  })
})
