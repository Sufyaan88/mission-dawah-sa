import { mount } from '@vue/test-utils'
import HadithSectionComponent from '../../app/components/HadithSectionComponent.vue'
import ProjectBannerComponent from '../../app/components/ProjectBannerComponent.vue'
import ProjectDonationComponent from '../../app/components/ProjectDonationComponent.vue'
import ProjectGoalComponent from '../../app/components/ProjectGoalComponent.vue'
import BursaryPage from '../../app/pages/bursary.vue'

describe('BursaryPage', () => {
  it('composes the shared project sections with Bursary content', () => {
    const wrapper = mount(BursaryPage)
    const banner = wrapper.getComponent(ProjectBannerComponent)
    const goal = wrapper.getComponent(ProjectGoalComponent)
    const hadith = wrapper.getComponent(HadithSectionComponent)
    const donation = wrapper.getComponent(ProjectDonationComponent)

    expect(banner.props('title')).toBe('Bursary')
    expect(banner.props('theme')).toBe('blue')
    expect(goal.props('theme')).toBe('blue')
    expect(hadith.props('text')).toContain('path in the pursuit of knowledge')
    expect(hadith.props('source')).toBe('Sahih Muslim 2699a')
    expect(donation.props('accountNumber')).toBe('63145999017')
    expect(donation.props('branchCode')).toBe('200409')
  })
})
