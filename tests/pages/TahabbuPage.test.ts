import { mount } from '@vue/test-utils'
import HadithSectionComponent from '../../app/components/HadithSectionComponent.vue'
import ProjectBannerComponent from '../../app/components/ProjectBannerComponent.vue'
import ProjectDonationComponent from '../../app/components/ProjectDonationComponent.vue'
import ProjectGoalComponent from '../../app/components/ProjectGoalComponent.vue'
import TahabbuPage from '../../app/pages/tahabbu.vue'

describe('TahabbuPage', () => {
  it('composes the shared project sections with Tahabbu content', () => {
    const wrapper = mount(TahabbuPage)
    const banner = wrapper.getComponent(ProjectBannerComponent)
    const goal = wrapper.getComponent(ProjectGoalComponent)
    const hadith = wrapper.getComponent(HadithSectionComponent)
    const donation = wrapper.getComponent(ProjectDonationComponent)

    expect(banner.props('title')).toBe('Tahabbu')
    expect(banner.props('theme')).toBe('green')
    expect(goal.props('theme')).toBe('green')
    expect(hadith.props('text')).toContain('Spread the Salam, feed others')
    expect(hadith.props('source')).toBe('Jamiʿ at-Tirmidhi 2485')
    expect(donation.props('accountNumber')).toBe('63145999017')
    expect(donation.props('branchCode')).toBe('200409')
    expect(donation.props('reference')).toBe('Meal')
  })
})
