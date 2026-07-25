import { mount } from '@vue/test-utils'
import HadithSectionComponent from '../../app/components/HadithSectionComponent.vue'
import ProjectBannerComponent from '../../app/components/ProjectBannerComponent.vue'
import ProjectDonationComponent from '../../app/components/ProjectDonationComponent.vue'
import ProjectGoalComponent from '../../app/components/ProjectGoalComponent.vue'
import TahabbuPage from '../../app/pages/tahabbu.vue'

const { useHeadMock, useSeoMetaMock } = vi.hoisted(() => ({
  useHeadMock: vi.fn(),
  useSeoMetaMock: vi.fn(),
}))

vi.stubGlobal('useHead', useHeadMock)
vi.stubGlobal('useSeoMeta', useSeoMetaMock)

describe('TahabbuPage', () => {
  it('sets the Tahabbu page canonical URL', () => {
    mount(TahabbuPage)

    expect(useHeadMock).toHaveBeenCalledWith({
      link: [
        {
          rel: 'canonical',
          href: 'https://missiondawah.org.za/tahabbu',
        },
      ],
    })
  })

  it('sets the Tahabbu page SEO title and description', () => {
    mount(TahabbuPage)

    expect(useSeoMetaMock).toHaveBeenCalledWith({
      title: 'Tahabbu Feeding Scheme | Mission Dawah South Africa',
      description: 'Learn how the Tahabbu project strengthens communities through compassionate, practical food support.',
    })
  })

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
