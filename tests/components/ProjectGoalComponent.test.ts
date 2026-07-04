import { mount } from '@vue/test-utils'
import ProjectGoalComponent from '../../app/components/ProjectGoalComponent.vue'

describe('ProjectGoalComponent', () => {
  it('renders the project goal content and theme', () => {
    const wrapper = mount(ProjectGoalComponent, {
      props: {
        eyebrow: 'Our goal',
        title: 'Supporting families with dignity',
        paragraphs: [
          'Tahabbu provides practical food support.',
          'The project aims to strengthen local communities.',
        ],
        theme: 'green',
      },
    })

    expect(wrapper.attributes('data-theme')).toBe('green')
    expect(wrapper.get('h2').text()).toBe('Supporting families with dignity')
    expect(wrapper.text()).toContain('Our goal')
    expect(wrapper.findAll('[data-testid="goal-content"] p').map((paragraph) => paragraph.text())).toEqual([
      'Tahabbu provides practical food support.',
      'The project aims to strengthen local communities.',
    ])
  })
})
