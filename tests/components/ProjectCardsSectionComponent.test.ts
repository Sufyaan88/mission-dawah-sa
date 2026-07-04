import { mount } from '@vue/test-utils'
import ProjectCardComponent from '../../app/components/ProjectCardComponent.vue'
import ProjectCardsSectionComponent from '../../app/components/ProjectCardsSectionComponent.vue'

describe('ProjectCardsSectionComponent', () => {
  it('renders cards for Tahabbu and Bursary', () => {
    const wrapper = mount(ProjectCardsSectionComponent)
    const cards = wrapper.findAllComponents(ProjectCardComponent)

    expect(cards).toHaveLength(2)
    expect(cards.map((card) => card.props('title'))).toEqual(['Tahabbu', 'Bursary'])
    expect(cards.map((card) => card.props('href'))).toEqual(['/tahabbu', '/bursary'])
  })
})
